'use strict';

angular.module('angularSeoTestFrontApp').controller('MapCtrl', function(rooms) {

    this.map = {
        center: {
            latitude : 45.7579555,
            longitude: 4.8351209
        },
        zoom  : 12
    };

    this.options = {
        disableDefaultUI: true
    };

    this.rooms = rooms;

});
