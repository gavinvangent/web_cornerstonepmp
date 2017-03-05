'use strict';

window.cpmpApp.controller('HomeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    var maxImageId = 8,
        _timeout;

    $scope.imageId = parseInt(Math.random() * maxImageId + 1, 10);

    var setImage = function(){
        if ($scope.imageId > maxImageId) {
            $scope.imageId = 1;
        }

        if ($scope.imageId <= 0) {
            $scope.imageId = maxImageId;
        }
        
        _timeout = $timeout(function(){
            ++$scope.imageId;
            setImage();
        }, 4000);
    };

    $scope.prevImage = function(){
        $timeout.cancel(_timeout);
        $scope.imageId--;
        setImage();
    };

    $scope.nextImage = function(){
        $timeout.cancel(_timeout);
        $scope.imageId++;
        setImage();
    };

    setImage();
  }]);
