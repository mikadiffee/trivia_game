// My questions array of Objects

var questions = [{
  question: 'Buddy the Elf has been everywhere except:',
  answers: ['Central Park', 'North Pole', 'South Pole', 'Empire State Building'],
  correctAnswer: 'South Pole'
}, {
  question: 'What was Buddy the Elf great at?',
  answers: ['Making his toy quota', 'Throwing snowballs', 'Making coffee', 'Elf school'],
  correctAnswer: 'Throwing snowballs'
}, {
  question: 'What made Santas Sleigh fly the best?',
  answers: ['The jet turbine', 'Christmas spirit', '5 Reindeer', 'Being chased by the Central Park Rangers'],
  correctAnswer: 'Christmas spirit'
}, {
  question: 'Buddy said the fake Santa at the department store smelled like what?',
  answers: ['Burnt toast', 'Dirty socks', 'Beef and cheese', 'Candy Canes'],
  correctAnswer: 'Beef and cheese'
}, {
  question: 'All are one of the four main food groups for Elves except:',
  answers: ['Candy corn', 'Candy Canes', 'Sprinkles', 'Syrup'],
  correctAnswer: 'Sprinkles'
}, {
  question: 'Who shares an affinity for elf culture?',
  answers: ['Emily', 'Miles Finch', 'Walter', 'Jovie'],
  correctAnswer: 'Jovie'
}, {
  question: 'Where did Buddy think Miles Finch was from?',
  answers: ['New York', 'South Pole', 'California', 'Mail Room'],
  correctAnswer: 'South Pole'
}, {
  question: 'Michael Hobbs was Buddys:',
  answers: ['Friend in mailroom', 'Real father', 'Brother', 'Gimbles Manager'],
  correctAnswer: 'Brother'
}];

// Start my game when start btn clicked
$('#start').on('click', function () {
  game.start();
});
// End my game when my Done btn clicked
$('#done').on('click', function () {
  game.countDown();
});


var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  // Setting my counter
  countDown: function () {
    game.counter--;
    $('#counter').html(game.counter)
    if (game.counter <= 0) {
      game.done();
    }
    if ($('#done').on('click', function () {
        game.done();
      }));
    if (game.counter <= 20) {
      $('#counter').css('color', 'red')
        .appendTo("#subwrapper");
    }
  },
  // start the game with a timer and add all the questions and answers
  start: function () {
    timer = setInterval(game.countDown, 1000)
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
    $('#start, .game-info').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#subwrapper').append('<h3>' + questions[i].question + '</h3>')
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#subwrapper').append("<input class='check-with-label' type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>  <label class='label-for-check'>" + questions[i].answers[j] + "  </label></br>");
      }
    }
    $('<button id="done" class="done-btn" type="button" name="button-done">Done</button>').appendTo('#subwrapper');
  },
  // checking each input if it is a correct answer or wrong answer and incrementing my game.correct and game.incorrect
  done: function () {
    $.each($('input[name="question-0"]:checked'), function () {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1"]:checked'), function () {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'), function () {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-3"]:checked'), function () {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4"]:checked'), function () {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-5"]:checked'), function () {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-6"]:checked'), function () {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-7"]:checked'), function () {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    // Show the results after checking all answers 
    this.result();

  },
  // Clearing my timer and remove it from page, adding correct answwers and incorrectanswers and Unanswered questions to the user
  result: function () {
    clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html('<h2>The best way to spread Christmas Cheer is by singing loud for all to hear!</h2>').addClass('all-done')
    $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    // display all the Unanswered questions
    $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "<h3>");
  },
}