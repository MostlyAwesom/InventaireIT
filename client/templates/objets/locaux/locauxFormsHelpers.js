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

Template.readFormLocauxTemplate.events({ 
  'click #submitRead_btn': function() { 
       Router.go("Locaux");
  } 
});

Template.readFormLocauxTemplate.helpers({
  lieuxOptions: function () {
    return Lieux.find().map(function (l) {
      return {label: l.nom, value: l._id};
    });
  }
});
