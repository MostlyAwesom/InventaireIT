import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Consommables= new Mongo.Collection('consommables'); 

Consommables.attachSchema(new SimpleSchema({
    numeroSerie: {
      type: String,
      label: "Numéro de série",
      max: 200,
    },
    nom: {
      type: String,
      label: "Nom"
    },
    modeleId: {
      type: String,
      label: "Modèle",
      autoform: {
        type: "select"
      }
    },
    typeMachineId: {
      type: String,
      label: "Type d'appareil",
      autoform: {
        type: "select"
      }
    },
    localId: {
      type: String,
      label: "Local",
      autoform: {
        type: "select"
        }
    },
    fournisseurId: {
        type: String,
        label: "Fournisseur",
        autoform: {
            type: "select"
        }
      },
    dateMiseEnService: {
        type: Date,
        label: "Date de mise en service",
    },
    dateSortieDeService: {
        type: Date,
        label: "Date de sortie de service",
    },
    dateFinDeSupport: {
        type: Date,
        label: "Date de fin de support",
    },
    dureeGarantie: {
        type: String,
        label: "Durée de la garantie",
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