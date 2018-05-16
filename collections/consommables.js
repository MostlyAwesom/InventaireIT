import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Consommables= new Mongo.Collection('consommables'); 

Consommables.attachSchema(new SimpleSchema({
    numeroSerie: {
      type: String,
      label: 'Numéro de série',
    },
    couleur: {
      type: String,
      label: 'Couleur',
      autoform: {
        type: 'select',
        firstOption: '',
        options: function(){
          return [
            {label: "Noir", value: "Noir"},
            {label: "Magenta", value: "Magenta"},
            {label: "Cyan", value: "Cyan"},
            {label: "Jaune", value: "Jaune"}
          ]}
        }
    },
    marqueId: {
        type: String,
        label: 'Marque',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Marques.find().map(function (m) {
                    return {label: m.nom, value: m._id};
                });
            }
        }
    },
    modeleId: {
      type: String,
      label: 'Modèle',
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
      label: 'Local',
      autoform: {
        type: 'select',
        firstOption: '',
        options: function () {
            return Locaux.find().map(function (l) {
                return {label: l.numero, value: l._id};
            });
        }
      }
    },
    fournisseurId: {
        type: String,
        label: 'Fournisseur',
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
    quantite: {
        type: Number,
        label: 'Quantité'
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