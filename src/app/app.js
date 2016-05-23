'use strict';
(function(window, angular, undefined) {

  angular.module('graphTreeApp', [
    'ui.bootstrap',
    'ui.router',
    'ngDialog'
  ])
  .config([ '$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      // For any unmatched url, redirect to /overview
      $urlRouterProvider.otherwise('/overview');

      $stateProvider
        .state('overview', {
          url   : '/overview',
          views : {
            'graph':{
               templateUrl  : 'app/views/graph/graph.html'
            }
          },

        })
    }
  ]).constant('graphAppConst',{

  })
  .controller('AppController', [
    function() { }
  ]);

})(window, window.angular);
