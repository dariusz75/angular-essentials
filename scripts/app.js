var myApp = angular
						.module('myApp', ['ui.router'])
						.config(function ($stateProvider, $urlRouterProvider) {
							$stateProvider
								.state('home', {
									url: '/home',
									templateUrl: 'templates/home.html',
									controller: 'homeController',
									//abstract: true
								})
								.state('home.nested', {
									url: '/nested',
									templateUrl: 'templates/nested.html',
									controller: 'nestedController'
								})
								.state('setup', {
									url: '/setup',
									templateUrl: 'templates/setup.html',
									controller: 'setupController'
								})
								.state('module', {
									url: '/module',
									templateUrl: 'templates/module.html',
									controller: 'moduleController'
								})
								.state('controller', {
									url: '/controller',
									templateUrl: 'templates/controller.html',
									controller: 'controllerController'
								})

								//$urlRouterProvider.otherwise('/home');
						})
						.controller('homeController', function($scope) {
							$scope.message = "Home Page";
						})
						.controller('nestedController', function($scope) {
							$scope.message = "Message from Nested Controller";
						})
						.controller('setupController', function($scope) {
							$scope.message = "Message from Setup Controller";
						})
						.controller('moduleController', function($scope) {
							$scope.message = "Message from Module Controller";
						})
						.controller('controllerController', function($scope) {
							$scope.message = "Message from Controller Controller";
						})
						.controller('sidebarController', function($scope) {
							var chapters = [
															{chapterName: 'Setup', url: 'setup'},
															{chapterName: 'Module', url: 'module'},
															{chapterName: 'Controller', url: 'controller'},
															{chapterName: 'src directive', url: '#'},
															{chapterName: 'Two-way data binding', url: '#'},
															];

							$scope.chapters = chapters;
						})

