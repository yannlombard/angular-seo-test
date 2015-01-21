'use strict';

angular.module('angularSeoTestFrontApp').controller('MapCtrl', function() {

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

    this.markers = [
        {
            id    : 0,
            coords: {
                latitude : 45.7438798,
                longitude: 4.8712624
            }
        }
    ];


});
