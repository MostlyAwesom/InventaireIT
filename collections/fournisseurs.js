import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Fournisseurs= new Mongo.Collection('fournisseurs'); 

Fournisseurs.attachSchema(new SimpleSchema({
    nom: {
      type: String,
      label: "Nom"
    }
  }, { tracker: Tracker }));

Fournisseurs.allow({ 
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