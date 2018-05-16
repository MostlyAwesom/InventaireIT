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
    marqueId: {
        type: String,
        label: 'Marque',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Marque.find().map(function (m) {
                    return {label: m.nom, value: m._id};
                });
            }
        }
    },
    modeleId: {
      type: String,
      label: "Modèle",
      autoform: {
        type: 'select',
        firstOption: '',
        options: function () {
            return Modeles.find({marqueId: AutoForm.getFieldValue('marqueId')}).map(function (m) {
                return {label: m.nom, value: m._id};
            });
        }
      }
    },
    typeMachineId: {
      type: String,
      label: "Type d'appareil",
      autoform: {
        type: 'select',
        firstOption: '',
        options: function () {
            return TypesMachine.find().map(function (t) {
                return {label: t.libelle, value: t._id};
            });
        }
      }   
    },
    villeId: {
        type: String,
        label: 'Ville',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Villes.find().map(function (v) {
                    return {label: v.nom, value: v._id};
                });
            }
        }
    },
    lieuId: {
        type: String,
        label: 'Lieu',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Lieux.find({villeId: AutoForm.getFieldValue('villeId')}).map(function (l) {
                    return {label: l.nom, value: l._id};
                });
            }
        }
    },
    localId: {
      type: String,
      label: "Local",
      autoform: {
        type: 'select',
        firstOption: '',
        options: function () {
            return Locaux.find({lieuId: AutoForm.getFieldValue('lieuId')}).map(function (l) {
                return {label: l.numero, value: l._id};
            });
        }
      }
    },
    fournisseurId: {
        type: String,
        label: "Fournisseur",
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Fournisseurs.find().map(function (f) {
                    return {label: f.nom, value: f._id};
                });
            }
        }
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
        optional: true,
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                var typeOrdinateurFixe = TypesMachine.findOne({libelle: 'Ordinateur fixe'});
                var typeOrdinateurPortable = TypesMachine.findOne({libelle: 'Ordinateur portable'});
                var parentsPossibles = Appareils.find({typeMachineId: typeOrdinateurFixe._id, typeMachineId: typeOrdinateurPortable._id});
                
                return parentsPossibles.map(function(p){
                    return {label: p.nom, value: p._id};
                });
            }
        }
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