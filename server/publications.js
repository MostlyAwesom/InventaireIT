Meteor.publish("TousLesObjets", function(){
    return  [
        Appareils.find(),
        Consommables.find(),
        Fournisseurs.find(),
        Lieux.find(),
        Locaux.find(),
        Marques.find(),
        Modeles.find(),
        TypesMachine.find(),
        Villes.find()
    ]
    
});