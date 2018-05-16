Template.affichageTypesMachineTemplate.events({
	'click #delete_btn': function(){
		TypesMachine.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('TypesMachineUpdate', {_id: this._id});
	},
	'click #read_btn': function() {
		Router.go('TypesMachineRead', {_id: this._id});
	}
});