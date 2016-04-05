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
    Details:{
      collection:'detail',
      via:'item_id'
    },
    sales_price:{
      type:'string',
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
      collection:'line',
      via:'item_id'
    },
    tags:{
      collection:'tag',
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
    bindingType:{
      type:'string',
      enum:['hardback','paperback']
    },
    //For apparel
    apparel:{
      type:'boolean',
      defaultsTo:false
    },
    gender:{
      type:'string',
      enum:['male','female','unisex'],
      //required:true
    },
    apparelType:{
      type:'string',
      enum:['shirt','hat','pant','dress']
    },
    //For Comics
    comic:{
      type:'boolean',
      defaultsTo:false
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
      collection:'box',
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
  },
  afterCreate:function(options,cb){
    console.log(options.id);
    Item.findOne(options.id).populate('Details').exec(function(err,item){
      console.log(item.Details);
      console.log(item.apparel);
      if(item.apparel){
        item.Details.add({item_id:item.id,quanity:0,size:'XS'});
        item.Details.add({item_id:item.id,quanity:0,size:'S'});
        item.Details.add({item_id:item.id,quanity:0,size:'M'});
        item.Details.add({item_id:item.id,quanity:0,size:'L'});
        item.Details.add({item_id:item.id,quanity:0,size:'XL'});
        item.Details.add({item_id:item.id,quanity:0,size:'XXL'});
      }else if(!item.comic){
        item.Details.add({item_id:item.id,quanity:0});
      }
      item.save(function(err,res){
        console.log(res);
        cb();
      });
    });
  }
};
