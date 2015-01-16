'use strict';

angular.module('angularSeoTestFrontApp').config(function($routeProvider) {
    $routeProvider
        .when('/:cityName', {
            templateUrl: 'app/map/map.html',
            controller : 'MapCtrl'
        });
});
