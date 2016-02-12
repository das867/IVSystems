/**
 * Apparel.js
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
    size:{
      type:'string',
      required:true
    },
    gender:{
      type:'string',
      enum:['male','female','unisex'],
      required:true
    },
    price:{
      type:'string',
      required:true
    },
    name:{
      type:'string',
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
      via:'apparel_id'
    },
    tags:{
      collection:'itemTag',
      via:'item',
      through:'tagged_apparel'
    },
  }
};
