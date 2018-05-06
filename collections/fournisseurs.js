Fournisseurs= new Mongo.Collection('fournisseurs'); 

Fournisseurs.allow({ 
    insert: function() { 
        return true; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    } 
});