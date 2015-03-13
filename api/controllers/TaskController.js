/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	create: function(req, res){

		var packet = req.params.all();
		console.log("task controller", packet);
		User.native(function (err, UserColl){
			UserColl.update(
				{'_id': require('mongodb').ObjectID(packet.userId)},
				{'$push': {'tasks': packet.task}},
				function (err, users){
					if(err){
						console.log("error occured");
						return res.json(500, err);
					}
					else{
						console.log("user updated", users);
						return res.json(200, users);
					}
			});
		});
	},

	update: function(req, res){

	},

	delete: function(req, res){

	},

	find: function(req, res){

	},

	findOne: function(req, res){

	}
	
};

