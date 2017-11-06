var myApp = angular
						.module('myModule', ['ngRoute'])
						.config(function ($routeProvider) {
							$routeProvider
								.when('/home', {
									templateUrl: 'templates/home.html',
									controller: 'homeController'
								})
								.when('/courses', {
									templateUrl: 'templates/courses.html',
									controller: 'coursesController'
								})
								.when('/students', {
									templateUrl: 'templates/students.html',
									controller: 'studentsController'
								})
						})
						.controller('homeController', function($scope) {
							$scope.message = "Home Page";
						})
						.controller('coursesController', function($scope) {
							$scope.courses = ['HTML', 'CSS', 'JavaScript', 'PHP', 'iOS'];
						})
						.controller('studentsController', function($scope) {
							$scope.students = [
															{ name: 'Ben', city: 'London', gender: 'Male'},
															{ name: 'Bill', city: 'Moscow', gender: 'Male' },
															{ name: 'Josh', city: 'Berlin', gender: 'Male' },
															{ name: 'Andrew', city: 'Warsaw', gender: 'Male' },
															{ name: 'John', city: 'Paris', gender: 'Male' }
															];
						})

