'use strict';

angular.module('angularSeoTestFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angulartics',
    'angulartics.google.analytics'
])
    .config(function($routeProvider, $locationProvider, $analyticsProvider) {
        $analyticsProvider.virtualPageviews(true);

        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
