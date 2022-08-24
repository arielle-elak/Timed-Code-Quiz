// 1) *~SELECTORS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Top bar selectors
var scoreLink = document.querySelector("#view-highscores");
var topTimer = document.querySelector("#timer");
var timer;
var timeLeft = 60

// Starting screen selectors
var startScreen = document.querySelector("#start");
var startButton = document.querySelector("#start-quiz");

// Main quiz section selectors
// Selecting the empty h2 field where the question title will appear
var pageQuestion = document.body.children[2].children[0];
var quizScreen = document.querySelector("#quiz-section");
var questionTitle = document.querySelector("#question-title");
const optionsList = document.querySelector("#options-list");
var validation = document.querySelector("#validation");
var answersLength = 4;

var isWin = false;

// Game over screen selectors
var endGameScreen = document.querySelector("#end-game");
var initialsArea = document.querySelector("#initials-area");
var initialsText = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

// High score screen selectors
var highscoreScreen = document.querySelector("#highscores");
var backButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear-highscores");


// 2) *~QUESTIONS LIST~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Questions stored in nested object
// Each question object contains a question Title, options, and the answer index - referencing the location of the correct answer in the options object
// The options object contains sub objects for each possible answer
var questions = {

  question1: {
    questionTitle: "1: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: 0,
  },

  question2: {
    questionTitle: "2: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: 3,
  },

  question3: {
    questionTitle: "3: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: 3,
  },

  question4: {
    questionTitle: "4: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: 2,
  },

  question5: {
    questionTitle: "5: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: 1,
  }
};




// 3) *~FUNCTIONS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// TIMER
function timerScore() {
  // Sets timer
  timer = setInterval(function() {
    timeLeft--;
    topTimer.textContent = timeLeft;
    if (timeLeft >= 0) {
      // Tests if win condition is met
      if (isWin && timeLeft > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }

      // Tests if time has run out
      if (timeLeft === 0) {
        // Clears interval
        clearInterval(timer);
        gameOver();
      }
    }
// Set time interval to 1 second (1000 milliseconds)
  }, 1000);
}


// When the Start Quiz button is pressed
function showQuizSection() {
  // Hide start screen
  startScreen.textContent = '';
  // Show quiz screen (generateElement!!!!)
}

 /*  // Check user answer against correct answer
function checkAnswer() {

  // Get index of current question set
  var questionIndex = currQuestion.indexOf;

  // Get the options in the current options array within questions
  var currOptions = questions[0].options;

  // Location of the index that DETERMINES the correct answer (the answer property of questions)
  var correctAnswerIndex = questions[0].answer;

  // The correct answer is located at the index specified by the value in the answer property of questions)
  var answer = questions[0].options[correctAnswerIndex.value];

  console.log(correctAnswer);

  var userAnswer =

// Reward or pentalty for right or wrong answer
  if (userAnswer !== answer) {
    timeLeft -= 10;
    validation.textContent = "Sorry! Wrong answer."
  } else if (userAnswer === answer) {
    timeLeft += 10;
    validation.textContent = "Correct!"
  }
}
*/




 // When button is clicked, show the first question prompt in the list
function askQuestion() {

  // From the questionTitle key, pull the value

  // From the options object, pull the entries
  var answers = Object.entries(questions.question1.options);
  // For each entry in answers, log the key and corresponding value
  // If the answer and key match, then it's correct
  var itemNumber = 0;
  answers.forEach(([key, value]) => {
    console.log(value);
    console.log(key);
    itemNumber++;
    // Create a new list item
    var newLi = document.createElement("li");
    Object.assign(newLi, {
      className: "active-button",
      id: itemNumber,
      onclick: function () {
        console.log("Clicked " + newLi.id);
      }

    })

    newLi.textContent = value;
    optionsList.appendChild(newLi);

  });
}




// When the Start Quiz Button is pressed
function startQuiz() {

  // Get the options ul ready to have text injected

  // Hide the start screen and show the quiz screen
  showQuizSection();

  // These listeners won't be able to initiate
  // Start the timer
  timerScore();
  // Start question asking loop function
  askQuestion();
}

// Either when the timer reaches 0 or user has answered all questions
function endQuiz() {
  // Hide the timer
  timer.textContent = '';
  // Hide the view highscores link
  timer.textContent = '';
  // Show the End Game Screen (generate!!!)
}

// When the Submit button is pressed
function showHighscores() {
  // Hide the End Game Screen
  endGameScreen.textContent = '';
  // Show the Highscores Screen (generate!!!)

}




function test() {
  console.log("It worked!")
}




// 4) *~LISTENERS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// Start the Quiz Button
startButton.addEventListener("click", startQuiz);

// Log Player Input in Initials Field
initials.addEventListener("keydown", function (event) {
    var initialsText = event.key;
});

// Initials Submit Button
submitButton.addEventListener("click", logHighscore);

// Go Back Button
backButton.addEventListener("click", backStart);

// Clear Highscores Button
clearButton.addEventListener("click", clearHighscores);

userAnswer1.addEventListener("click", test);
