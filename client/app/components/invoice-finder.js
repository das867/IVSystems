import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    setVendor(value){
      this.sendAction('findInvoice',value);
    }
  }
});
