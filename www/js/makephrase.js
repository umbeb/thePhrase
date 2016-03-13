angular.module('starter.controllers.makephrase', [])

    .controller('MakephraseCtrl', function($scope, $ionicModal, $timeout) {

        var dictionary=[
            {id:1,values:[{desc:'Quando',idNext:2},{desc:'Ho',idNext:3},{desc:'Sono',idNext:4},{desc:'Voglio',idNext:5}]},
            {id:2,values:[{desc:'Vado a casa',idNext:2},{desc:'Tolgo il tubo',idNext:2},{desc:'Mangio',idNext:2},{desc:'Arrivano',idNext:2}]},
            {id:3,values:[{desc:'Paura',idNext:2},{desc:'Sonno',idNext:2},{desc:'Fame',idNext:2},{desc:'Caldo',idNext:2},{desc:'Sete',idNext:2}]},
            {id:4,values:[{desc:'Dove',idNext:2},{desc:'In miglioramento',idNext:2},{desc:'In peggioramento',idNext:2},{desc:'Stanco',idNext:2},{desc:'Solo',idNext:2}]},
            {id:5,values:[{desc:'Occhiali',idNext:2},{desc:'Telecomando',idNext:2},{desc:'Luce',idNext:2},{desc:'Coperta',idNext:2}]}
        ]


        $scope.currentValues=dictionary[0].values;
        console.log("XXXXXXXx");
        $scope.parola="";
        $scope.aggiungiParola=function(id,item){
            $scope.parola=$scope.parola.concat(" "+item);
            $scope.currentValues=dictionary[id-1].values;
        }
    })
