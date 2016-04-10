/**
 * Line.js
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
    sale:{
      type:'boolean',
      defaultsTo:false
    },
    user_id:{
      model:'user'
    }
  },
  afterCreate:function(options,cb){
    Line.findOne(options.id).exec(function(err,line){
      console.log(line);
      if(line.add){
        cb();
      } else {
        Order.findOne(line.order_id).exec(function(err,order){
          console.log(order);
          if(err) return cb(err)
          if(order.type==="receipt"){
            line.sale = true;
            line.save(function(err,res){
              console.log(res);
              cb();
            });
          }
        });
      }
    });
  }
};
