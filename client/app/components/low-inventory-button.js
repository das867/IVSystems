import Ember from 'ember';

export default Ember.Component.extend({
  lowStockNum:Ember.computed('details',function(){
    return this.get('details').toArray().filterBy('lowStock',true).length;
  })
});
