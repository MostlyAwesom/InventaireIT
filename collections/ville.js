import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Villes = new Mongo.Collection('villes'); 

Villes.attachSchema(new SimpleSchema({
    nom: {
      type: String,
      label: "Nom"
    },
    npa: {
        type: String,
        label: "NPA"
    }
  }, { tracker: Tracker }));

Villes.allow({ 
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