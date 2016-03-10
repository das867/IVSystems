import DS from 'ember-data';

export default DS.Model.extend({
  comic:DS.attr('boolean'),
  figure:DS.attr('boolean'),
  game:DS.attr('boolean'),
  trade:DS.attr('boolean'),
  apparel:DS.attr('boolean'),
  price:DS.attr(),
  name:DS.attr(),
  lineitems:DS.hasMany('line-item'),
  tags:DS.hasMany('item-tag'),
  vendor_id:DS.belongsTo('vendor'),
  brand:DS.belongsTo('brand'),
  collects:DS.hasMany('item',{ inverse: 'includedIn' }),
  //For Trades

  vol_num:DS.attr(),
  Illustrators:DS.hasMany('illustrator'),
  Writers:DS.hasMany('writer'),
  quanity:DS.attr(),
  bindingType:DS.attr(),
  //For apparel

  size:DS.attr(),
  gender:DS.attr(),
  //For Comics

  issue_num:DS.attr(),
  includedIn:DS.hasMany('item', {inverse: 'collects'}),
  subscriptions:DS.hasMany('subscription_box'),
  //For Figures

  figureType:DS.attr(),
  materialType:DS.attr(),
  //For games

  gameType:DS.attr(),
  typeName:Ember.computed('comic','trade','game','apparel','figure', function(){
    if(this.comic){
      return "comic";
    }
    if(this.trade){
      return "trade";
    }
    if(this.game){
      return "game";
    }
    if(this.apparel){
      return "apparel";
    }
    if(this.figure){
      return "figure";
    }
  })

});
