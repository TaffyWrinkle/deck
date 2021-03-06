'use strict';

import {EXECUTION_GROUPS_COMPONENT} from '../executionGroup/executionGroups.component';

let angular = require('angular');

require('./executions.less');

module.exports = angular
  .module('spinnaker.core.delivery.main.executions.directive', [
    require('../filter/executionFilters.directive.js'),
    EXECUTION_GROUPS_COMPONENT,
    require('./executions.controller.js'),
  ])
  .directive('executions', function () {
    return {
      restrict: 'E',
      templateUrl: require('./executions.html'),
      controller: 'ExecutionsCtrl',
      controllerAs: 'vm',
    };
  });
