'use strict';

angular.module('angularSeoTestFrontApp').factory('Page', function() {

    var Service = {
        title: '',
        desc : ''
    };

    Service.setPage = function(page) {
        Service.title = page.title;
        Service.desc = page.desc;
        return Service;
    };

    return Service;
});
