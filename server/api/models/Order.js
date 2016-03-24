/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'orders',
  attributes: {
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    },
    grand_total:{
      type:'float',
      required:true
    },
    subtotal:{
      type:'float',
      required:true
    },
    type:{
      type:'string',
      enum:['reorder','reciept','return_receipt','return']
    },
    original_receipt:{
      model:'Order',
      unique:true
    },
    return_receipt:{
      collection:'Order',
      via:'original_receipt'
    },
    user_id:{
      model:'user'
    },
    reason:{
      type:'string'
    },
    lineitems:{
      collection:'line',
      via:'order_id'
    }
  }
};
