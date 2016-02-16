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
    comic_id:{
      model:'Comic',
    },
    apparel_id:{
      model:'Apparel'
    },
    figure_id:{
      model:'Figure'
    },
    game_id:{
      model:'Game'
    },
    trade_id:{
      model:'Trade'
    },
    subTotal:{
      type:'float',
      required:true
    },
    quanity:{
      type:'integer',
      required:true
    },
    order_id:{
      model:'Order'
    }


  }
};
