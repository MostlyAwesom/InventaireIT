import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Appareils = new Mongo.Collection('appareils');

Appareils.attachSchema(new SimpleSchema({
    numeroSerie: {
      type: String,
      label: "Numéro de série",
      max: 200,
    },
    nom: {
      type: String,
      label: "Nom"
    },
    modele: {
      type: String,
      label: "Modèle",
    },
    typeMachine: {
      type: String,
      label: "Type d'appareil",
    },
    local: {
      type: String,
      label: "Local",
    },
    fournisseur: {
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
    }
  }, { tracker: Tracker }));

Appareils.allow({ 
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