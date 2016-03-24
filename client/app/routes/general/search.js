import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('item');
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      this.set('filteredItems',null);
    }
  },
  actions:{
    clearSearch(){
      this.transitionTo({ queryParams: { name:null, apparelType:null, gameType:null, figureType:null, materialType:null, size:null, type:null }})
    }
  }
});
