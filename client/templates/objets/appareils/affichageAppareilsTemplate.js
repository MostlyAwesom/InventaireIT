Template.affichageAppareilsTemplate.events({
	'click #delete_btn': function(){
		Appareils.remove(this._id);	
	}
});

Template.affichageAppareilsTemplate.helpers({
    modele() {
        return Modeles.findOne(this.modeleId);
    },
    marque() {
        return Marques.findOne(this.modele.marqueId);
    },
    typeMachine() {
        return TypesMachine.findOne(this.typeMachineId); 
    },
    local() {
        return Locaux.findOne(this.localId); 
    },
    lieu() {
        var currentLocal = Locaux.findOne(this.localId);
        return Lieux.findOne(currentLocal.lieuId);
    },
    ville() {
        var currentLocal = Locaux.findOne(this.localId);
        var currentLieu = Lieux.findOne(currentLocal.lieuId);
        return Villes.findOne(currentLieu.villeId);
    },
    fournisseur() {
        return Fournisseurs.findOne(this.fournisseurId); 
    }, 
    parent() {
        return Appareils.findOne(this.parentId);
    }
});