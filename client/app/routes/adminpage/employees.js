import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('user');
  },
  actions:{
    createEmployee(values){
      var _this = this;
      Ember.$.ajax({
        url: 'http://localhost:1337/api/v1/auths/register',
        data: values,
        dataType: 'json',
        success: function(response) {
          console.log(response);
          _this.refresh();
        },
        error: function(response){
          console.log(response);
      }});
    },
    deleteEmployee(value){
      this.store.findRecord('user',value).then(function(user) {
        user.deleteRecord();
        user.get('isDeleted'); // => true
        user.save();
      });
    }
  }
});
