import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Lieux = new Mongo.Collection('lieux'); 

Lieux.attachSchema(new SimpleSchema({
    nom: {
      type: String,
      label: "Nom"
    },
    rue: {
        type: String,
        label: "Rue"
    },
    villeId: {
        type: String,
        label: "Ville"
    }
  }, { tracker: Tracker }));

Lieux.allow({ 
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