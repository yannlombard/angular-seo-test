'use strict';

angular.module('angularSeoTestFrontApp').controller('MapCtrl', function(rooms) {

    var vm = this;

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

    var mouseEnter = function(room) {
        angular.forEach(vm.rooms, function(room) {
            room.options = room.options || {};
            room.options.opacity = 0.4;
        });

        room.hover = true;
        room.options = room.options || {};
        room.options.opacity = 1;
        vm.listHover = true;
    };

    var mouseLeave = function(room) {
        angular.forEach(vm.rooms, function(room) {
            room.options = room.options || {};
            room.options.opacity = 1;
        });

        room.hover = false;
        vm.listHover = false;
    };

    this.mouseEnterRoom = mouseEnter;
    this.mouseLeaveRoom = mouseLeave;

    this.markersEvents = {
        mouseover: function(gMarker, eventName, model) {
            mouseEnter(model);
        },
        mouseout: function(gMarker, eventName, model) {
            mouseLeave(model);
        }
    };

});
