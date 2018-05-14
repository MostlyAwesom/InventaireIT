Template.registerHelper("marqueOptions", function() {
    return Marques.find().map(function (marque) {
      return {label: marque.name, value: marque._id};
    });
  });


