/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'string',
      primaryKey:true,
      required:true,
    },
    price:{
      type:'string',
      //required:true
    },
    name:{
      type:'string',
      //required:true
    },
    lineitems:{
      collection:'LineItem',
      via:'item_id'
    },
    tags:{
      collection:'itemTag',
      via:'Items',
      //through:'tagged_trade'
    },
    vendor_id:{
      model:'Vendor'
    },
    brand:{
      model:'Brand'
    },
    //for trades
    trade:{
      type:'boolean',
      defaultsTo:false
    },
    vol_num:{
      type:'integer'
    },
    Illustrators:{
      collection:'illustrator',
      via:'Items',
      //through:'tradeillustrator'
    },
    Writers:{
      collection:'writer',
      via:'Items',
      //through:'tradewriter'
    },
    quanity:{
      type:'integer',
      //required:true
    },
    bindingType:{
      type:'string',
      enum:['hardback','paperback']
    },
    //For apparel
    apparel:{
      type:'boolean',
      defaultsTo:false
    },
    size:{
      type:'string',
      //required:true
    },
    gender:{
      type:'string',
      enum:['male','female','unisex'],
      //required:true
    },
    //For Comics
    comic:{
      type:'boolean',
      defaultsTo:false
    },
    issue_num:{
      type:'integer',
      //required:true
    },
    collects:{
      collection:'Item',
      via:'includedIn',
      dominant: true
      //through:'collectedcomic'
    },
    includedIn:{
      collection:'Item',
      via:'collects',
      //through:'collectedcomic'
    },
    subscriptions:{
      collection:'Subscription_Box',
      via:'Items',
      //through:'subscriber_box_comic'
    },
    //For Figures
    figure:{
      type:'boolean',
      //defaultsTo:false
    },
    figureType:{
      type:'string',
      enum:['game figure','collectable','action']
    },
    materialType:{
      type:'string',
      enum:['plush','vinyl','plastic','die-cast','metal']
    },
    //For games
    game:{
      type:'boolean',
      defaultsTo:false
    },
    gameType:{
      type:'string',
      enum:['board','card','dice','role playing'],
      //required:true
    },
  }
};
