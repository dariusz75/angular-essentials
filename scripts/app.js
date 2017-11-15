var myApp = angular
						.module('myApp', ['ui.router', 'ngAnimate'])
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
								.state('src-directive', {
									url: '/src-directive',
									templateUrl: 'templates/src-directive.html',
									controller: 'srcDirectiveController'
								})
								.state('two-way-databinding', {
									url: '/two-way-databinding',
									templateUrl: 'templates/two-way-databinding.html'
								})
								.state('ng-repeat-directive', {
									url: '/ng-repeat-directive',
									templateUrl: 'templates/ng-repeat-directive.html',
									controller: 'ngRepeatController'
								})
								.state('events-handling', {
									url: '/events-handling',
									templateUrl: 'templates/events-handling.html'
								})
								.state('filters', {
									url: '/filters',
									templateUrl: 'templates/filters.html'
								})
								.state('data-sorting', {
									url: '/data-sorting',
									templateUrl: 'templates/data-sorting.html'
								})
								.state('data-sorting-by-search-filter', {
									url: '/data-sorting-by-search-filter',
									templateUrl: 'templates/data-sorting-by-search-filter.html'
								})
								.state('data-sorting-by-multiple-properties', {
									url: '/data-sorting-by-multiple-properties',
									templateUrl: 'templates/data-sorting-by-multiple-properties.html'
								})
								.state('ng-hide-and-ng-show-directives', {
									url: '/ng-hide-and-ng-show-directives',
									templateUrl: 'templates/ng-hide-and-ng-show-directives.html'
								})
								.state('ng-init-directive', {
									url: '/ng-init-directive',
									templateUrl: 'templates/ng-init-directive.html'
								})
								.state('ng-include-directive', {
									url: '/ng-include-directive',
									templateUrl: 'templates/ng-include-directive.html'
								})
								.state('services', {
									url: '/services',
									templateUrl: 'templates/services.html'
								})
								.state('services-separated', {
									url: '/services-separated',
									templateUrl: 'templates/services-separated.html'
								})
								.state('anchorscroll-service', {
									url: '/anchorscroll-service',
									templateUrl: 'templates/anchorscroll-service.html'
								})
								.state('routing', {
									url: '/routing',
									templateUrl: 'templates/routing.html'
								})
								.state('nested-routing', {
									url: '/nested-routing',
									templateUrl: 'templates/nested-routing.html'
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
						.controller('srcDirectiveController', function($scope) {
							var country = {
										flag: './img/GB.png'
									};

							$scope.country = country;
						})
						.controller('ngRepeatController', function($scope) {
							var employees = [ 
																														{ firstName: 'Ben', lastName: 'Hastings', gender: 'Male',salary: 5500 },
																														{ firstName: 'John', lastName: 'Smith', gender: 'Male', salary: 6500 },
																														{ firstName: 'Ana', lastName: 'Tylor', gender: 'Female', salary: 7500 },
																														{ firstName: 'Josh', lastName: 'Maker', gender: 'Male', salary: 8500 },
																														{ firstName: 'Sofia', lastName: 'Cool', gender: 'Female', salary: 9500 },
																													];

																					var countries = [
																														{
																															name: 'UK',
																															cities: [
																																				{name: 'London'},
																																				{name: 'Bristol'},
																																				{name: 'Leeds'},
																																			]
																														},
																														{
																															name: 'Poland',
																															cities: [
																																				{name: 'Warsaw'},
																																				{name: 'Krakow'},
																																				{name: 'Poznan'},
																																			]
																														},
																														{
																															name: 'Germany',
																															cities: [
																																				{name: 'Berlin'},
																																				{name: 'Hamburgh'},
																																				{name: 'Frankfurt'},
																																			]
																														},
																													];



																					$scope.employees = employees;
																					$scope.countries = countries;
						})
						.controller('sidebarController', function($scope) {
							var chapters = [
															{chapterName: 'Module', url: 'module'},
															{chapterName: 'Controller', url: 'controller'},
															{chapterName: 'src directive', url: 'src-directive'},
															{chapterName: 'Data binding', url: 'two-way-databinding'},
															{chapterName: 'ng-repeat-directive', url: 'ng-repeat-directive'},
															{chapterName: 'Events Handling', url: 'events-handling'},
															{chapterName: 'Filters', url: 'filters'},
															{chapterName: 'Data Sorting', url: 'data-sorting'},
															{chapterName: 'Data sorting by search filter', url: 'data-sorting-by-search-filter'},
															{chapterName: 'Data sorting by multiple properties', url: 'data-sorting-by-multiple-properties'},
															{chapterName: 'ng-hide and ng-show directives', url: 'ng-hide-and-ng-show-directives'},
															{chapterName: 'ng init directive', url: 'ng-init-directive'},
															{chapterName: 'ng-include-directive', url: 'ng-include-directive'},
															{chapterName: 'Services', url: 'services'},
															{chapterName: 'Services separated', url: 'services-separated'},
															{chapterName: 'Anchorscroll service', url: 'anchorscroll-service'},
															{chapterName: 'Routing', url: 'routing'},
															{chapterName: 'Nested routing', url: 'nested-routing'}
															];

							$scope.chapters = chapters;
						})
						.directive('ngPrism', function() {
					    return {
					        restrict: 'A',
					        link: function(scope, element, attrs) {
					            Prism.highlightElement(element.find('code')[0]);
					        }
					    }
						})

