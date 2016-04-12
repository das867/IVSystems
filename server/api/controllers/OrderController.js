/**
 * OrderController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	receipt: function(req, res){
		var attr = req.params.all();
		var orderAttr = {
			user_id: attr.user_id,
			type: attr.type,
			grand_total: attr.grand_total,
			subtotal: attr.subtotal
		};
		var lineItems = attr.lineitems;
		Order.create(orderAttr).populate('lineitems').exec(function(err,order){
			for(var i = 0; i <lineItems.length;i++){
				order.lineitems.add(lineItems[0])
				order.save(function(err,res){
					console.log(res);
				});
			}
			res.json(order);
		});
	},
	returns: function(req, res){
		var attr = req.params.all();
		var orderAttr = {
			original_receipt:attr.original_receipt,
			user_id: attr.user_id,
			type: attr.type,
			grand_total: attr.grand_total,
			subtotal: attr.subtotal
		};
		var lineItems = attr.lineitems;
		var returnItems = attr.returns;
		for(var i = 0; i <returnItems.length;i++){
			var obj = returnItems[0];
			if(obj.size){
				Detail.findOne({item_id:obj.item_id,size:obj.size}).exec(function(err,detail){
					detail.quanity += returnItems.quanity;
					console.log(detail.quanity);
				});
			} else if(obj.issue_num){
				Detail.findOne({item_id:obj.item_id,issue_num:obj.issue_num}).exec(function(err,detail){
					detail.quanity += returnItems.quanity;
					console.log(detail.quanity);
				});
			} else {
				Detail.findOne({item_id:obj.item_id}).exec(function(err,detail){
					detail.quanity += returnItems.quanity;
					console.log(detail.quanity);
				});
			}
		}
		Order.create(orderAttr).populate('lineitems').exec(function(err,order){
			for(var i = 0; i <lineItems.length;i++){
				order.lineitems.add(lineItems[0])
				order.save(function(err,res){
					console.log(res);
				});
			}
			res.json(order);
		});
	}

};
