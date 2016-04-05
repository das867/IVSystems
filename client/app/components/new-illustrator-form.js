import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    createIllustrator(){
      var values = {
        fname:this.get('fname'),
        lname:this.get('lname')
      };
      this.sendAction('createIllustrator',values);
      this.set('fname',null);
      this.set('lname',null);
    }
  }
});
