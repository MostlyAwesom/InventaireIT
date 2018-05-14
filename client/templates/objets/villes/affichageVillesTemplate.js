Template.affichageVillesTemplate.events({
	'click #delete_btn': function(){
		Villes.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('VillesUpdate', {_id: this._id});
	}
});