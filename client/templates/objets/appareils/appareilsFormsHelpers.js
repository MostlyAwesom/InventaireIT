Template.insertFormAppareilsTemplate.helpers({
    fournisseursOptions: function () {
      return Fournisseurs.find().map(function (f) {
        return {label: f.nom, value: f._id};
      });
    },
    modelesOptions: function () {
      return Modeles.find().map(function (m) {
        return {label: m.nom, value: m._id};
      });
    },
    locauxOptions: function () {
      return Locaux.find().map(function (l) {
        return {label: l.numero, value: l._id};
      });
    },
    typesMachineOptions: function () {
      return TypesMachine.find().map(function (t) {
        return {label: t.libelle, value: t._id};
      });
    },
    parentsOptions: function() {
      var typeOrdinateurFixe = TypesMachine.findOne({libelle: 'Ordinateur fixe'});
      var typeOrdinateurPortable = TypesMachine.findOne({libelle: 'Ordinateur portable'});
      var parentsPossibles = Appareils.find({typeMachineId: typeOrdinateurFixe._id, typeMachineId: typeOrdinateurPortable._id});
      
      return parentsPossibles.map(function(p){
        return {label: p.nom, value: p._id};
      });
    }
});

Template.updateFormAppareilsTemplate.helpers({
  fournisseursOptions: function () {
    return Fournisseurs.find().map(function (f) {
      return {label: f.nom, value: f._id};
    });
  },
  modelesOptions: function () {
    return Modeles.find().map(function (m) {
      return {label: m.nom, value: m._id};
    });
  },
  locauxOptions: function () {
    return Locaux.find().map(function (l) {
      return {label: l.numero, value: l._id};
    });
  },
  typesMachineOptions: function () {
    return TypesMachine.find().map(function (t) {
      return {label: t.libelle, value: t._id};
    });
  }
});