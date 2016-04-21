import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  queryParams: {
    id: {
       refreshModel: true
    }
  },
  /*beforeModel(){
    console.log("hello");
    this.set('item',null);
    //this.set('id', null);
    this.set('newItemAdded',false);
    this.set('type',null);
    this.set('total',null);
    this.set('quanity',null);
    this.set('issue_num',null);
    this.set('type',null);
    this.set('size',null);
  },*/
  model(params){
    console.log(params);
  
      return this.store.query('item',params).catch(function(){
        console.log("not found");
      });


  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      //this.set('item',null);
      this.set('id', null);
      //this.set('newItemAdded',false);
      //this.set('type',null);
      //this.set('total',null);
      //this.set('quanity',null);
      //this.set('issue_num',null);
      //this.set('type',null);
      //this.set('size',null);
    }
  },
  actions:{


  }
});
