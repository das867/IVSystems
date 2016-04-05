import Ember from 'ember';

export default Ember.Controller.extend({
  editUser:null,
  actions:{
    editEmployee(value){
      var user = this.store.peekRecord('user',value);
      this.set('editUser',user);
      console.log(this.get('editUser'));
      $('#edit-employee').modal('toggle')
    },
    commitEdit(){
      var _this=this;
      var _this = this;
      this.get('editUser').save().then(function(){
        _this.set('editUser',null);
        $('#edit-employee').modal('toggle')
      },
      function(response){
        console.log(response);
      });
    }
  }
});
