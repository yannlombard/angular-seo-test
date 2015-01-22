'use strict';

angular.module('angularSeoTestFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angulartics',
    'angulartics.google.analytics',
    'uiGmapgoogle-maps',
    'firebase'
])
    .config(function($routeProvider, $locationProvider, $analyticsProvider, uiGmapGoogleMapApiProvider) {
        $analyticsProvider.virtualPageviews(true);

        uiGmapGoogleMapApiProvider.configure({
            //key: 'your api key',
            v        : '3.17',
            libraries: 'weather,geometry,visualization'
        });

        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
