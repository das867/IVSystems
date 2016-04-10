import DS from 'ember-data';

export default DS.Model.extend({
  comic:DS.attr('boolean',{ defaultValue: false }),
  figure:DS.attr('boolean',{ defaultValue: false }),
  game:DS.attr('boolean',{ defaultValue: false }),
  trade:DS.attr('boolean',{ defaultValue: false }),
  apparel:DS.attr('boolean',{ defaultValue: false }),
  price:DS.attr('dollars'),
  Details:DS.hasMany('detail'),
  name:DS.attr(),
  sales_price:DS.attr(),
  lineitems:DS.hasMany('line'),
  tags:DS.hasMany('tag'),
  vendor_id:DS.belongsTo('vendor'),
  brand:DS.belongsTo('brand'),
  collects:DS.hasMany('detail',{ inverse: 'includedIn' }),
  //For Trades

  vol_num:DS.attr(),
  Illustrators:DS.hasMany('illustrator'),
  Writers:DS.hasMany('writer'),
  bindingType:DS.attr(),
  //For apparel


  gender:DS.attr(),
  apparelType:DS.attr(),
  //For Comics
  subscriptions:DS.hasMany('box'),

  //For Figures

  figureType:DS.attr(),
  materialType:DS.attr(),
  //For games
  gameType:DS.attr(),
  typeName:Ember.computed('comic','trade','game','apparel','figure', function(){

    if(this.get('trade')){
      return "trade";
    }
    if(this.get('comic')){
      return "comic";
    }
    if(this.get('game')){
      return "game";
    }
    if(this.get('apparel')){
      return "apparel";
    }
    if(this.get('figure')){
      return "figure";
    }
    return null;
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
