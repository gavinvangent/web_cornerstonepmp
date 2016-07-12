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
    	imageId = parseInt(Math.random() * maxImageId + 1, 10),
    	_timeout;

    var setImage = function(){
    	if (imageId > maxImageId)
    		imageId = 1;

    	$scope.image = 'images/places/' + imageId + '.jpg';
    	_timeout = $timeout(function(){
    		++imageId;
    		setImage();
    	}, 4000);
    };

    $scope.nextImage = function(){
    	$timeout.cancel(_timeout);
    	--imageId;
    	setImage();
    }

    $scope.nextImage = function(){
    	$timeout.cancel(_timeout);
    	++imageId;
    	setImage();
    }

    setImage();
  }]);
