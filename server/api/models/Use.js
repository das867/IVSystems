/**
 * Use
 *
 * @module      :: Model
 * @description :: Tracks the usage of a given Jwt
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.use.attributes({
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
