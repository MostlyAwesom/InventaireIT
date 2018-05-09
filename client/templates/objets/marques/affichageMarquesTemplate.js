Template.affichageMarquesTemplate.events({
	'click #delete_btn': function(){
		Marques.remove(this._id);	
	}
});