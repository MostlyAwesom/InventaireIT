Template.insertFormModelesTemplate.helpers({ 
    marqueOptions: function () {
        return Marques.find().map(function (o) {
          return {label: o.nom, value: o._id};
        });
      }
}); 


