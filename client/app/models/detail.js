import DS from 'ember-data';

export default DS.Model.extend({
  item_id:DS.belongsTo('item'),
  size:DS.attr(),
  quanity:DS.attr('number',{defaultValue:0}),
  issue_num:DS.attr(),
  includedIn:DS.hasMany('item', {inverse: 'collects'}),
  fullName:Ember.computed('item_id',function(){
    console.log(this.get('item_id'));
  })
});
