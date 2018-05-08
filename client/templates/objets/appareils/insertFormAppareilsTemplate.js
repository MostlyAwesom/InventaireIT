Template.insertFormAppareils.helpers({
    fournisseurOptions: function () {
      return Fournisseurs.find().map(function (o) {
        return {label: o.nom, value: o._id};
      });
    }
  });