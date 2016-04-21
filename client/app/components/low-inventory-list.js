import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addToInvoice(value){
      this.sendAction('findLowInvoice',value);
    }
  }
});
