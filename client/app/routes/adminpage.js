import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  beforeModel(transition) {
    if(this.get('session.isAuthenticated')){
      if(this.get('session.session.authenticated.user.isAdmin')){
        return true;
      }
    }
    $('#login-error').modal('toggle');
    transition.abort();
    this.transitionTo('index');
  },
});
