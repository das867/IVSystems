import Ember from 'ember';

export default Ember.Route.extend({
  newTag:null,
  model(){
    return this.store.findAll('tag');
  },
  actions:{
    createTag(){
      var tag = this.store.createRecord('tag',{
        name:this.get('newTag'),
      }).save();
      console.log(tag);
    },
    setTagName(value){
      this.set('newTag',value);
    },
    deleteTag(value){
      this.store.findRecord('tag',value).then(function(tag) {
        tag.deleteRecord();
        tag.get('isDeleted'); // => true
        tag.save();
      });
    }
  }
});
