import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  strAddress:DS.attr(),
  city:DS.attr(),
  state:DS.attr(),
  zipcode:DS.attr(),
  Items:DS.hasMany('item'),
});
