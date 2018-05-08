Template.navBarTemplate.events({
    'click .dropdown-toggle': function (e) {
        e.preventDefault();
        console.log("test");
        $(e.target).find('.dropdown-menu').toggle();
        }
    });