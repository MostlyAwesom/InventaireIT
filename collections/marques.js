import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Marques = new Mongo.Collection('marques'); 

Marques.attachSchema(new SimpleSchema({
    nom: {
      type: String,
      label: "Nom"
    }
  }, { tracker: Tracker }));

Marques.allow({ 
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