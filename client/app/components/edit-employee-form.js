import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    commitEdit(){
      this.sendAction('commitEdit');
    }
  }
});
