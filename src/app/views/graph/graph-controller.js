'use strict';
(function(window, angular, undefined){

  function graphController($scope){
     var cm = $scope;
         

     cm.createGraph = function(value){
        
        if(value !== '' && value){
              var Strlen  = value.length;
                cm.childNodes =[];
              for(var i=0;i <= Strlen-1;i++){
                  cm.childNodes[i] = value.charAt(i);
                
              }
              
        }
     }
     

    

  }

  graphController.$inject = ['$scope'];

  angular.module('graphTreeApp')
  .controller('graphController', graphController);

})(window, window.angular);
