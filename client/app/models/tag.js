import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  Items:DS.hasMany('item'),
  numOfItems:Ember.computed('Items',function(){
    return this.get('Items').toArray().length;
  }),
});
