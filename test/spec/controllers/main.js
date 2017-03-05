'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('cpmpApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('HomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('is a useless test', function () {
    expect(typeof 'hello').toBe('string');
  });

  /*
  it('have a function attached called prevImage', function () {
    console.log(JSON.stringify(MainCtrl, null, 2));
    console.log(JSON.stringify(MainCtrl.$scope, null, 2));
    expect(typeof MainCtrl.$scope.prevImage).toBe('function');
  });

  it('have a function attached called nextImage', function () {
    expect(typeof MainCtrl.$scope.nextImage).toBe('function');
  });
  */
});
