import Ember from 'ember';

export default Ember.Component.extend({
  isAdmin:false,
  actions:{
    createEmployee(){
      var values = {
        first_name:this.get('first_name'),
        last_name:this.get('last_name'),
        password:this.get('password'),
        username:this.get('username'),
        isAdmin:this.get('isAdmin')
      };
      console.log(values);
      this.sendAction('createEmployee',values);
      $('#new-employee').modal('toggle');
    }
  }
});
