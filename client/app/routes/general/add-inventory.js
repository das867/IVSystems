import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    id: {
       refreshModel: true
    }
  },
  model(params){
      return this.store.query('item',params);
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      this.set('item',null);
      // isExiting would be false if only the route's model was changing
      this.set('id', null);
    }
  },
  actions:{
    changeScreen(){
      this.transitionTo('general.view_inventory');
    }
  }
});
