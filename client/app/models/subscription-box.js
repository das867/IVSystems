import DS from 'ember-data';

export default DS.Model.extend({
  subscriber:DS.belongsTo('member'),
  Items:DS.hasMany('item')
});
