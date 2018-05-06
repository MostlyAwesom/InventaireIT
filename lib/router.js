Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFoundLayout'
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        template: 'homeTemplate'
    });
});


