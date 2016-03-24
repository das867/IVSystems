import DS from 'ember-data';

export default DS.Model.extend({
  grand_total:DS.attr('dollars'),
  subtotal:DS.attr('dollars'),
  type:DS.attr(),
  lineitems:DS.hasMany('line'),
  original_receipt:DS.belongsTo('order',{inverse:'return_receipt'}),
  return_receipt:DS.belongsTo('order',{inverse:'original_receipt'}),
  reason:DS.attr(),
  user_id:DS.belongsTo('user')
});
