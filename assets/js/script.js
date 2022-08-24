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
var quizScreen = document.querySelector("#quiz-section");
var questionTitle = document.querySelector("#question-title");
var optionsList = document.querySelector("#options-list");
var validation = document.querySelector("#validation");
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

// Question title stored in question value
// Possible answers stored in options array
// Answer index of options array stored in answer
var questions = [
  {
      question: "1: What does one append to code to prevent spaces from sneaking in to user input?",
      options: [
          ".trim()",
          ".clip()",
          ".trim[]",
          ".trim[]"
      ],
      answer: 0
  },

  {
      question: "2: What does one append to code to prevent spaces from sneaking in to user input?",
      options: [
          ".trim()",
          ".clip()",
          ".trim[]",
          ".trim[]"
      ],
      answer: 3
  },

  {
    question: "2: What does one append to code to prevent spaces from sneaking in to user input?",
    options: [
        ".trim()",
        ".clip()",
        ".trim[]",
        ".trim[]"
    ],
    answer: 1
  },

  {
    question: "2: What does one append to code to prevent spaces from sneaking in to user input?",
    options: [
        ".trim()",
        ".clip()",
        ".trim[]",
        ".trim[]"
    ],
    answer: 2
  },

  {
      question: "3: What does one append to code to prevent spaces from sneaking in to user input?",
      options: [
          ".trim()",
          ".clip()",
          ".trim[]",
          ".trim[]"
      ],
      answer: 2
  }
];



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
  startScreen.setAttribute("style", "display: none");
  // Show quiz screen
  quizScreen.setAttribute("style", "display: block");
}

function checkAnswer() {
  // Check user answer against correct answer
  if (userAnswer !== answer) {
    timeLeft -= 10;
    validation.textContent = "Sorry! Wrong answer."
  } else if (userAnswer === answer) {
    timeLeft += 10;
    validation.textContent = "Correct!"
  }
}


 // When button is clicked, show the first question prompt in the list
function askQuestion() {

  // DOM selects the question-title h2
  var pageQuestion = document.body.children[2].children[0];
  var currQuestion = questions[0].question;

  // Sets the text content of the h2 tag to equal the text of the current quiz question in the questions object
  pageQuestion.textContent = currQuestion;

  // DOM selects the options-list ul
  var answerUl = document.body.children[2].children[1];

  // Text content of the answers will be drawn from the options array within the questions object
  var currAnswers = questions[0].options;

  // Length of the list of answers to equal the length of options array
  var optionsLength = currAnswers.length;

  var optionItem;
  // Then for each option in the currOptions array, post it as a new list item
    for (i = 0; i < optionsLength; i++) {
      optionItem = document.createElement('li');
      optionItem.classList.add('option');
      optionItem.textContent = currAnswers[i];
      optionsList.appendChild(optionItem);
      }
  }

// When the Start Quiz Button is pressed
function startQuiz() {
  // Hide the start screen and show the quiz screen
  showQuizSection();
  // Start the timer
  timerScore();
  // Start question asking loop function
  askQuestion();
}

// Either when the timer reaches 0 or user has answered all questions
function endQuiz() {
  // Hide the timer
  timer.setAttribute("style", "display: none");
  // Hide the view highscores link
  scoreLink.setAttribute("style", "display: none");
  // Show the End Game Screen
  endGameScreen.setAttribute("style", "display: block");
}

// When the Submit button is pressed
function showHighscores() {
  // Hide the End Game Screen
  endGameScreen.setAttribute("style", "display: block");
  // Show the Highscores Screen
  highscoreScreen.setAttribute("style", "display: block");
}









// 4) *~LISTENERS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// Start the Quiz Button
startButton.addEventListener("click", startQuiz);

// Click Possible Answer Button
optionsList.addEventListener("click", checkAnswer);

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
