import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    $('#sidebar-wrapper').addClass('login-screen');
  },

  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
      var _this = this;
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).then(function(){
        $('#sidebar-wrapper').removeClass('login-screen');
      }).catch(function(error){
        $('#login-error').modal('toggle');
      });
    }
  }
});
