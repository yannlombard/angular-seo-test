'use strict';

angular.module('angularSeoTestFrontApp').factory('Pages', function() {

    return {
        home         : {
            id   : 'home',
            title: 'angular seo test front',
            desc : 'Référencer une application Angular'
        },
        bleuSapinVosg: {
            id   : 'bleuSapinVosg',
            title: 'Page de test bleuSapinVosg - angular seo test front',
            desc : 'Page de test sur le mot clé bleuSapinVosg'
        },
        map          : {
            id   : 'map',
            title: 'Les salles de poker à Lyon',
            desc : 'Adresses de salles et liens vers les clubs de poker à Lyon'
        }
    };
});
