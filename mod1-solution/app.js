(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";
        $scope.messageBorderColor = "inherit";
        $scope.messageFontColor = "inherit";
        $scope.checkDishes = function () {
            if ($scope.dishes == '') {
                $scope.message = "Please enter data first";
                $scope.messageBorderColor = "red";
                $scope.messageFontColor = "red";
            } else if ($scope.dishes.split(",").length > 3) {
                $scope.message = "Too much!";
                $scope.messageBorderColor = "green";
                $scope.messageFontColor = "green";
            } else {
                $scope.message = "Enjoy!";
                $scope.messageBorderColor = "green";
                $scope.messageFontColor = "green";
            }
        }
    }

})();
