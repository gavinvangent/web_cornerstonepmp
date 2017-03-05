'use strict';

window.cpmpApp.controller('HomeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    var maxImageId = 8,
        imageId = parseInt(Math.random() * maxImageId + 1, 10),
        _timeout;

    var setImage = function(){
        if (imageId > maxImageId) {
            imageId = 1;
        }

        if (imageId <= 0) {
            imageId = maxImageId;
        }
        
        $scope.image = 'images/places/' + imageId + '.jpg';
        _timeout = $timeout(function(){
            ++imageId;
            setImage();
        }, 4000);
    };

    $scope.prevImage = function(){
        $timeout.cancel(_timeout);
        imageId--;
        setImage();
    };

    $scope.nextImage = function(){
        $timeout.cancel(_timeout);
        imageId++;
        setImage();
    };

    setImage();
  }]);
