import DS from 'ember-data';

export default DS.Model.extend({
  grand_total:DS.attr(),
  subtotal:DS.attr(),
  type:DS.attr(),
  lineitems:DS.hasMany('line-item')
});
