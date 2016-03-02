import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
      var _this = this;
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).then(function(){
        $('#wrapper').toggleClass('toggled');
      }).catch(function(error){
        $('#login-error').modal('toggle');
      });
    }
  }
});
