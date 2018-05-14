Template.affichageFournisseursTemplate.events({
	'click #delete_btn': function(){
		Fournisseurs.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('FournisseurUpdate', {_id: this._id});
	}
});