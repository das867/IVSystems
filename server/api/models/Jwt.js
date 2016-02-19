/**
 * Jwt
 *
 * @module      :: Model
 * @description :: Holds all distributed json web tokens
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.jwt.attributes({
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    }

    /* e.g.
    nickname: 'string'
    */

  })
};
