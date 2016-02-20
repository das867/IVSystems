import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  taggedComic:DS.hasMany('comic'),
  taggedApparel:DS.hasMany('apparel'),
  taggedGame:DS.hasMany('game'),
  taggedFigure:DS.hasMany('figure'),
  taggedTrade:DS.hasMany('trade')
});
