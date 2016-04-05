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
    box:{
      collection:'box',
      via:'subscriber'
    }
  },
  afterCreate:function(options,cb){
    console.log(options.id);
    Member.findOne(options.id).populate('box').exec(function(err,member){
      console.log(member);
      member.box.add({subscriber:member.id});
      member.save(function(err,res){
        console.log(res);
        cb();
      });
    });
  }
};
