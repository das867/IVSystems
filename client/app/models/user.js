import DS from 'ember-data';

export default DS.Model.extend({
  first_name:DS.attr(),
  last_name:DS.attr(),
  isAdmin:DS.attr('boolean'),
  orders:DS.hasMany('order'),
  lineItems:DS.hasMany('line')
});
