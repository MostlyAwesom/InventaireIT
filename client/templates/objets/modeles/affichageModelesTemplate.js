Template.affichageModelesTemplate.events({
	'click #delete_btn': function(){
		Modeles.remove(this._id);	
	}
});

Template.affichageModelesTemplate.helpers({
    marque() {
        return Marques.findOne(this.marqueId);
    }
});
