
app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('register' , {
    url:'/register',
    templateUrl: '/client/views/register.html',
    controller: 'RegistrationController'
  }).state('main' , {
    url:'/',
    templateUrl: '/client/views/main.html',
    controller: 'MainController'
  }).state('contact' , {
    url:'/contact',
    controller: 'ContactController',
    templateUrl: '/client/views/contact.html'
  }).state('about' , {
    url:'/about',
    controller: 'AboutController',
    templateUrl: '/client/views/about.html'
  }).state('test' , {
    url:'/test',
    controller: 'TestApiController',
    templateUrl: '/client/views/test.html'
  }).state('newmember' , {
    url:'/newmember',
    controller: 'ContinueRegistrationController',
    templateUrl: '/client/views/continueregistration.html'
  }).state('logout' , {
    url:'/logout',
    controller: 'LogoutController'
  }).state('login' , {
    url:'/login',
    controller: 'LoginController',
    templateUrl: '/client/views/login.html'
  }).state('mail' , {
    url:'/mail',
    controller: 'YouGotAMailController',
    templateUrl: '/client/views/YouGotAMail.html'
  }).state('mypictures' , {
    url:'/mypictures',
    controller: 'mypicturesController',
    templateUrl: '/client/views/mypictures.html'
  })
    .state('updatedetails' , {
      url:'/updatedetails',
      controller: 'ContinueRegistrationController',
      templateUrl: '/client/views/continueregistration.html'
    }).state('coredetails' , {
      url:'/coredetails',
      controller: 'coredetailsController',
      templateUrl: '/client/views/coredetails.html'
    }).state('picturecrousle' , {
      url:'/picturecrousle',
      controller: 'picturecrousleController',
      templateUrl: '/client/views/picturecrousle.html'
    }).state('nggallery' , {
      url:'/nggallery',
      controller: 'ngGalleryController',
      templateUrl: '/client/views/nggallery.html'
    }).state('imgresizer' , {
      url:'/imgresizer',
      controller: 'imageresizergalleryController',
      templateUrl: '/client/views/imgresizercrousle.html'
    }).state('galleryall' , {
      url:'/galleryall',
      controller: 'allmembersgalleryController',
      templateUrl: '/client/views/allmembersgallery.html'
    }).state('help' , {
      url:'/help',
      controller: 'HelpController',
      templateUrl: '/client/views/help.html'
    }).state('deletecard' , {
      url:'/deletecard',
      controller: 'deletecardController',
      templateUrl: '/client/views/deletecard.html'
    }).state('memberdetails' , {
      url:'/memberdetails',
      controller: 'memberdetailsController',
      templateUrl: '/client/views/memberdetails.html'
    }).state('preferencessearch' , {
      url:'/preferencessearch',
      controller: 'preferencessearchController',
      templateUrl: '/client/views/preferencessearch.html'
    }).state('memberprofile' , {
      url:'/memberprofile',
      controller: 'memberprofileController',
      templateUrl: '/client/views/memberprofile.html'
    }).state('fullpagecardlist' , {
      url:'/fullpagecardlist',
      controller: 'fullpagecardlistingController',
      templateUrl: '/client/views/fullpagecardlisting.html'
    }).state('mychatplaces' , {
      url:'/mychatplaces',
      controller: 'mychatplaceController',
      templateUrl: '/client/views/mychatplace.html'
    })



  $httpProvider.interceptors.push('authIntercepter');



});

