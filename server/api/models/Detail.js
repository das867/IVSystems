/**
 * Details.js
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
    quanity:{
      type:'integer',
      //required:true
    },
    issue_num:{
      type:'integer',
      //required:true
    },
    size:{
      type:'string',
      enum:['XS','S','M','L','XL','XXL'],
    },
  }
};
