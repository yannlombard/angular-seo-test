'use strict';

angular.module('angularSeoTestFrontApp').config(function($routeProvider) {
    $routeProvider
        .when('/bleuSapinVosg', {
            templateUrl: 'app/bleuSapinVosg/bleuSapinVosg.html',
            controller : 'BleuSapinVosgCtrl',
            resolve: {
                setPage: ['Page', 'Pages', function(Page, Pages) {
                    return Page.setPage(Pages.bleuSapinVosg);
                }]
            }
        });
});
