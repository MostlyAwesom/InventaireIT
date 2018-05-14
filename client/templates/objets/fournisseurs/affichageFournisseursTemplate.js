Template.affichageFournisseursTemplate.events({
	'click #delete_btn': function(){
		Fournisseurs.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('FournisseursUpdate', {_id: this._id});
	}
});