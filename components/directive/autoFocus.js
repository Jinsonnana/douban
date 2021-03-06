/*
* @Author: 南在南方
* @Date:   2016-09-30 14:05:09
* @Last Modified by:   南在南方
* @Last Modified time: 2016-10-11 13:17:31
*/

define(["angular"], function(angular){

	'use strict';
	var app = angular.module('renren');
	app.directive('autoFocus', function(){
		return{
			restrict: 'EA',//限制
			link: function(scope, element, attr){
				element.on('click', function(){
					element.parent().children().attr('class', '');
					element.addClass('active');
				});
			}
		}
	});
	return app;
});
