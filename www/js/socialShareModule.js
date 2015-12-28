'use strict';
angular.module('socialShareModule', [ 'ngCordova' ]).service('shareService', [ '$cordovaSocialSharing', '$cordovaDevice', function($cordovaSocialSharing,$cordovaDevice) {
	
	function isSharingPossible(network) {
		
//		http://ngcordova.com/docs/common-issues/
		var channel,fn,platform,url;
		var p = $cordovaDevice.getPlatform();
		console.log('FB Social Share');
		if(p == 'iOS') {
			platform = 'ios';
			url = 'http://apple.co/1Mv6Bua';
		}
		if(p == 'Android') {
			platform = 'android';
			url = 'https://goo.gl/mruqwn'; // android version
		}
		console.log('Device is ' + platform);
		
		var appstoreLink = [ url ];
		var message = "Just thought you might want to check this app out. I found it pretty useful preparing for the AWS Certified Developer exam. " + url;
		var tweet = "Great app to help you prepare for the AWS Certified Developer exam. Check it out in app stores ";
		var subject = "Check out this app in the app store";
//		var appImage = [ 'data/img/icon.png' ];
		var appImage = null;

//		http://stackoverflow.com/questions/33106359/socialsharing-phonegap-plugin-cansharevia-check-whether-whatsapp-is-available

		
		var viaByKeyAndPlatform = {
			    facebook: {
			        ios: 'com.apple.social.facebook',
			        android: 'com.facebook.katana'
			    },
			    whatsapp: {
			        ios: 'whatsapp', // but for iOS9 a whitelisting is necessary for the whatsapp:// url.
			        android: 'com.whatsapp'
			    },
			    twitter: {
			        ios: 'com.apple.social.twitter',
			        android: 'com.twitter.android'
			    }
			};
		
		
		
	if(network == 'sms' || network == 'email') {
		channel = '';
	} else {
		channel = viaByKeyAndPlatform[network][platform];
	}
		console.log('Channel = ' , channel);
		if(network == 'facebook') {
			fn = shareWithFb;
		}
		if(network == 'twitter') {
			fn = shareWithTwitter;
		}
		if(network == 'whatsapp') {
			fn = shareWithWhatsapp;
		}
		if(network == 'sms') {

			console.log('attemting to open SMS');
			// access multiple numbers in a string like: '0612345678,0687654321'
			$cordovaSocialSharing.shareViaSMS(message, "").then(function(result) {
				// Success!
			}, function(err) {
				// An error occurred. Show a message to the user
				console.log('No SMS client found your device');
				alert('No SMS client found your device');
			});
		
			return;
		}
		if(network == 'email') {

			console.log('attemting to open Email');
			// toArr, ccArr and bccArr must be an array, file can be either
			// null, string or array
			$cordovaSocialSharing.shareViaEmail(message, subject, "", "", "", null).then(function(result) {
				// Success!
			}, function(err) {
				// An error occurred. Show a message to the user
				console.log('No Email app installed on your device');
				alert('No Email app installed on your device');
			});
		
		
			return;
		}
		
		$cordovaSocialSharing.canShareVia(channel, 'Testing for FB', null, null).then(function(result) {
			console.log('calling share via ' + channel);
			fn();
		}, function(err) {
			// An error occurred. Show a message to the user
			console.log('No '+ network + ' app installed on your device');
			alert('No '+ network + ' app installed on your device');
		});
		
		function shareWithFb() {
			console.log('attemting to open FB app');
			$cordovaSocialSharing.shareViaFacebook(message, appImage, appstoreLink).then(function(result) {
				// Success!
			}, function(err) {
				console.log('Facebook error');
			});
		}
		
		function shareWithTwitter() {
			console.log('attemting to open Twitter app');
			$cordovaSocialSharing.shareViaTwitter(tweet, appImage, url).then(function(result) {
				// Success!
			}, function(err) {
				console.log('Twitter error');
			});
		}
		
		function shareWithWhatsapp() {
			console.log('attemting to open Whats app');
			$cordovaSocialSharing.shareViaWhatsApp(message, appImage, appstoreLink).then(function(result) {
				// Success!
			}, function(err) {
				console.log('Whatspp error');
			});
		}
		
		function shareWithSMS() {}
		
		function shareWithEmail() {}
	}
	return {

		shareOnFb : function() {
			isSharingPossible('facebook');
		},

		shareOnTwitter : function() {
			isSharingPossible('twitter');
		},

		shareOnWhatsapp : function() {
			isSharingPossible('whatsapp');
		},
		shareViaSms : function() {
			isSharingPossible('sms');
		},
		shareViaEmail : function() {
			isSharingPossible('email');
		}
	}
} ]);
