Template.registerHelper('isAdmin', function() {
    if(Roles.userIsInRole(Meteor.user(), ['administrator'])){
        return true;
    } else {
        return false; 
    } 
});