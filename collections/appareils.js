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
    modeleId: {
      type: String,
      label: "Modèle",
    },
    typeMachineId: {
      type: String,
      label: "Type d'appareil",
    },
    localId: {
      type: String,
      label: "Local",
    },
    fournisseurId: {
        type: String,
        label: "Fournisseur",
    },
    dateMiseEnService: {
        type: Date,
        label: "Date de mise en service",
    },
    dateSortieDeService: {
        type: Date,
        label: "Date de sortie de service",
        optional: true
    },
    dateFinDeSupport: {
        type: Date,
        label: "Date de fin de support",
        optional: true
    },
    dureeGarantie: {
        type: String,
        label: "Durée de la garantie",
        optional: true
    },
    parentId: {
        type: String,
        label: "Lié à",
        optional: true
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