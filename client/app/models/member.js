import DS from 'ember-data';

export default DS.Model.extend({
  first_name:DS.attr(),
  last_name:DS.attr(),
  email:DS.attr(),
  phone:DS.attr(),
  subscription_box:DS.hasMany('subscription_box')
});
