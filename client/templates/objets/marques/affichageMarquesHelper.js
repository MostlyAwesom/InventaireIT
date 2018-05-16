Template.affichageMarquesTemplate.events({
	'click #delete_btn': function(){
		Marques.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('MarquesUpdate', {_id: this._id});
	},
	'click #read_btn': function() {
		Router.go('MarquesRead', {_id: this._id});
	}
});