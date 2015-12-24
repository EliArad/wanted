'use strict';


app.controller('MainController', ['$scope','$state','authToken','myhttphelper','dbsearch','myutils',
                                  'appCookieStore','Idle','$rootScope','SessionStorageService','API',
    function($scope,$state,authToken,myhttphelper,dbsearch,myutils,
             appCookieStore,Idle,$rootScope,SessionStorageService,API)
    {
      var vm = this;
      
       

    } // the controller closing
  ]).config(function(IdleProvider, KeepaliveProvider,myConfig) {
  // configure Idle settings
  IdleProvider.idle(myConfig.idletimeSeconds); // in seconds
  IdleProvider.timeout(myConfig.timeoutSeconds); // in seconds
  KeepaliveProvider.interval(2); // in seconds
})
.run(function(Idle){
  // start watching when the app runs. also starts the Keepalive service by default.
  Idle.watch();
});
