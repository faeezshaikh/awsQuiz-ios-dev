angular.module('starter.controllers', ['socialShareModule'])

.controller('AppCtrl', function($scope, $stateParams, $state, $http, helperService, $ionicModal, localStorageService, awsService, $rootScope,topicMap,shareService) {

  var warned = false;
  var practiceExam = false;
  var examTopic = $stateParams.topicId;

  var tSetting = awsService.getTimerSettings();
  if (tSetting === 'on') {
    $scope.showTimer = true;
  } else {
    $scope.showTimer = false;
  }

  /*
	
	 5. Ebook page
	 9. ebook site
	 */
  $scope.toggleTimer = function(val) {
    awsService.setTimerSettings(val);
  }

  $scope.loadQuiz = function(examTopic) {
   
    $scope.questions = [];
    $scope.timer = 900;
    $scope.wrong = 0;
    $scope.score = 0;

    file = topicMap[examTopic];
 
    if (examTopic == 100 || examTopic == 200 || examTopic == 300) {
      // If its one of the mock exams
      practiceExam = true;

      if ($scope.showTimer) {
        $scope.timer = 2400;
      }
    
      // Show a warning modal first
      if (warned) {
        // If warned, show the timer and set appropriate time.
        $scope.timer = 2400;
        $scope.showTimer = true;
 
        if (examTopic == 300) {
          $scope.timer = 3300;
        }

      } else {
          // Show the modal if not warned.
        if (examTopic == 300) {
             $scope.bigExam = 'big'; // the Warning modal differs for practice exam vs certification exam in title
        }

        $ionicModal.fromTemplateUrl('templates/warningModal.html', {
          scope : $scope
        }).then(function(modal) {
          $scope.warningModal = modal;
          $scope.warningModal.show();
        });
      }

    }

    // once the file source is identifed, call service to get contents of file.
    $http.get(file).then(function(res) {
      $scope.quiz = res.data.quiz;
      $scope.config = helperService.extend({}, $scope.defaultConfig, res.data.config);
      $scope.questions = $scope.config.shuffleQuestions ? helperService.shuffle(res.data.questions) : res.data.questions;
      // $scope.questions =  res.data.questions;
      $scope.totalItems = $scope.questions.length;
      $scope.totalQues = $scope.questions.length;
      $scope.itemsPerPage = $scope.config.pageSize;
      // $scope.itemsPerPage = 1;
      $scope.currentPage = 1;
      $scope.mode.value = 'quiz';

      $scope.$watch('currentPage + itemsPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage), end = begin + $scope.itemsPerPage;

        $scope.filteredQuestions = $scope.questions.slice(begin, end);
      });
    });
  }


  if(examTopic) {
    $scope.loadQuiz(examTopic);  
  }
  

  $scope.mode = {
    'value' : 'quiz'
  };

  $scope.topics = awsService.getTopics();
  $scope.mockExams = awsService.getMockExams();

  $ionicModal.fromTemplateUrl('templates/timeup.html', {
    scope : $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  //Note: Only those configs are functional which is documented at: http://www.codeproject.com/Articles/860024/Quiz-Application-in-AngularJs
  // Others are work in progress.
  $scope.defaultConfig = {
    'allowBack' : true,
    'allowReview' : true,
    'autoMove' : false, // if true, it will move to next question automatically when answered.
    'duration' : 0, // indicates the time in which quiz needs to be completed. post that, quiz will be automatically submitted. 0 means unlimited.
    'pageSize' : 1,
    'requiredAll' : false, // indicates if you must answer all the questions before submitting.
    'richText' : false,
    'shuffleQuestions' : true,
    'shuffleOptions' : true,
    'showClock' : true,
    'showPager' : true,
    'theme' : 'none'
  }

  $scope.goTo = function(index) {
    if (index > 0 && index <= $scope.totalItems) {
      $scope.currentPage = index;
      $scope.mode.value = 'quiz';
    }
  }

  $scope.onSelect = function(question, option) {
    // if (question.QuestionTypeId == 1) { 
    question.Options.forEach(function(element, index, array) {
      if (element.Id != option.Id) {
        element.Selected = false;
        question.Answered = element.Id;
      }
    });
    // }
    /*
     if ($scope.config.autoMove == true && $scope.currentPage < $scope.totalItems)
     $scope.currentPage++;*/
  }

  $scope.onSubmit = function() {

    if (practiceExam) {
      // For mock exams we show a warning message

      $ionicModal.fromTemplateUrl('templates/submitConfirm.html', {
        scope : $scope
      }).then(function(modal) {
        $scope.submitModal = modal;
        $scope.submitModal.show();
      });
    } else {

      // Otherwise we dont show warning and directly calculate score.
      calculateAndUpdateScore();
    }

  }

  $scope.isAnswered = function(index) {
    var answered = 'Not Answered';
    $scope.questions[index].Options.forEach(function(element, index, array) {
      if (element.Selected == true) {
        answered = 'Answered';
        return false;
      }
    });
    return answered;
  };

  $scope.isCorrect = function(question) {
    var result = 'Correct';
    question.Options.forEach(function(option, index, array) {
      if (toBool(option.Selected) != option.IsAnswer) {
        result = 'Wrong';

        return false;
      }
    });
    return result;
  };

  function toBool(val) {
    if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
      return false;
    else if (val == true || val == 'true' || val == 'True')
      return true;
    else
      return 'unidentified';
  }
  ;

  $scope.timerElapsed = function() {
    $scope.modal.show();
  }

  $scope.viewResults = function() {
    $scope.modal.hide();
    $scope.onSubmit();
  };

  $scope.closeResults = function() {
    $scope.mode.value = 'quiz';
    $state.go('app.topics');
  }

  $scope.closeWarning = function() {
    $scope.warningModal.hide();
    $state.go('app.topics');
  }

  $scope.cancelSubmit = function() {
    $scope.submitModal.hide();
  }

  $scope.confirmSubmit = function() {
    $scope.submitModal.hide();
    calculateAndUpdateScore();
  }

  $scope.startPracticeExam = function() {
    $scope.warningModal.hide();
    warned = true;
    $scope.loadQuiz(examTopic);
  }

  function calculateAndUpdateScore() {

    $scope.wrong = 0;
    $scope.score = 0;

    $scope.$broadcast('timer-stop');
    $scope.questions.forEach(function(q, index) {
      q.Options.forEach(function(option, index, array) {

        if (option.IsAnswer === true) {
          if (option.Selected) {
            if (option.Selected === false) {
              $scope.wrong++;
            }
          } else {
            $scope.wrong++;
          }

        }
      });
    });
    var correct = $scope.totalQues - $scope.wrong;
    $scope.score = Math.round((Number(correct) / $scope.totalQues) * 100);
    $scope.verdict = ($scope.score > 65) ? 'Pass' : 'Fail';

    awsService.updateScoreForTopics(examTopic, $scope.score);
    $scope.mode.value = 'result';
  }
  
  $scope.shareFb = function() {
		shareService.shareOnFb();
	}
	$scope.shareTwitter = function() {
		shareService.shareOnTwitter();
	}
	$scope.shareWhatsapp = function() {
		shareService.shareOnWhatsapp();
	}
	$scope.shareSms = function() {
		shareService.shareViaSms();
	}
	$scope.shareEmail = function() {
		shareService.shareViaEmail();
	}
});
