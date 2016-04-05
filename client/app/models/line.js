import DS from 'ember-data';

export default DS.Model.extend({
  item_id:DS.belongsTo('item'),
  subTotal:DS.attr(),
  quanity:DS.attr(),
  order_id:DS.belongsTo('order'),
  user_id:DS.belongsTo('user'),
  add:DS.attr('boolean')
});
