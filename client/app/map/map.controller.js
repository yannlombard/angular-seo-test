'use strict';

angular.module('angularSeoTestFrontApp').controller('MapCtrl', function($firebase) {

    var ref = new Firebase('https://pokerux.firebaseio.com/list');

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

    this.rooms = $firebase(ref).$asArray();

});
