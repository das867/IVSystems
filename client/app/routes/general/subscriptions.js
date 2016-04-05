import Ember from 'ember';
export default Ember.Route.extend({
  queryParams: {
    first_name: {
       refreshModel: true
    },
    last_name:{
      refreshModel:true
    }
  },
  model(params){
    if(params.first_name!=null)
      return this.store.queryRecord('member',params).catch(function(reason){
        console.log(reason);
        $('#newMemberModal').modal('toggle');
      });
  }
});
