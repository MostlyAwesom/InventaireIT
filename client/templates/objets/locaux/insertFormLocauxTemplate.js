Template.insertFormLocauxTemplate.helpers({
    lieuxOptions: function () {
      return Lieux.find().map(function (l) {
        return {label: l.nom, value: l._id};
      });
    }
});