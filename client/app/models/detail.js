import DS from 'ember-data';

export default DS.Model.extend({
  item_id:DS.belongsTo('item'),
  size:DS.attr(),
  quanity:DS.attr('number',{defaultValue:0}),
  issue_num:DS.attr()
});
