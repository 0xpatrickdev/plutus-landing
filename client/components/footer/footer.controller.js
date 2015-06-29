'use strict';

angular.module('plutusLandingApp')
  .controller('FooterCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Footer',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });