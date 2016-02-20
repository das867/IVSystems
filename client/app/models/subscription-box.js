import DS from 'ember-data';

export default DS.Model.extend({
  subscriber:DS.belongsTo('member'),
  comics:DS.hasMany('comic')
});
