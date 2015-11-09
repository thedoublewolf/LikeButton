import $ from 'jquery';

let MyController = function ($scope) {

  $scope.number = 0;

  // $scope.string = 'likes';

  $scope.addLike = function () {

    $scope.number = $scope.number + 1;
    if ($scope.number === 1) {
      // $scope.string = 'like';
      $('#button').removeClass('start').addClass('size1');
    } if (4 < $scope.number && $scope.number < 9) {
      $('#button').removeClass('size1').addClass('size2');
    } if (9 < $scope.number && $scope.number < 14) {
      $('#button').removeClass('size2').addClass('size3');
    } if (14 < $scope.number && $scope.number < 19) {
      $('#button').removeClass('size3').addClass('size4');
    } if (19 < $scope.number && $scope.number < 24) {
      $('#button').removeClass('size4').addClass('size5');
    } if (24 < $scope.number && $scope.number < 29) {
      $('#button').removeClass('size5').addClass('size6');
    } if (29 < $scope.number && $scope.number < 34) {
      $('#button').removeClass('size6').addClass('size7');
    } if (34 < $scope.number && $scope.number < 39) {
      $('#button').removeClass('size7').addClass('size8');
    } if (39 < $scope.number && $scope.number < 44) {
      $('#button').removeClass('size8').addClass('size9');
    } if (44 < $scope.number && $scope.number < 49) {
      $('#button').removeClass('size9').addClass('size10');
    }
  };

};

MyController.$inject = ['$scope'];

export default MyController;