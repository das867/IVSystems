/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({
  register: function(req, res){
    var attr = req.params.all();
    var criteria = {
      username:attr.username
    };
    var attributes = {
      username:attr.username,
      password:attr.password
    };
    var userAttr = {
      first_name:attr.first_name,
      last_name:attr.last_name,
      isAdmin:attr.isAdmin
    };
    console.log(userAttr);
    //After getting info check to see if a user already exists
    waterlock.engine.findAuth(criteria, function(err, oldUser){
      if(err){
        console.log(err);
      }
      if(oldUser){
        return res.badRequest("User already exists");
      } else{
        //if no user exists then use Waterlock to create a new auth and in callback
        //update the user with the registered info
        waterlock.engine.findOrCreateAuth(criteria, attributes, function(err, user){
          if(err){
            console.log(err);
          }
          User.update(user.id,userAttr).exec(function(err,upDatedUser){
            if(upDatedUser)
              res.ok({message:'200'});
            else {
              res.ok({message:'400'});
            }
          });
        });
      }
    });

  }
  /* e.g.
    action: function(req, res){

    }
  */

});
