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
      console.log(this.id);
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
    checkForDetail(){
    },
    addItem(values){
      var _this=this;
      var issue_num=values.issue_num;
      var size=values.size;
      var quanity = values.quanity*1;
      var total = values.total*1;
      var detail;
      var currentQuanity;
      if(this.get('item').get('typeName')==="comic"||this.get('item').get('typeName')==="trade"){
        values.writers.forEach(function(item,index){
            _this.store.peekRecord('writer',item).then(function(writer){
            this.get('item').get('Writers').pushObject(writer);
          });
        });
        values.illustrators.forEach(function(item,index){
          _this.store.peekRecord('illustrator',item).then(function(illustrator){
          this.get('item').get('Illustrators').pushObject(illustrator);
        });
      });
      }
      console.log(values.tags);
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
      if(values.newComic){
        this.store.createRecord('detail',{
          item_id:this.get('item'),
          issue_num:issue_num,
          size:size,
          quanity:quanity
        }).save();
      } else if (values.detail_id) {
        console.log("hello");
        detail = this.store.peekRecord('detail',values.detail_id);
        currentQuanity = detail.get('quanity')*1;
        detail.set('quanity',currentQuanity+quanity);
        detail.save();
        console.log(detail);
      } else {
        detail = this.get('item').get('Details').get('firstObject');
        currentQuanity = detail.get('quanity')*1;
        detail.set('quanity',currentQuanity+quanity);
        detail.save();
      }
      this.get('item').save().then(function(){
        _this.send('clearValue');
      },function(reason){
        console.log(reason);
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
    }
  }
});
