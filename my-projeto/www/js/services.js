var app=angular.module('starter.services', [])
app.service("apiService", ["$http", function($http){
  //url de busca das categorias
  //para usar android
   var categoriasUrl = "http://1v00r02n.service.ag-simplesebellas.appspot.com/query/nozip/categories"
  //para usar no modo desenvolvedor
  // var categoriasUrl = "http://localhost:8100/nozip/categories"
  //url de busca das postagens
  //para usar android
   var postingsUrl = "http://1v00r02n.service.ag-simplesebellas.appspot.com/query/nozip/postings/0"
  //para usar no modo desenvolvedor
  //var postingsUrl = "http://localhost:8100/nozip/postings/0"
 //

//postagem corrente
var current = {}
 //executa uma chamda/requisição no serfvidor
 //e retorna os dados através do callback
 //calback = function(data){
   //...
   //} 
  this.getPostings = function(callback){
    //
    //ao responder com sucesso
    var onSuccess=function(response){
      //devolver par o callback
      callback({success:true, data: response.data})
      //console.info(JSON.stringify(response))
    }
    //
    //ao responder com fracasso (erro)
    var onError= function(response){
      callback({success:false, message:response.data})
     // console.info(JSON.stringify(response))
    }

    $http.get(postingsUrl).then(onSuccess, onError)
  }

  //set corrunt posting
  this.setCurrent = function(value){
    current = value
  }
  //get current posting
  this.getCurrent= function(){
    return current
  }
}])


app.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
