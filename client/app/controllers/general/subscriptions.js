import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:['first_name','last_name'],
  first_name:null,
  last_name:null,
  comic:null,
  quanity:null,
  allComics:Ember.computed(function(){
    return this.store.query('item',{comic:1});
  }),
  actions:{
    searchForMember(){
      this.set('first_name',this.get('first'));
      this.set('last_name',this.get('last'));
      this.set('first',null);
      this.set('last',null);
    },
    addMember(){
      var member = this.store.createRecord('member',{
        first_name:this.get('newFirstName'),
        last_name:this.get('newLastName'),
        email:this.get('newEmail'),
        phone:this.get('newPhonenumber'),
      }).save();
      $('#newMemberModal').modal('toggle');
    },
    addItemToBox(value){
      var box = this.store.peekRecord('box',value);
      box.get('Items').pushObject(this.get('comic'));
      box.save();
    },
    removeItemToBox(value){
      var box = this.store.peekRecord('box',this.get('model').get('box.id'));
      box.get('Items').removeObject(value);
      box.save();
    }
  }
});
