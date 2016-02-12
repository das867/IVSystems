/**
 * Writer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    },
    first_name:{
      type:'string',
      required:true
    },
    last_name:{
      type:'string',
      required:true
    },
    tradebooks:{
      collection:'Trade',
      via:'writer',
      through:'tradewriter'
    },
    comicbooks:{
      collection:'Comic',
      via:'writer',
      through:'comicwriter'
    }
  }
};
