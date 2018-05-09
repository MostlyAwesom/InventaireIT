Template.affichageLieuxTemplate.events({
	'click #delete_btn': function(){
		Lieux.remove(this._id);	
	}
});

Template.affichageLieuxTemplate.helpers({
    ville() {
        return Villes.findOne(this.villeId);
    }
});