angular
  .module( 'starter-app', [ 'angular-d3-word-cloud', 'ngMaterial' ] )
  .controller('AppCtrl', function($scope) {
    //$scope.imagePath = 'img/washedout.png';
    $scope.width=200;
    $scope.height=200;
    large=20;
    medium=15;
    small=10;
    $scope.words=[
      {text: 'Performance',size: large, color: 'rgb(51, 139, 200)'},
      {text: 'Scalability',size: large},
      {text: 'BigData',size: medium},
      {text: 'Bottleneck',size: medium},
      {text: 'SysStats',size: medium},
      {text: 'nmon',size: medium},
      {text: 'Hadoop',size: medium},
      {text: 'ETL',size: medium},
      {text: 'DataStage',size: medium},
      {text: 'SQL',size: small},
      {text: 'Kafka',size: small},
      {text: 'Zookeeper',size: small},
      {text: 'Spark',size: small},
      {text: 'Scala',size: small},
      {text: 'Python',size: small},
      {text: 'Ruby',size: small},
      {text: 'bash',size: small},
      {text: 'Java',size: medium},
      {text: 'JVM',size: medium},
      {text: 'C/C++',size: small}
   ];
   seed=1;
   //console.log(seed);
   $scope.rotate=function(){
     //return ~~(Math.random() * 2) * 90;
     result= ~~(Math.abs(Math.sin(seed++))*2) * 90;
     //console.log(result);
     return result;
   }
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
