import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    createWriter(){
      var values = {
        fname:this.get('fname'),
        lname:this.get('lname')
      };
      this.sendAction('createWriter',values);
      this.set('fname',null);
      this.set('lname',null);
    }
  }
});
