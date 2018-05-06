Meteor.publish("TousLesObjets", function(){
    return  [
        Appareils.Find(),
        Consommables.Find(),
        Fournisseurs.Find(),
        Lieux.Find(),
        Locaux.Find(),
        Marques.Find(),
        Modeles.Find(),
        TypesMachine.Find(),
        Villes.Find()
    ]
    
});