'use strict';

angular.module('angularSeoTestFrontApp').config(function($routeProvider) {
    $routeProvider
        .when('/:cityName', {
            templateUrl : 'app/map/map.html',
            controller  : 'MapCtrl',
            controllerAs: 'ctrl',
            resolve: {
                rooms: ['$firebase', function($firebase) {
                    return $firebase(new Firebase('https://pokerux.firebaseio.com/list')).$asArray().$loaded();
                }]
            }
        });
});
