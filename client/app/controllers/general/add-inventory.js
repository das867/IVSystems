import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['id'],
  id: null,
  newItemAdded:false,
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
    console.log(item);
  }),
  actions:{
    alertToNoItem(){
      console.log(this.id);
      var item = this.get('item');
      console.log(item);
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
    addItem(){
      var _this=this;
      console.log(this.get('quanity'));
      this.set('item.quanity',this.get('item.quanity')+this.get('quanity'));
      console.log(this.get('item.price'));
      this.get('item').save().then(function(){
        _this.send('changeScreen');
      });

    },
    createNewItem(){
      console.log(this.comic);
      var newItem = this.store.createRecord('item',{
        id:this.id,
      });
      this.set('item',newItem);
      $('.no-item-found').addClass('hidden');
    }
  }
});
