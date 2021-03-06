'use strict';


var cities = [];

var app = angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngPasswordStrength',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngFileUpload',
    'ui.bootstrap',
    'ui.checkbox',
     
     
    'swipe',
    'ui.router',
    
    
    'ui.select',
    'ngSanitize',
    'ngIdle',
    'ngTouch',
    'ngVideo',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
 

  ]).constant("myConfig", {
      "url": "http://localhost:8000",
      'timeoutSeconds': 1200,
      'idletimeSeconds': 1100,
       "MaxPicturesForMember": 14,
         getcities : function($http , callback){
           console.log(cities);
           if(!cities.length){
             console.log("cities constant");
              var url = 'http://localhost:8000/api/getcities';
             $http.get(url).then(function (result){
                 //console.log(result);
                 cities = result;
                 callback(null, cities);
             }).catch(function (result){
                console.log("error");
                callback("error" , result);
             });
           } else {
              callback(null,cities);
           }
       }
    })

