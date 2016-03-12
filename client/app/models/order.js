import DS from 'ember-data';

export default DS.Model.extend({
  grand_total:DS.attr('dollars'),
  subtotal:DS.attr('dollars'),
  type:DS.attr(),
  lineitems:DS.hasMany('line-item')
});
