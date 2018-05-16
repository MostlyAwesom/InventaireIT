Template.insertFormConsommablesTemplate.helpers({
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
  couleursOptions: function () {
    return [
      {label: "Noir", value: "Noir"},
      {label: "Magenta", value: "Magenta"},
      {label: "Cyan", value: "Cyan"},
      {label: "Jaune", value: "Jaune"}
    ]
  }
});

Template.updateFormConsommablesTemplate.events({ 
  'click #submitUpdate_btn': function() { 
       Router.go("Consommables");
  } 
});

Template.updateFormConsommablesTemplate.helpers({
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
  couleursOptions: function () {
    return [
      {label: "Noir", value: "Noir"},
      {label: "Magenta", value: "Magenta"},
      {label: "Cyan", value: "Cyan"},
      {label: "Jaune", value: "Jaune"}
    ]
  }
});

Template.readFormConsommablesTemplate.events({ 
  'click #submitRead_btn': function() { 
       Router.go("Consommables");
  } 
});

Template.readFormConsommablesTemplate.helpers({
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
  couleursOptions: function () {
    return [
      {label: "Noir", value: "Noir"},
      {label: "Magenta", value: "Magenta"},
      {label: "Cyan", value: "Cyan"},
      {label: "Jaune", value: "Jaune"}
    ]
  }
});