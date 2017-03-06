'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
window.cpmpApp = angular.module('cpmpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngTouch',
    'ngRoute',
    'ui.router'
  ]);

window.cpmpApp.config(['$httpProvider', '$resourceProvider', '$routeProvider', function($httpProvider, $resourceProvider, $routeProvider){
	$routeProvider.when('/', { templateUrl: 'views/home.html', controller: 'HomeCtrl', menu: 'home', footer: 'default', title: 'Home' });
    $routeProvider.when('/about', { templateUrl: 'views/about.html', controller: 'AboutCtrl', menu: 'about', footer: 'default', title: 'About Us' });
    $routeProvider.when('/contact', { templateUrl: 'views/contact.html', controller: 'ContactCtrl', menu: 'contact', title: 'Contact Us' });
    $routeProvider.when('/portfolio', { templateUrl: 'views/portfolio.html', controller: 'PortfolioCtrl', menu: 'portfolio', footer: 'default', title: 'Portfolio' });
    $routeProvider.when('/services', { templateUrl: 'views/services.html', controller: 'ServicesCtrl', menu: 'services', footer: 'default', title: 'Services' });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);

window.cpmpApp.run(['$rootScope', function($rootScope) {
	$rootScope.$on('$routeChangeStart', function(event, next){
        $rootScope.title = next.$$route.title;
		$rootScope.menu = next.$$route.menu;
        $rootScope.footer = next.$$route.footer;
	});
}]);