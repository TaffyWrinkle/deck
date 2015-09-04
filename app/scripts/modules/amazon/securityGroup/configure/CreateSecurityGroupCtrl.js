'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.amazon.securityGroup.create.controller', [
  require('angular-ui-router'),
  require('../../../account/accountService.js'),
  require('../../../caches/infrastructureCaches.js'),
  require('../../../caches/cacheInitializer.js'),
  require('../../../tasks/monitor/taskMonitorService.js'),
  require('../../../securityGroups/securityGroup.read.service.js'),
  require('../../../vpc/vpc.read.service.js'),
])
  .controller('awsCreateSecurityGroupCtrl', function($scope, $modalInstance, $state, $controller,
                                                  accountService, securityGroupReader,
                                                  taskMonitorService, cacheInitializer, infrastructureCaches,
                                                  _, application, securityGroup ) {

    $scope.pages = {
      location: require('./createSecurityGroupProperties.html'),
      ingress: require('./createSecurityGroupIngress.html'),
    };

    var ctrl = this;

    angular.extend(this, $controller('awsConfigSecurityGroupMixin', {
      $scope: $scope,
      $modalInstance: $modalInstance,
      application: application,
      securityGroup: securityGroup,
    }));


    accountService.listAccounts('aws').then(function(accounts) {
      $scope.accounts = accounts;
      ctrl.accountUpdated();
    });

    this.getSecurityGroupRefreshTime = function() {
      return infrastructureCaches.securityGroups.getStats().ageMax;
    };


    ctrl.upsert = function () {
      ctrl.mixinUpsert('Create');
    };

    ctrl.initializeSecurityGroups();

  }).name;