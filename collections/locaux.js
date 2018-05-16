import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Locaux = new Mongo.Collection('locaux');

Locaux.attachSchema(new SimpleSchema({
    numero: {
        type: Number,
        label: 'Numéro'
    },
    etage: {
        type: Number,
        label: 'Etage'
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
    }
  }, { tracker: Tracker }));

Locaux.allow({ 
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