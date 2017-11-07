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
						.controller('sidebarController', function($scope) {
							var chapters = [
															{chapterName: 'Setup', url: 'setup'},
															{chapterName: 'Module', url: '#'},
															{chapterName: 'Controller', url: '#'},
															{chapterName: 'src directive', url: '#'},
															{chapterName: 'Two-way data binding', url: '#'},
															];

							$scope.chapters = chapters;
						})

