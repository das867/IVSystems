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
    this.set('type',null);
    this.set('total',null);
    this.set('quanity',null);
    this.set('issue_num',null);
    this.set('type'null);
    this.set('size',null);
  },
  model(params){
      return this.store.query('item',params);
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      this.set('item',null);
      this.set('id', null);
      this.set('newItemAdded',false);
      this.set('type',null);
      this.set('total',null);
      this.set('quanity',null);
      this.set('issue_num',null);
      this.set('type'null);
      this.set('size',null);
    }
  },
  actions:{
    willTransition(transition) {
      this.set('item',null);
      this.set('id', null);
      this.set('newItemAdded',false);
      this.set('type',null);
      this.set('total',null);
      this.set('quanity',null);
      this.set('issue_num',null);
      this.set('type'null);
      this.set('size',null);
      return true;
    },
    clearValue(){
      alert("hello");
      this.set('item',null);
      this.set('id', null);
      this.set('newItemAdded',false);
      this.set('type',null);
      this.set('total',null);
      this.set('quanity',null);
      this.set('issue_num',null);
      this.set('type'null);
      this.set('size',null);
    }
  }
});
