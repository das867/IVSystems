import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  managerToggled:false,
  actions: {
    invalidateSession() {
      this.get('session').invalidate().then(function(){
        $('#wrapper').addClass('private');
      });
      Ember.$.ajax({
        url: 'http://127.0.0.1:1337/api/v1/auths/logout',
        method: 'GET',
      });
    },
    toggleManagerBar(){
      this.set('managerToggled',true);
    },
    toggleMainBar(){
      this.set('managerToggled',false);
    }
  }
});
