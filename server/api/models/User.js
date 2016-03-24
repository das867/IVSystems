/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    },
    first_name:{
      type:'string'
    },
    last_name:{
      type:'string'
    },
    isAdmin:{
      type:'boolean',
      defaultsTo:false,
    },
    orders:{
      collection:'Order',
      via:'user_id'
    },
    lineItems:{
      collection:'line',
      via:'user_id'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.attempts;
      delete obj.jsonWebTokens;
      delete obj.auth;
      return obj;
    }
  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
