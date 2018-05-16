Template.updateFormModelesTemplate.events({ 
    'click #submitUpdate_btn': function() { 
      Router.go('Modeles');
    } 
});

Template.readFormModelesTemplate.events({ 
  'click #submitRead_btn': function() { 
    Router.go('Modeles');
  } 
});

