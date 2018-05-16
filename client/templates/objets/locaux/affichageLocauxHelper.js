Template.affichageLocauxTemplate.events({
	'click #delete_btn': function(){
		Locaux.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('LocauxUpdate', {_id: this._id});
    },
    'click #read_btn': function() {
		Router.go('LocauxRead', {_id: this._id});
	}
});

Template.affichageLocauxTemplate.helpers({
    lieu() {
        return Lieux.findOne(this.lieuId);
    },
    ville() {
        var currentLieu = Lieux.findOne(this.lieuId);
        return Villes.findOne(currentLieu.villeId);
    }
});