import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Locaux = new Mongo.Collection('locaux');

Locaux.attachSchema(new SimpleSchema({
    numero: {
        type: Number,
        label: "Numéro"
    },
    etage: {
        type: Number,
        label: "Etage"
    },
    lieuId: {
        type: String,
        label: "Lieu",
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