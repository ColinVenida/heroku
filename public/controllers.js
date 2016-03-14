//Exercise 2 - $watch

app = angular.module("MyApp", []);

console.log("app.js is running!");

//create a service using factory()
app.factory("myService", function() {

  var value = 0;

  return {
    getValue: function() {
      return value;
    },
    setValue: function(v) {
      value = v;
      console.log("setValue function, " + value);
    }
  }

});

//create 2 controllers with the service

app.controller("first", function($scope, myService) {

  $scope.getVal = function() {
    console.log(myService.getValue());
  }
  $scope.setVal = function(v) {
    myService.setValue(v);
  }

  $scope.val = myService.getValue();

  //first parameter runs on every call to the digest loop
  // - the first parameter should resolve to what is supposed to be watched
  $scope.$watch(function() {
      //return the value that should be watched
      return myService.getValue();
    },
    //the second parameter is a function that will run if there are any
    //changes to the first parameter
    function(newValue, oldValue) {
      $scope.val = newValue;
    });


});

app.controller("second", function($scope, myService) {
  $scope.getVal = function() {
    console.log(myService.getValue());
  }
  $scope.setVal = function(v) {
    myService.setValue(v);
  }

  //first parameter runs on every call to the digest loop
  // - the first parameter should resolve to what is supposed to be watched
  $scope.$watch(function() {
      //return the value that should be watched
      return myService.getValue();
    },
    //the second parameter is a function that will run if there are any
    //changes to the first parameter
    function(newValue, oldValue) {
      $scope.val = newValue;
    });

});
