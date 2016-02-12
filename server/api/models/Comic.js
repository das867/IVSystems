/**
 * Comic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    isbn:{
      type:'string',
      primaryKey:true,
      required:true,
    },
    issue_num:{
      type:'integer',
      required:true
    },
    price:{
      type:'string',
      required:true
    },
    name:{
      type:'string',
      required:true
    },
    illustrators:{
      collection:'Illustrator',
      via:'comic',
      through:'comicillustrator'
    },
    writer:{
      collection:'Writer',
      via:'comic',
      through:'comicwriter'
    },
    brand:{
      model:'Brand'
    },
    includedIn:{
      collection:'Trade',
      via:'comic',
      through:'collectedcomic'
    },
    quanity:{
      type:'integer',
      required:true
    },
    tags:{
      collection:'itemTag',
      via:'item',
      through:'tagged_comic'
    },
    lineitems:{
      collection:'LineItem',
      via:'comic_id'
    },
    subscriptions:{
      collection:'Subscription_Box',
      via:'comic_id',
      through:'subscriber_box_comic'
    }
  }
};
