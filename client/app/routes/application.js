import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin,{
  session: Ember.inject.service('session'),
  actions:{
    willTransition(transition){
      if(transition.targetName==='adminpage'){
        console.log(this.get('session.isAuthenticated'));
        console.log(this.get('session.currentUser.isAdmin'));
        if(this.get('session.isAuthenticated')){
          if(this.get('session.currentUser.isAdmin')){
            $('#sidebar-wrapper').toggleClass('hidden');
            return true;
          }
        }
        transition.abort();
        $('#login-error').modal('toggle');
      }
    }
  }
});
