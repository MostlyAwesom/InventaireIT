Meteor.publish("TousLesObjets", function(){
    return  [
        Appareils.find({}, {sort: {nom: 1}}),
        Consommables.find({}, {sort: {nom: 1}}),
        Fournisseurs.find({}, {sort: {nom: 1}}),
        Lieux.find({}, {sort: {nom: 1}}),
        Locaux.find({}, {sort: {numero: 1}}),
        Marques.find({}, {sort: {nom: 1}}),
        Modeles.find({}, {sort: {nom: 1}}),
        TypesMachine.find({}, {sort: {libelle: 1}}),
        Villes.find({}, {sort: {nom: 1}})
    ]  
});

Meteor.publish("Fournisseurs", function(){
    return  Fournisseurs.find({}, {sort: {nom: 1}});
});

Meteor.publish("Lieux", function(){
    return  Lieux.find({}, {sort: {nom: 1}});
});

Meteor.publish("Locaux", function(){
    return  Locaux.find({}, {sort: {numero: 1}});
});

Meteor.publish("Marques", function(){
    return  Marques.find({}, {sort: {nom: 1}});
});

Meteor.publish("Modeles", function(){
    return  Modeles.find({}, {sort: {nom: 1}});
});

Meteor.publish("TypesMachine", function(){
    return  TypesMachine.find({}, {sort: {libelle: 1}});
});

Meteor.publish("Villes", function(){
    return  Villes.find({}, {sort: {nom: 1}});
});

Meteor.publish( 'Utilisateurs', function() {
    let isAdmin = Roles.userIsInRole( this.userId, 'administrator' );
  
    if ( isAdmin ) {
      return [
        Meteor.users.find( {}, {sort: {username: 1}})
      ];
    } else {
      return null;
    }
  });