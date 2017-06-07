var app = angular.module('starter.controllers', [])

app.controller('AllStarCtrl', ["$scope", "$state","apiService", function($scope, $state, apiService) {
  console.info("Ok - all star")
  //
  apiService.getPostings (function(result){
    //todo fazer alguma coisa
    if (result.success){
      $scope.postings = result.data
    }else{
      alert(result.message)
    }
  })
  //exibir detalhes da lista
  $scope.showDetail=function(item){
    apiService.setCurrent(item)
    $state.go("detail",{id:item.reference})
    console.info("Indo para detalhes")
  }
}])
app.controller('AnimalPrintCtrl', ["$scope", "$state","apiService", function($scope, $state, apiService)  {
  console.info("Ok - animal print")
  //
  apiService.getPostings (function(result){
    //todo fazer alguma coisa
    if (result.success){
      $scope.postings = result.data
    }else{
      alert(result.message)
    }
  })

   //exibir detalhes da lista
  $scope.showDetail=function(item){
    apiService.setCurrent(item)
    $state.go("detail",{id:item.reference})
    console.info("Indo para detalhes")
  }
}])
app.controller('OutrasCtrl', ["$scope", "$state","apiService", function($scope, $state, apiService)  {
  console.info("Ok - outras")
  //
  apiService.getPostings (function(result){
    //todo fazer alguma coisa
    if (result.success){
      $scope.postings = result.data
    }else{
      alert(result.message)
    }
  })
  //exibir detalhes da lista
  $scope.showDetail=function(item){
    apiService.setCurrent(item)
    $state.go("detail",{id:item.reference})
    console.info("Indo para detalhes")
  }
}])

app.controller('DetailCtrl', ["$scope", "$state", "apiService", function($scope, $state, apiService) {
  console.info("Ok - detalhes")
  var obj=apiService.getCurrent()
  //
  if(!obj.title){
    $state.go("tab.allstar")
    return
  }
  //voltar
  $scope.detail=obj
  //  
  //
  $scope.goBack=function(){
    history.back()
  }
}])




