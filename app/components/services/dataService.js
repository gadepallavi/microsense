
'use strict';

angular.module('MicroSense.services.dataService', [])
    .service('dataService', function($http) {
        this.getData = function(URL,callbackFunc) {
            $http({
                method: 'GET',
                url: URL
                //url: '../app/components/data/readers.txt'
            }).success(function(data){
                // With the data successfully returned, call our callback
                callbackFunc(data);
            }).error(function(){
                console.log("There is some error in the application");
            });
        };
        this.postData = function(URL,data) {
            $http({
                url: URL,
                method: 'POST',
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).then(function(response) {
                var res = response.config.data;
                //Display the response data which is a JSON Object with two parameters 1) Operation [String] Readers [Array]
                console.log("response data" + res);
            }, function errorCallback(response) {
                console.log(response);
                console.log("There is some error in the application");
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };
    });

