// Top bar selectors
var scoreLink = document.querySelector("#view-highscores");
var timer = document.querySelector("timer");

// Starting screen selectors
var startScreen = document.querySelector("#start");
var startButton = document.querySelector("#start-quiz");

// Main quiz section selectors
var quizScreen = document.querySelector("#quiz-section");
var questionTitle = document.querySelector("#question-title");
var optionsList = document.querySelector("#options-list");
var validation = document.querySelector("#validation");

// Game over screen selectors
var endGameScreen = document.querySelector("#end-game");
var initialsArea = document.querySelector("#initials-area");
var initialsText = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

// High score screen selectors
var highscoreScreen = document.querySelector("#highscores");
var backButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear-highscores");


// *~LISTENERS~*

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
