import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  beforeModel(transition) {
    if(this.get('session.isAuthenticated')){
      if(this.get('session.currentUser.isAdmin')){
        return true;
      }
    }
    $('#login-error').modal('toggle');
    transition.abort();
    this.transitionTo('/');
  },
  actions:{
    willTransition(transition){
      if(transition.targetName==='index'){
        $('#sidebar-wrapper').toggleClass('hidden');
        return true;
      }
    }
  }
});
