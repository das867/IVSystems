import DS from 'ember-data';

export default DS.Model.extend({
  item_id:DS.belongsTo('item'),
  size:DS.attr(),
  quanity:DS.attr('number',{defaultValue:0}),
  issue_num:DS.attr(),
  lineitems:DS.hasMany('line'),
  includedIn:DS.hasMany('item', {inverse: 'collects'}),
  fullName:Ember.computed('item_id',function(){
    //console.log(this.get('item_id'));
  }),
  lowStock:Ember.computed('quanity',function(){
    if(this.get('quanity')*1<=5){
      return true;
    }
      return false;
  }),
  numberSold:Ember.computed('lineitems',function(){
    var lineitems = this.get('lineitems');
    var totalSold = 0;
    var order;
    var _this=this;
    lineitems = lineitems.filterBy('add',false);
    lineitems.forEach(function(item,index){
      totalSold+=item.get('quanity');
      console.log(item.get('quanity'));
    });
    return totalSold;
  })
});
