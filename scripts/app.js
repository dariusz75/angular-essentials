var myApp = angular
						.module('myApp', ['ui.router'])
						.config(function ($stateProvider) {
							$stateProvider
								.state('home', {
									url: '/home',
									templateUrl: 'templates/home.html',
									controller: 'homeController',
									//abstract: true
								})
								.state('home.nested', {
									url: '/',
									templateUrl: 'nested.html',
									controller: 'nestedController'
								})
						})
						.controller('homeController', function($scope) {
							$scope.message = "Home Page";
						})
						.controller('nestedController', function($scope) {
							$scope.message = "Nested Page";
						})

