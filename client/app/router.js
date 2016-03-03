import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('view_inventory');
  this.route('subscriptions');
  this.route('adminpage');
});

export default Router;
