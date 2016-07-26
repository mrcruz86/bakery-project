require('angular');
var options = require('./filter/optionsFilter');
var bakery = require('./services/bakeryService');

var app = angular.module('bakery', []);

app.filter('optionsFilter', options);
app.factory('bakeryService', ['$http', bakery]);
app.controller('mainCtrl', function($scope, bakeryService) {
  $scope.title = 'Bakery';
  $scope.category = null;
  $scope.keyword = null;
  $scope.vegan = false;
  $scope.gluten = false;
  $scope.items = [];
  bakeryService.getItems().then(function(res) {
    $scope.items = res.data;
  });

  $scope.setCategory = function(cat) {
    $scope.category = cat;
    $scope.updateItems();
  };

  $scope.updateItems = function() {
    bakeryService.getItems($scope.category, $scope.keyword).then(function(res) {
      $scope.items = res.data;
    });
  };

  $scope.reset = function() {
    $scope.category = null;
    $scope.keyword = null;
    $scope.vegan = false;
    $scope.gluten = false;
    bakeryService.getItems().then(function(res) {
      $scope.items = res.data;
    });
  }

  document.querySelector('.filter-section__search input').addEventListener('keyup', function(e) {
    event.preventDefault();
    if (event.keyCode == 13) {
        $scope.updateItems();
    }
  });
});
