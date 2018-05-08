Template.affichageLocauxTemplate.helpers({
    lieu() {
        return Lieux.findOne(this.lieuId);
    }
});