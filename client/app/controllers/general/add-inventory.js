import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['id'],
  id: null,
  newItemAdded:false,
  total:null,
  quanity:null,

  writerChoices:Ember.computed(function(){
    var writers=this.store.findAll('writer');
    return writers;
  }),
  illustratorChoices:Ember.computed(function(){
    var illustrator=this.store.findAll('illustrator');
    return illustrator;
  }),
  tagChoices:Ember.computed(function(){
    var tags=this.store.findAll('item-tag');
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
    addItem(values){
      var _this=this;
      var quanity = values.quanity*1;
      var total = values.total*1;
      this.store.createRecord('line',{
        add:'true',
        item_id:this.get('item'),
        quanity:quanity,
        subTotal:total,
        user_id:this.get('session.currentUser'),
      }).save();
      var itemQuanity = this.get('item.quanity') *1;
      this.set('item.quanity',itemQuanity+quanity);
      this.get('item').save().then(function(){
        _this.send('clearValue');
      });
    },
    createNewItem(){
      var newItem = this.store.createRecord('item',{
        id:this.id,
      });
      this.set('item',newItem);
      $('.no-item-found').addClass('hidden');
    }
  }
});
