Template.affichageConsommablesTemplate.events({
	'click #delete_btn': function(){
		Consommables.remove(this._id);	
	}
});

Template.affichageConsommablesTemplate.helpers({
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
        return Lieux.findOne(this.local.lieuId);
    },
    ville() {
        return Villes.findOne(this.lieu.villeId);
    },
    fournisseur() {
        return Fournisseurs.findOne(this.fournisseurId); 
    }, 
    parent() {
        return Appareils.findOne(this.parentId);
    }
});