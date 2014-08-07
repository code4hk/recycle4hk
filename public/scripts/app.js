'use strict';
// Declare app level module which depends on filters, and services
angular.module('recycle4hk', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'ui.bootstrap.carousel',
    'snap'
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/timeline', {
            templateUrl: 'templates/timeline.html',
            controller: 'TimelineCtrl',
            reloadOnSearch: false
        });
        $routeProvider.when('/', {
            templateUrl: 'templates/landing.html',
            controller: 'LandingCtrl',
            reloadOnSearch: false
        });
        $routeProvider.when('/visualize', {
            templateUrl: 'templates/visualization.html',
            controller: 'VisualizationCtrl',
            reloadOnSearch: false
        });
        $routeProvider.when('/visualize-map', {
            templateUrl: 'templates/visualization.html',
            controller: 'VisualizationCtrl',
            reloadOnSearch: false
        });



        $routeProvider.when('/visualize-budget', {
            templateUrl: 'templates/visualization-budget.html',
            reloadOnSearch: false
        });





        $routeProvider.when('/visualize-composition', {
            templateUrl: 'templates/visualization-composition.html',
            controller: 'VisualizationCtrl',
            reloadOnSearch: false
        });

                $routeProvider.when('/tips', {
            templateUrl: 'templates/tips.html',
            controller: 'VisualizationCtrl',
            reloadOnSearch: false
        });



        https://dchtm6r471mui.cloudfront.net/hackpad.com_USVAwLGvyQC_p.144570_1404570508252_undefined
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
])
.controller('TimelineCtrl', ['$scope',
    function($scope) {
        console.log('Timeline');
    }
])
.controller('LandingCtrl', ['$scope',
    function($scope) {
        console.log('Timeline');
    }
])
.controller('VisualizationCtrl', ['$scope',
    function($scope) {
        console.log('VisualizationCtrl');
    }
])

