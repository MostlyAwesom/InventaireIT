Template.affichageFournisseursTemplate.events({
	'click #delete_btn': function(){
		Fournisseurs.remove(this._id);	
	}
});