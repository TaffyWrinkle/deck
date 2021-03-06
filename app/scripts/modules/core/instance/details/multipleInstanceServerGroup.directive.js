'use strict';

let angular = require('angular');

require('./multipleInstanceServerGroup.directive.less');

module.exports = angular
  .module('spinnaker.core.instance.details.multipleInstanceServerGroup.directive', [

  ])
  .directive('multipleInstanceServerGroup', function () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {
        instanceGroup: '='
      },
      controller: angular.noop,
      controllerAs: 'vm',
      templateUrl: require('./multipleInstanceServerGroup.directive.html')
    };
  });
