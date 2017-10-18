'use strict';

angular.module('MicroSense.view1', ['ngRoute','MicroSense.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','dataService',function($scope,dataService) {

  var selectedReaderName = "";
  var postData = {operation: "",readers: []};

  $scope.selectedReader = [];
  var map = new Object();

  //Get a collection of all readers
  var URLreaders = '../app/components/data/readers.js';
    dataService.getData(URLreaders,function(readers) {
        $scope.readers = readers;
    });

  //Get the operations available to be run
    var URLoperation = '../app/components/data/operations.js';
    dataService.getData(URLoperation,function(operations) {
        $scope.operations = operations;
    });

   //Get the collection of health issues in the system
    var URLhealth = '../app/components/data/health.js';
    dataService.getData(URLhealth,function(health) {
        $scope.health = health;
        //Store readers name into map
        angular.forEach($scope.readers, function(value) {
            map[value.name] = "";
        });
        //Store health status of the readers
        angular.forEach(health, function(value) {
            map[value.reader] = value.status;
        });
        //Store reader name and their health status in a $scope variable
        $scope.readerList = map;
    });

    $scope.CheckHealthStatus = function() {
        //Set default values for the flags
        $scope.HasError = false;
        $scope.HasWarning = false;
        postData.readers = [];
        angular.forEach($scope.selectedReader, function(reader,key) {
            if (reader === true) {
                $scope.MissingReader = false;
                selectedReaderName = $scope.readers[key].name;
                // array of reader names that should begin running this operation
                postData.readers.push(selectedReaderName);
                if(($scope.readerList[selectedReaderName]).toLowerCase()==="error"){
                    //set HasError=true to display message on UI
                    $scope.HasError = true;
                }
                else if(($scope.readerList[selectedReaderName]).toLowerCase()==="warning"){
                    ////set HasWarning=true to display message on UI
                    $scope.HasWarning = true;
                }
            }
        });
    };

    $scope.Submit = function() {
        var URLjobs = '../app/components/data/jobs.js';
        //Set default values for the flags
        $scope.MissingReader = false;
        $scope.MissingOperation = false;
        //Check if the readers are selected
        if(postData.readers.length === 0){
            $scope.MissingReader = true;
        }
        //Check if the operation is selected
        else if(!$scope.selectedOperation){
            $scope.MissingOperation = true;
        }
        else {
            postData.operation = $scope.selectedOperation;
            //Post data as a json object with two parameters:
            //operation [String] one of the operations available to be run
            //readers [Array] an array of reader names that should begin running this operation
            dataService.postData(URLjobs,postData);
        }
    };
}]);
