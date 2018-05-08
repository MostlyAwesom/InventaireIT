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
    ville: {
        type: String,
        label: "Ville",
        autoform: {
            type: "select"
        }
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