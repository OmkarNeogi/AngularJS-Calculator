var app = angular.module('calculatorApp', []);

app.controller('calculatorController', calcController);

function calcController($scope) {
    this.appendToScreen = function (elementToAppend) {
        if (typeof $scope.calcScreen != 'undefined') {
            $scope.calcScreen = $scope.calcScreen + elementToAppend;
        } else {
            $scope.calcScreen = elementToAppend;
        }
    }

    this.evaluate = function() {
        $scope.calcScreen = eval($scope.calcScreen);
    }

    this.clearScreen = function () {
        $scope.calcScreen = "";
    }
}