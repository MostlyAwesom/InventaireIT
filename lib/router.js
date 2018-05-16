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
    this.route('AppareilsUpdate', {
        path: '/objets/appareils/modification/:_id',
        template: 'updateFormAppareilsTemplate',

        data: function(){
            var appareil = Appareils.findOne({_id: Router.current().params._id});
            var appareils = Appareils.find();
            var fournisseurs = Fournisseurs.find();
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var marques = Marques.find();
            var modeles = Modeles.find();
            var typesMachine = TypesMachine.find();
            var villes = Villes.find();
            
            return {
                appareil: appareil,
                appareils: appareil,
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
    this.route('AppareilsRead', {
        path: '/objets/appareils/details/:_id',
        template: 'readFormAppareilsTemplate',

        data: function(){
            var appareil = Appareils.findOne({_id: Router.current().params._id});
            var appareils = Appareils.find();
            var fournisseurs = Fournisseurs.find();
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var marques = Marques.find();
            var modeles = Modeles.find();
            var typesMachine = TypesMachine.find();
            var villes = Villes.find();
            
            return {
                appareil: appareil,
                appareils: appareil,
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
    this.route('ConsommablesUpdate', {
        path: '/objets/consommables/modification/:_id',
        template: 'updateFormConsommablesTemplate',

        data: function(){
            var appareils = Appareils.find();
            var consommable = Consommables.findOne({_id: Router.current().params._id});
            var fournisseurs = Fournisseurs.find();
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var marques = Marques.find();
            var modeles = Modeles.find();
            var typesMachine = TypesMachine.find();
            var villes = Villes.find();
            
            return {
                appareils: appareils,
                consommable: consommable,
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
    this.route('ConsommablesRead', {
        path: '/objets/consommables/details/:_id',
        template: 'readFormConsommablesTemplate',

        data: function(){
            var appareils = Appareils.find();
            var consommable = Consommables.findOne({_id: Router.current().params._id});
            var fournisseurs = Fournisseurs.find();
            var lieux = Lieux.find();
            var locaux = Locaux.find();
            var marques = Marques.find();
            var modeles = Modeles.find();
            var typesMachine = TypesMachine.find();
            var villes = Villes.find();
            
            return {
                appareils: appareils,
                consommable: consommable,
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
        path: '/proprietes/fournisseurs/modification/:_id',
        template: 'updateFormFournisseursTemplate',

        data: function(){
            var fournisseur = Fournisseurs.findOne({_id: Router.current().params._id});

            return {
                fournisseur: fournisseur
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Fournisseurs");
        }
    });
    this.route('FournisseursRead', {
        path: '/proprietes/fournisseurs/details/:_id',
        template: 'readFormFournisseursTemplate',

        data: function(){
            var fournisseur = Fournisseurs.findOne({_id: Router.current().params._id});

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
    this.route('LieuxUpdate', {
        path: '/proprietes/lieux/modification/:_id',
        template: 'updateFormLieuxTemplate',

        data: function(){
            var lieu = Lieux.findOne({_id: Router.current().params._id});
            var villes = Villes.find();
            
            return {
                lieu: lieu,
                villes: villes
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Lieux"), Meteor.subscribe("Villes")];
        }
    });
    this.route('LieuxRead', {
        path: '/proprietes/lieux/details/:_id',
        template: 'readFormLieuxTemplate',

        data: function(){
            var lieu = Lieux.findOne({_id: Router.current().params._id});
            var villes = Villes.find();
            
            return {
                lieu: lieu,
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
    this.route('LocauxUpdate', {
        path: '/proprietes/locaux/modification/:_id',
        template: 'updateFormLocauxTemplate',

        data: function(){
            var lieux = Lieux.find();
            var local = Locaux.findOne({_id: Router.current().params._id});
            var villes = Villes.find();
            
            return {
                lieux: lieux,
                local: local,
                villes: villes
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Locaux"), Meteor.subscribe("Lieux"), Meteor.subscribe("Villes")];
        }
    });
    this.route('LocauxRead', {
        path: '/proprietes/locaux/details/:_id',
        template: 'readFormLocauxTemplate',

        data: function(){
            var lieux = Lieux.find();
            var local = Locaux.findOne({_id: Router.current().params._id});
            var villes = Villes.find();
            
            return {
                lieux: lieux,
                local: local,
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
    this.route('MarquesUpdate', {
        path: '/proprietes/marques/modification/:_id',
        template: 'updateFormMarquesTemplate',

        data: function(){
            var marque = Marques.findOne({_id: Router.current().params._id});

            return {
                marque: marque
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Marques");
        }
    });
    this.route('MarquesRead', {
        path: '/proprietes/marques/details/:_id',
        template: 'readFormMarquesTemplate',

        data: function(){
            var marque = Marques.findOne({_id: Router.current().params._id});

            return {
                marque: marque
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
    this.route('ModelesUpdate', {
        path: '/proprietes/modeles/modification/:_id',
        template: 'updateFormModelesTemplate',

        data: function(){
            var modele = Modeles.findOne({_id: Router.current().params._id});
            var marques = Marques.find();

            return {
                modele: modele,
                marques: marques
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Modeles"), Meteor.subscribe("Marques")];
        }
    });
    this.route('ModelesRead', {
        path: '/proprietes/modeles/details/:_id',
        template: 'readFormModelesTemplate',

        data: function(){
            var modele = Modeles.findOne({_id: Router.current().params._id});
            var marques = Marques.find();

            return {
                modele: modele,
                marques: marques
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("Modeles"), Meteor.subscribe("Marques")];
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
    this.route('TypesMachineUpdate', {
        path: '/proprietes/typesMachine/:_id',
        template: 'updateFormTypesMachineTemplate',

        data: function(){
            var typeMachine = TypesMachine.findOne({_id: Router.current().params._id});

            return {
                typeMachine: typeMachine
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
    this.route('VillesUpdate', {
        path: '/proprietes/villes/:_id',
        template: 'updateFormVillesTemplate',

        data: function(){
            var ville = Villes.findOne({_id: Router.current().params._id});

            return {
                ville: ville
            };
        },
        waitOn: function(){
            return Meteor.subscribe("Villes");
        }
    });
});


