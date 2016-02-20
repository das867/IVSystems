import DS from 'ember-data';

export default DS.Model.extend({
  first_name:DS.attr(),
  last_name:DS.attr(),
  tradebooks:DS.hasMany('trade'),
  comicbooks:DS.hasMany('comic')
});
