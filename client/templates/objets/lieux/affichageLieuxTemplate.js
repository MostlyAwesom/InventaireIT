Template.affichageLieuxTemplate.helpers({
    ville() {
        return Villes.findOne(this.villeId);
    }
});