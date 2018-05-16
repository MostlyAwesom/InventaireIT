import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Modeles = new Mongo.Collection('modeles'); 

Modeles.attachSchema(new SimpleSchema({
    nom: {
      type: String,
      label: "Nom"
    }, 
    marqueId: {
        type: String,
        label: "Marque",
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return Marques.find().map(function (m) {
                    return {label: m.nom, value: m._id};
                });
            }
        }
    }
  }, { tracker: Tracker }));

Modeles.allow({ 
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