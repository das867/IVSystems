/**
 * Brand.js
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
    name:{
      type:'string',
      required:true
    },
    comics:{
      collection:'Comic',
      via:'brand'
    },
    trades:{
      collection:'Trade',
      via:'brand'
    },
    figures:{
      collection:'Figure',
      via:'brand'
    },
    apparels:{
      collection:'Apparel',
      via:'brand'
    },
    games:{
      collection:'Game',
      via:'brand'
    }
  }
};
