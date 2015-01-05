'use strict';

angular.module('angularSeoTestFrontApp').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller : 'MainCtrl',
            resolve: {
                setPage: ['Page', 'Pages', function(Page, Pages) {
                    return Page.setPage(Pages.home);
                }]
            }
        });
});
