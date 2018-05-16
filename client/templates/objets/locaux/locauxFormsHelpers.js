Template.insertFormLocauxTemplate.helpers({
    lieuxOptions: function () {
      return Lieux.find().map(function (l) {
        return {label: l.nom, value: l._id};
      });
    }
});

Template.updateFormLocauxTemplate.events({ 
  'click #submitUpdate_btn': function() { 
       Router.go("Locaux");
  } 
});

Template.updateFormLocauxTemplate.helpers({
  lieuxOptions: function () {
    return Lieux.find().map(function (l) {
      return {label: l.nom, value: l._id};
    });
  }
});
