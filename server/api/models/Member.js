/**
 * Member.js
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
    email:{
      type:'string',
    },
    phone:{
      type:'string'
    },
    subscription_box:{
      collection:'Subscription_Box',
      via:'subscriber'
    }
  }
};
