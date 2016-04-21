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
      type:'string',
      //required:true
    },
    subtotal:{
      type:'string',
      //required:true
    },
    type:{
      type:'string',
      enum:['reorder','receipt','return_receipt','return']
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
    },
    vendor_id:{
      model:'vendor'
    },
    closedInvoice:{
      type:'boolean',
      defaultsTo:'false'
    }
  }
};
