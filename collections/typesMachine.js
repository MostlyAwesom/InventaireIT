import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

TypesMachine = new Mongo.Collection('typesMachine'); 

TypesMachine.attachSchema(new SimpleSchema({
    libelle: {
      type: String,
      label: "Libellé"
    }
  }, { tracker: Tracker }));

TypesMachine.allow({ 
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