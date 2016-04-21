/**
 * Vendor.js
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
    strAddress:{
      type:'string',
      required:true
    },
    city:{
      type:'string',
      required:true
    },
    state:{
      type:'string',
      required:true,
      size:2
    },
    zipcode:{
      type:'string',
      required:true
    },
    Items:{
      collection:'Item',
      via:'vendor_id'
    },
    Orders:{
      collection:'order',
      via:'vendor_id'
    }
  },
  afterCreate:function(options,cb){
    Vendor.findOne(options.id).populate('Orders').exec(function(err,vendor){
      vendor.Orders.add({});
      vendor.save(function(err,res){
        console.log(res);
        cb();
      });
    });
  }
};
