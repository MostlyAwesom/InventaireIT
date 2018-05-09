Template.affichageLocauxTemplate.events({
	'click #delete_btn': function(){
		Locaux.remove(this._id);	
	}
});

Template.affichageLocauxTemplate.helpers({
    lieu() {
        return Lieux.findOne(this.lieuId);
    },
    ville() {
        return Villes.findOne(this.lieuId.villeId);
    }
});