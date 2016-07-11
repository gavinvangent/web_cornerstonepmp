'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('cpmpApp')
  .controller('MainCtrl', ['$scope', '$timeout',  function ($scope, $timeout) {
    var maxImageId = 5,
    	imageId = parseInt(Math.random() * maxImageId + 1, 10);

    var setImage = function(imageId){
    	if (imageId > maxImageId)
    		imageId = 1;

    	$scope.image = 'images/places/' + imageId + '.jpg';
    	$timeout(function(){
    		setImage(++imageId);
    	}, 4000);
    };

    setImage(imageId);
  }]);
