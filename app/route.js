/*
* @Author: 虚竹
* @Date:   2016-09-29 12:57:50
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-02 16:30:40
*/
;(function(angular){
'use strict';
	var app = angular.module('renren');
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/hot', {
			templateUrl:'../views/hot/view.html',
			controller: "hotController"
		}).when('/future', {
			templateUrl:'../views/future/view.html',
			controller: "futureController"
		}).when('/top', {
			templateUrl:'../views/top/view.html',
			controller: "TopController"
		}).when('/search/:text', {
			templateUrl: '../views/search/view.html',
			controller: 'searchController'
		}).when('/subject/:id', {
			templateUrl: '../views/loading/view.html',
			controller: 'loadingController'
		}).otherwise({
			redirectTo: '/hot'//直接跳转
		});
	}]);
})(angular);