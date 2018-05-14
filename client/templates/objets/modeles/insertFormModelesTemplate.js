Template.insertFormModelesTemplate.helpers({
  marqueOptions: function () {
    return Marques.find().map(function (m) {
      return {label: m.nom, value: m._id};
    });
  }
});

