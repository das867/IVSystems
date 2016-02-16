/**
 * Subscription_Box.js
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
    subscriber:{
      model:'Member',
      unique:true
    },
    comics:{
      collection:'Comic',
      via:'box_id',
      through:'subscriber_box_comic'
    }
  }
};
