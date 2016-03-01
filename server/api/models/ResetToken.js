/**
 * ResetToken
 *
 * @module      :: Model
 * @description :: Describes a users reset token
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.resetToken.attributes({
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    }

    /* e.g.
    nickname: 'string'
    */

  }),

  beforeCreate: require('waterlock').models.resetToken.beforeCreate,
  afterCreate: require('waterlock').models.resetToken.afterCreate
};
