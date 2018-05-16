import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Locaux = new Mongo.Collection('locaux');

Locaux.attachSchema(new SimpleSchema({
    numero: {
        type: Number,
        label: "Numéro"
    },
    etage: {
        type: Number,
        label: "Etage"
    },
    lieuId: {
        type: String,
        label: "Lieu",
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Lieux.find().map(function (l) {
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