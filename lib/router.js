Router.configure({
    layoutTemplate: 'mainTemplate',
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        template: 'homeTemplate',

        data: function(){
            var appareils = Appareils.find();
            var consommables = Consommables.find();
            var fournisseurs = Fournisseurs.find();
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var marques = Marques.find();
            var modeles = Modeles.find();
            var typesMachine = TypesMachine.find();
            var villes = Villes.find();
            
            return {
                appareils: appareils,
                consommables: consommables,
                fournisseurs: fournisseurs,
                lieux: lieux,
                locaux: locaux,
                marques: marques,
                modeles: modeles,
                typesMachine: typesMachine,
                villes: villes
            };
        },
        waitOn: function(){
            return Meteor.subscribe("TousLesObjets");
        }
    });
    this.route('Appareils', {
        path: '/objets/appareils',
        template: 'appareilsTemplate',

        data: function(){
            var appareils = Appareils.find();
            var consommables = Consommables.find();
            var fournisseurs = Fournisseurs.find();
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var marques = Marques.find();
            var modeles = Modeles.find();
            var typesMachine = TypesMachine.find();
            var villes = Villes.find();
            
            return {
                appareils: appareils,
                consommables: consommables,
                fournisseurs: fournisseurs,
                lieux: lieux,
                locaux: locaux,
                marques: marques,
                modeles: modeles,
                typesMachine: typesMachine,
                villes: villes
            };
        },
        waitOn: function(){
            return Meteor.subscribe("TousLesObjets");
        }
    });
});


