import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  vendorItems:[],
  invoice:null,
  vendor:null,
  actions:{
    findInvoice(value){
      console.log(value);
      var _this= this;
      this.set('vendor',value);
      console.log(this.get('vendor'));
      this.store.queryRecord('order',{vendor_id:value,closedInvoice:false}).then(function(invoice){
        _this.set('invoice',invoice);
      });
      this.send('getDetails',value);
    },
    getDetails(value){
      var details = this.get('model').details;
      details = details.filterBy('item_id.vendor_id.id',value);
      this.set('vendorItems',details);
    },
    addLineItem(values){
      var vendor = this.store.peekRecord('vendor',this.get('vendor'));
      console.log(vendor);
      var detail = this.store.peekRecord('detail',values);
      console.log(detail);
      var user = this.store.peekRecord('user',this.get('session.session.authenticated.user.id'));
      console.log(this.get('session.currentUser'));
      ////var item = this.store.peekRecord('item',detail.item_id.id);
      let lineItem = this.store.createRecord('line',{
        order_id:this.get('invoice'),
        user_id:user,
        detail_id:detail
      }).save();
      console.log(lineItem);
    },
    removeLineItem(value){
      this.store.findRecord('line', value).then(function(line) {
        line.destroyRecord(); // => DELETE to /posts/2
      });
    },
    setQuanity(value){
      this.store.findRecord('line',value).then(function(line){
        line.save();
      });
    },
    sendInvoice(value){
      var vendor = this.store.peekRecord('vendor',this.get('vendor'));
      console.log(vendor);
      var user = this.store.peekRecord('user',this.get('session.session.authenticated.user.id'));
      console.log(user);
      this.store.findRecord('order',value).then(function(order){
        order.set('closedInvoice',true);
        order.save();
      });
      this.store.createRecord('order',{
        type:'reorder',
        vendor:vendor,
        user_id:user
      }).save();
    }
    /*findLowInvoice(values){
      this.set('invoice',null);
      console.log(values);
      var _this=this;
      var item = this.store.peekRecord('item',values);
      console.log(item);
      this.store.queryRecord('order',{vendor_id:item.vendor_id.id,closedInvoice:false}).then(function(invoice){
        _this.set('invoice',invoice);
        _this.send('addLineItemLow',item);
        _this.send('getDetails',_this.get('invoice.vendor_id.id'));
      });
    },
    addLineItemLow(values){
      console.log(values);
      var user = this.store.peekRecord('user',this.get('session.session.authenticated.user.id'))
      console.log(this.get('session.currentUser'));
      ////var item = this.store.peekRecord('item',detail.item_id.id);
      let lineItem = this.store.createRecord('line',{
        order_id:this.get('invoice'),
        user_id:user,
        item_id:values
      }).save();
      console.log(lineItem);
    }*/
  }
});
