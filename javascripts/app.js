angular
  .module( 'starter-app', [ 'angular-d3-word-cloud', 'ngMaterial' ] )
  .controller('AppCtrl', function($scope) {
    //$scope.imagePath = 'img/washedout.png';
    $scope.width=200;
    $scope.height=200;
    $scope.words=[
      {text: 'Performance',size: 25},
      {text: 'BigData',size: 20},
      {text: 'Scalability',size: 25},
      {text: 'Bottleneck',size: 20},
      {text: 'SysStats',size: 20},
      {text: 'nmon',size: 20},
      {text: 'Hadoop',size: 20},
      {text: 'ETL',size: 20},
      {text: 'DataStage',size: 20},
      {text: 'SQL',size: 15},
      {text: 'Kafka',size: 15},
      {text: 'Zookeeper',size: 15},
      {text: 'Spark',size: 15},
      {text: 'Scala',size: 15},
      {text: 'Java',size: 20},
      {text: 'JVM',size: 20},
      {text: 'C/C++',size: 10}
   ];

})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
