'use strict';

angular.module('plutusLandingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('features', {
        url: '/features',
        templateUrl: 'app/features/features.html',
        controller: 'FeaturesCtrl'
      });
  });