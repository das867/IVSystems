/**
 * Trade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    isbn:{
      type:'string',
      primaryKey:true,
      required:true,
    },
    price:{
      type:'string',
      required:true
    },
    name:{
      type:'string',
      required:true
    },
    vol_num:{
      type:'integer'
    },
    illustrators:{
      collection:'Illustrator',
      via:'trade',
      through:'tradeillustrator'
    },
    writers:{
      collection:'Writer',
      via:'trade',
      through:'tradewriter'
    },
    brand:{
      model:'Brand'
    },
    collects:{
      collection:'Comic',
      via:'trade',
      through:'collectedcomic'
    },
    quanity:{
      type:'integer',
      required:true
    },
    type:{
      type:'string',
      enum:['hardback','paperback']
    },
    lineitems:{
      collection:'LineItem',
      via:'trade_id'
    },
    tags:{
      collection:'itemTag',
      via:'item',
      through:'tagged_trade'
    },
    vendor_id:{
      model:'Vendor'
    }
  }
};
