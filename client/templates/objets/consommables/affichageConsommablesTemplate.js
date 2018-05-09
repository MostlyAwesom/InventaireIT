Template.affichageConsommablesTemplate.events({
	'click #delete_btn': function(){
		Consommables.remove(this._id);	
	}
});

Template.affichageConsommablesTemplate.helpers({
    modele() {
        return Modeles.findOne(this.modeleId);
    },
    typeMachine() {
        return TypesMachine.findOne(this.typeMachineId); 
    },
    local() {
        return Locaux.findOne(this.localId); 
    },
    fournisseur() {
        return Fournisseurs.findOne(this.fournisseurId); 
    }, 
    parent() {
        return Appareils.findOne(this.parentId);
    }
});