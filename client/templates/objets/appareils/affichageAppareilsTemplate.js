Template.Helper({
    fournisseursOptions: function() {
        return Fournisseurs.find({}, {fields: {nom: 1}}).map(function (o){
      return {label: o.nom, value: o._id};;
    }
});