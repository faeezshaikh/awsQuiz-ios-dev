// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','timer','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.constant('topicMap', {
    1 : 'data/ec2.js',
    2 : 'data/s3.js',
    3 : 'data/dynamoDb.js',
    4 : 'data/sqs.js',
    5 : 'data/sns.js',
    6 : 'data/swf.js',
    7 : 'data/iam.js',
    8 : 'data/cf.js',
    9 : 'data/beanstalk.js',
    10 : 'data/vpc.js',
    100 : 'data/practice1.js',
    200 : 'data/practice2.js',
    300 : 'data/exam.js'


})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.ebook', {
      url: '/ebook',
      views: {
        'menuContent': {
          templateUrl: 'templates/ebook.html'
        }
      }
    })
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
     .state('app.share', {
      url: '/share',
      views: {
        'menuContent': {
          templateUrl: 'templates/share.html'
        }
      }
    })
    .state('app.topics', {
      url: '/topics',
      views: {
        'menuContent': {
          templateUrl: 'templates/topics.html'
        }
      }
    })

  .state('app.single', {
    url: '/topics/:topicId',
    views: {
      'menuContent': {
        templateUrl: 'templates/topic.html',
        controller: 'AppCtrl'
       }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/topics');
});
