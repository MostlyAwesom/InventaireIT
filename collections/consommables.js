import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Consommables= new Mongo.Collection('consommables'); 

Consommables.attachSchema(new SimpleSchema({
    numeroSerie: {
      type: String,
      label: "Numéro de série",
      max: 200,
    },
    couleur: {
      type: String,
      label: "Couleur",
    },
    modeleId: {
      type: String,
      label: "Modèle",
    },
    localId: {
      type: String,
      label: "Local",
    },
    fournisseurId: {
        type: String,
        label: "Fournisseur",
      },
    quantite: {
        type: Number,
        label: "Quantité"
    }
  }, { tracker: Tracker }));

Consommables.allow({ 
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