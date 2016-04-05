import DS from 'ember-data';

export default DS.Model.extend({
  first_name:DS.attr(),
  last_name:DS.attr(),
  isAdmin:DS.attr('boolean'),
  orders:DS.hasMany('order'),
  lineItems:DS.hasMany('line'),
  full_name:Ember.computed('first_name','last_name',function(){
    return `${this.get('first_name')} ${this.get('last_name')}`;
  })
});
