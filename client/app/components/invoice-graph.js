import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addToInvoice(value){
      this.sendAction('addLineItem',value);
    },
    removeLineItem(value){
      //console.log(value);
      this.sendAction('removeLineItem',value);
    },
    setQuanity(value){
      console.log(value);
      this.sendAction('setQuanity',value);
    },
    sendInvoice(value){
      this.sendAction('sendInvoice',value);
    }
  }
});
