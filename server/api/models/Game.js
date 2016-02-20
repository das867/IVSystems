/**
 * Game.js
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
    type:{
      type:'string',
      enum:['board','card','dice','role playing'],
      required:true
    },
    brand:{
      model:'Brand'
    },
    quanity:{
      type:'integer',
      required:true
    },
    lineitems:{
      collection:'LineItem',
      via:'game_id'
    },
    tags:{
      collection:'itemTag',
      via:'item',
      through:'tagged_game'
    },
    vendor_id:{
      model:'Vendor'
    }
  }
};
