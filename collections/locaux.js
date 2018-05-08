import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Locaux = new Mongo.Collection('locaux');

Locaux.attachSchema(new SimpleSchema({
    etage: {
      type: Number,
      label: "Etage"
    },
    numero: {
        type: Number,
        label: "Numéro"
    },
    lieu: {
        type: String,
        label: "Lieu",
        autoform: {
            type: "select"
        }
    }
  }, { tracker: Tracker }));

Locaux.allow({ 
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