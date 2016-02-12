/**
 * ItemTag.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:'string',
      primaryKey:true,
      unique:true,
      required:true
    },
    taggedComic:{
      collection:'Comic',
      via:'tag',
      through:'tagged_comic'
    },
    taggedApparel:{
      collection:'Apparel',
      via:'tag',
      through:'tagged_apparel'
    },
    taggedGame:{
      collection:'Game',
      via:'tag',
      through:'tagged_game'
    },
    taggedFigure:{
      collection:'Figure',
      via:'tag',
      through:'tagged_figure'
    },
    taggedTrade:{
      collection:'Trade',
      via:'tag',
      through:'tagged_trade'
    }
  }
};
