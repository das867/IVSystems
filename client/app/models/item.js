import DS from 'ember-data';

export default DS.Model.extend({
  isbn:DS.attr(),
  price:DS.attr(),
  name:DS.attr(),
  lineitems:DS.hasMany('line-item'),
  tags:DS.hasMany('item-tag'),
  vendor_id:DS.belongsTo('vendor'),
  brand:DS.belongsTo('brand'),
  collects:DS.hasMany('item'),
  //For Trades
  trade:DS.attr('boolean'),
  vol_num:DS.attr(),
  Illustrators:DS.hasMany('illustrator'),
  Writers:DS.hasMany('writer'),
  quanity:DS.attr(),
  bindingType:DS.attr(),
  //For apparel
  apparel:DS.attr('boolean'),
  size:DS.attr(),
  gender:DS.attr(),
  //For Comics
  comic:DS.attr('boolean'),
  issue_num:DS.attr(),
  includedIn:DS.hasMany('item'),
  subscriptions:DS.hasMany('subscription_box'),
  //For Figures
  figure:DS.attr('boolean'),
  figureType:DS.attr(),
  materialType:DS.attr(),
  //For games
  game:DS.attr('boolean'),
  gameType:DS.attr(),

});
