Meteor.publish("TousAppareils", function(){
    return Appareils.find();
});