import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['id'],
  id: null,
  newItemAdded:false,
  total:null,
  quanity:null,
  issue_num:null,
  size:null,
  type:null,
  comics:Ember.computed(function(){
    return this.store.query('item',{comic:1});
  }),
  vendorChoices:Ember.computed(function(){
    return this.store.findAll('vendor');
  }),
  brandChoices:Ember.computed(function(){
    return this.store.findAll('brand');
  }),
  writerChoices:Ember.computed(function(){
    var writers=this.store.findAll('writer');
    return writers;
  }),
  illustratorChoices:Ember.computed(function(){
    var illustrator=this.store.findAll('illustrator');
    return illustrator;
  }),
  tagChoices:Ember.computed(function(){
    var tags=this.store.findAll('tag');
    return tags;
  }),
  item:Ember.computed('id','model',function(){
    if(this.get('model').content.length===1) {
      return this.get('model').content[0].record;
    } else{
      return null;
    }
  }),
  itemObserver:Ember.observer('item',function(){
    var item=this.get('item');
    if(item){
      if(item.get('typeName')==='comic' || item.get('typeName')==='trade'){
        this.set('book',true);
      } else {
        this.set('book',false);
      }
    } else {
      this.set('book',false);
    }
  }),
  actions:{
    alertToNoItem(){
      var item = this.get('item');
      if(item===null){
        $('.no-item-found').removeClass('hidden');
      } else {
        this.set('newItemAdded',true);
      }
    },
    cancelSearch(){
      this.set('id',null);
      $('.no-item-found').addClass('hidden');
    },
    addItem(values){
      var _this=this;
      var issue_num=values.issue_num;
      var size=values.size;
      var quanity = values.quanity*1;
      var total = values.total*1;
      var detail;
      var currentQuanity;
      if(values.vendor!=null){
        var vendor = this.store.peekRecord('vendor',values.vendor);
        this.get('item').set('vendor_id',vendor);
      }
      if(values.brand!=null){
        var brand = this.store.peekRecord('brand',values.brand);
        this.get('item').set('brand',values.brand);
      }
      if(this.get('item').get('typeName')==="comic"||this.get('item').get('typeName')==="trade"){

        values.writers.forEach(function(item,index){
          var writer = _this.store.peekRecord('writer',item);/*.then(function(writer){
              _this.get('item').get('Writers').pushObject(writer);
          });*/
          _this.get('item').get('Writers').pushObject(writer);
        });
        values.illustrators.forEach(function(item,index){
          var illustrator = _this.store.peekRecord('illustrator',item);
          //_this.store.peekRecord('illustrator',item).then(function(illustrator){
            _this.get('item').get('Illustrators').pushObject(illustrator);
          //});
        });
        if(this.get('item').get('typeName')==="trade"){
          values.comics.forEach(function(item,index){
            var detail = _this.store.peekRecord('detail',item);
            //_this.store.peekRecord('detail',item).then(function(detail){
              _this.get('item').get('collects').pushObject(detail);
            //});
          });
        }
      }
      values.tags.forEach(function(item,index){
          _this.get('item').get('tags').pushObject(item);
      });
      this.store.createRecord('line',{
        add:'true',
        item_id:this.get('item'),
        quanity:quanity,
        subTotal:total,
        user_id:this.get('session.currentUser'),
      }).save();
      //console.log(values.detail_id);
      if(values.newComic){
        this.store.createRecord('detail',{
          item_id:this.get('item'),
          issue_num:issue_num,
          size:size,
          quanity:quanity
        }).save();
      } else if (values.detail_id) {
        detail = this.store.peekRecord('detail',values.detail_id);
        currentQuanity = detail.get('quanity')*1;
        detail.set('quanity',currentQuanity+quanity);
        detail.save();
      } else {
        detail = this.get('item').get('Details').get('firstObject');
        currentQuanity = detail.get('quanity')*1;
        detail.set('quanity',currentQuanity+quanity);
        detail.save();
      }
      this.store.findRecord('item',this.get('id')).then(function(item){
        item.save().then(function(){
          _this.set('tagOptions',[]);
          _this.transitionToRoute({ queryParams: { id: 'null' }});
        });
      });

    },
    setType(value){
      this.set('type',value);
    },
    createNewItem(){
      var newItem = this.store.createRecord('item',{
        id:this.id,
      });
      newItem.set(this.get('type'),true);
      this.set('item',newItem);
      newItem.save();
      $('.no-item-found').addClass('hidden');
    },
    newWriter(){
      console.log("writer");
      $('#writer-create').modal('toggle');
    },
    newIllustrator(){
      console.log("illustrator");
      $('#illustrator-create').modal('toggle');
    },
    createWriter(values){
      this.store.createRecord('writer',{
        first_name:values.fname,
        last_name:values.lname
      }).save();
    },
    createIllustrator(values){
      this.store.createRecord('illustrator',{
        first_name:values.fname,
        last_name:values.lname
      }).save();
    },
    deleteItem(value){
      var _this=this;
      this.store.createRecord('line',{
        removal:true,
        add:false,
        item_id:this.get('item'),
        user_id:this.get('session.currentUser')
      });
      this.store.query('detail',{item_id:value}).then(function(details){
        console.log(details);
        details.toArray();
        details.forEach(function(item,index){
          var removeRecord = _this.store.peekRecord('detail',item.id);
          removeRecord.destroyRecord();

        });
      });
      this.store.findRecord('item',value).then(function(item){
        item.destroyRecord();
        //_this.set('item',null);
        _this.set('tagOptions',[]);
        _this.transitionToRoute({ queryParams: { id: 'null' }});
      });

    }
  }
});
