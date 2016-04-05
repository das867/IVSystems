/**
 * LineItem.js
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
    item_id:{
      model:'Item'
    },
    subTotal:{
      type:'float',
      //required:true
    },
    quanity:{
      type:'integer',
      //required:true
    },
    order_id:{
      model:'Order'
    },
    add:{
      type:'boolean',
      defaultsTo:false
    },
    user_id:{
      model:'user'
    }
  }
};
