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
    this.route('Consommables', {
        path: '/objets/consommables',
        template: 'consommablesTemplate',

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
    this.route('Fournisseurs', {
        path: '/proprietes/fournisseurs',
        template: 'fournisseursTemplate',

        data: function(){
            var fournisseurs = Fournisseurs.find();
            
            return {
                fournisseurs: fournisseurs
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Fournisseurs");
        }
    });
    this.route('FournisseursUpdate', {
        path: '/proprietes/fournisseurs/modification:_id',
        template: 'updateFormFournisseursTemplate',

        data: function(){
            var fournisseur = Fournisseurs.Collection.findOne({_id: this.params._id});

            return {
                fournisseur: fournisseur
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Fournisseurs");
        }
    });
    this.route('Lieux', {
        path: '/proprietes/lieux',
        template: 'lieuxTemplate',

        data: function(){
            var lieux = Lieux.find();
            var villes = Villes.find();
            
            return {
                lieux: lieux,
                villes: villes
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Lieux"), Meteor.subscribe("Villes")];
        }
    });
    this.route('Locaux', {
        path: '/proprietes/locaux',
        template: 'locauxTemplate',

        data: function(){
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var villes = Villes.find();
            
            return {
                lieux: lieux,
                locaux: locaux,
                villes: villes
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Locaux"), Meteor.subscribe("Lieux"), Meteor.subscribe("Villes")];
        }
    });
    this.route('Marques', {
        path: '/proprietes/marques',
        template: 'marquesTemplate',

        data: function(){
            var marques = Marques.find();
            
            return {
                marques: marques
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Marques");
        }
    });
    this.route('Modeles', {
        path: '/proprietes/modeles',
        template: 'modelesTemplate',

        data: function(){
            var marques = Marques.find();
            var modeles = Modeles.find();
            
            return {
                marques: marques,
                modeles: modeles
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Marques"), Meteor.subscribe("Modeles")];
        }
    });
    this.route('TypesMachine', {
        path: '/proprietes/typesMachine',
        template: 'typesMachineTemplate',

        data: function(){
            var typesMachine = TypesMachine.find();

            
            return {
                typesMachine: typesMachine
            };
        },
        waitOn: function(){
            return Meteor.subscribe("TypesMachine");
        }
    });
    this.route('Villes', {
        path: '/proprietes/villes',
        template: 'villesTemplate',

        data: function(){
            var villes = Villes.find();
            
            return {
                villes: villes
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Villes");
        }
    });
});


