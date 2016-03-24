import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    id: {
       refreshModel: true
    }
  },
  beforeModel(){
    this.set('item',null);
    this.set('id', null);
    this.set('newItemAdded',false);
  },
  model(params){
      return this.store.query('item',params);
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      this.set('item',null);
      this.set('id', null);
      this.set('newItemAdded',false);
    }
  },
  actions:{
    willTransition(transition) {
      this.set('item',null);
      this.set('id', null);
      this.set('newItemAdded',false);
      return true;
    },
    clearValue(){
      alert("hello");
      this.set('newItemAdded',false);
      this.set('item',null);
      this.set('id', null);
    }
  }
});
