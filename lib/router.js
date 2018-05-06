Router.configure({
    layoutTemplate: 'mainTemplate'
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        template: 'homeTemplate'
    });
});


