import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Modeles = new Mongo.Collection('modeles'); 

Modeles.attachSchema(new SimpleSchema({
    nom: {
      type: String,
      label: "Nom"
    }, 
    marqueId: {
        type: String,
        label: "Marque",
        autoform: {
            type: "select",
            placeholder: 'Séléctionnez la marque du nouveau modèle'
        }
    }
  }, { tracker: Tracker }));

Modeles.allow({ 
    insert: function() { 
        return true; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    } 
});