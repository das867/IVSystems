import DS from 'ember-data';

export default DS.Model.extend({
  comic_id:DS.belongsTo('comic'),
  trade_id:DS.belongsTo('trade'),
  figure_id:DS.belongsTo('figure'),
  apparel_id:DS.belongsTo('apparel'),
  game_id:DS.belongsTo('game'),
  subTotal:DS.attr(),
  quanity:DS.attr(),
  order_id:DS.belongsTo('order')
});
