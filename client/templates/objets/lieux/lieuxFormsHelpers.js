Template.insertFormLieuxTemplate.helpers({
    villesOptions: function () {
      return Villes.find().map(function (v) {
        return {label: v.nom, value: v._id};
      });
    }
});

Template.updateFormLieuxTemplate.events({ 
  'click #submitUpdate_btn': function() { 
       Router.go("Lieux");
  } 
});

Template.updateFormLieuxTemplate.helpers({
  villesOptions: function () {
    return Villes.find().map(function (v) {
      return {label: v.nom, value: v._id};
    });
  }
});

Template.readFormLieuxTemplate.events({ 
  'click #submitRead_btn': function() { 
       Router.go("Lieux");
  } 
}); 

Template.readFormLieuxTemplate.helpers({
  villesOptions: function () {
    return Villes.find().map(function (v) {
      return {label: v.nom, value: v._id};
    });
  }
});