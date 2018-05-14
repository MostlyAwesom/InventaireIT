Template.insertFormLieuxTemplate.helpers({
    villesOptions: function () {
      return Villes.find().map(function (v) {
        return {label: v.nom, value: v._id};
      });
    }
});