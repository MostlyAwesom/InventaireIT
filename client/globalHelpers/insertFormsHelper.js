Template.registerHelper({
    fournisseurOptions: function () {
      return Fournisseurs.find().map(function (o) {
        return {label: o.nom, value: o._id};
      });
    },
    modeleOptions: function () {
      return Modeles.find().map(function (o) {
        return {label: o.nom, value: o._id};
      });
    },
    localOptions: function () {
      return Locaux.find().map(function (o) {
        return {label: o.nom, value: o._id};
      });
    },
    typeMachineOptions: function () {
      return TypesMachine.find().map(function (o) {
        return {label: o.nom, value: o._id};
      });
    }
  });
