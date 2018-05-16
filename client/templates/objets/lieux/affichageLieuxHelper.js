Template.affichageLieuxTemplate.events({
	'click #delete_btn': function(){
		Lieux.remove(this._id);	
	},
	'click #update_btn': function() {
		Router.go('LieuxUpdate', {_id: this._id});
	},
	'click #read_btn': function() {
		Router.go('LieuxRead', {_id: this._id});
	}
});

Template.affichageLieuxTemplate.helpers({
    ville() {
        return Villes.findOne(this.villeId);
    }
});