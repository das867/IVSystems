import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('adminpage', function() {
    this.route('alerts');
    this.route('employees');
    this.route('tags');
    this.route('invoices');
    this.route('sales_report');
    this.route('logs');
  });
  this.route('general', {path:'/'}, function() {
    this.route('add_inventory');
    this.route('view_inventory');
    this.route('subscriptions');
    this.route('search');
  });
});

export default Router;
