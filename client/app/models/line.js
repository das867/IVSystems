import DS from 'ember-data';

export default DS.Model.extend({
  detail_id:DS.belongsTo('detail'),
  quanity:DS.attr(),
  order_id:DS.belongsTo('order'),
  user_id:DS.belongsTo('user'),
  add:DS.attr('boolean'),
  sale:DS.attr('boolean'),
  createdAt:DS.attr('date'),
  removal:DS.attr('boolean'),
  subTotal:DS.attr()
});
