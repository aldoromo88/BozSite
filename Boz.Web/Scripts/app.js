/// <reference path="Vendors/Sammy/sammy-0.7.4.js" />
require.config({
    baseUrl: "/Scripts/",
    paths: {
        jquery: 'Vendors/JQuery/jquery-2.0.0',
        knockout: 'Vendors/Knockout/knockout-2.2.1',
        underscore: 'Vendors/Underscore/underscore',
        sammy: "Vendors/Sammy/sammy-0.7.4",
        text: "Vendors/Helpers/text",
        css: "Vendors/Helpers/css",
        domReady: "Vendors/Helpers/domReady",
        
    },
    shim: {
        jquery: {
            exports: '$'
        },
        
        underscore: {
            exports: "_"
        },
        sammy: {
            deps: ['jquery'],
            exports:"SammyShim"
        }
    }
});

require(['knockout', 'Modules/Core/shell_viewmodel', 'domReady!'], function (ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});