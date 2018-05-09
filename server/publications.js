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

Meteor.publish("Fournisseurs", function(){
    return  Fournisseurs.find();
});

Meteor.publish("Lieux", function(){
    return  Lieux.find();
});

Meteor.publish("Locaux", function(){
    return  Locaux.find();
});

Meteor.publish("Marques", function(){
    return  Marques.find();
});

Meteor.publish("Modeles", function(){
    return  Modeles.find();
});

Meteor.publish("TypesMachine", function(){
    return  TypesMachine.find();
});

Meteor.publish("Villes", function(){
    return  Villes.find();
});