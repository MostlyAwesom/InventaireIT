Template.insertFormModelesTemplate.helpers({
  marqueOptions: function () {
    return Marques.find().map(function (m) {
      return {label: m.nom, value: m._id};
    });
  }
});

Template.updateFormModelesTemplate.events({ 
    'click #submitUpdate_btn': function() { 
      Router.go('Modeles');
    } 
});

Template.updateFormModelesTemplate.helpers({
  marqueOptions: function () {
    return Marques.find().map(function (m) {
      return {label: m.nom, value: m._id};
    });
  }
});
Template.readFormModelesTemplate.events({ 
  'click #submitRead_btn': function() { 
    Router.go('Modeles');
  } 
});

Template.readFormModelesTemplate.helpers({
marqueOptions: function () {
  return Marques.find().map(function (m) {
    return {label: m.nom, value: m._id};
  });
}
});
