import DS from 'ember-data';

export default DS.Model.extend({
  isbn:DS.attr(),
  price:DS.attr(),
  name:DS.attr(),
  vol_num:DS.attr(),
  illustrators:DS.hasMany('illustrator'),
  writers:DS.hasMany('writer'),
  brand:DS.belongsTo('brand'),
  includedIn:DS.hasMany('trade'),
  quanity:DS.attr(),
  lineitems:DS.hasMany('line-item'),
  tags:DS.hasMany('item-tag'),
  vendor_id:DS.belongsTo('vendor'),
  subscriptions:DS.hasMany('subscription_box'),
  issue_num:DS.attr()
});
