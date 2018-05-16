import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Consommables= new Mongo.Collection('consommables'); 

Consommables.attachSchema(new SimpleSchema({
    numeroSerie: {
      type: String,
      label: "Numéro de série",
    },
    couleur: {
      type: String,
      label: "Couleur",
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
    modeleId: {
      type: String,
      label: "Modèle",
      autoform: {
        type: 'select',
        firstOption: '',
        options: function () {
            return Modeles.find().map(function (m) {
                return {label: m.nom, value: m._id};
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
            return Locaux.find().map(function (l) {
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