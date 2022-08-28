
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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
var optionsList = document.querySelector("#options-list");
var userAnswer = false;
var userClicked = document.querySelector("#active-button");
var newLi = '';
var isWin = false;
var validationMessage = document.querySelector("#validation-message");
// Selectors for each option and equivalent index for option in the array
var option0 = document.getElementById("0");
var option1 = document.getElementById("1");
var option2 = document.getElementById("2");
var option3 = document.getElementById("3");

// Game over screen selectors
var endGameScreen = document.querySelector("#end-game");
var endTitleArea = document.querySelector("#title-area")
var initialsArea = document.querySelector("#initials-area");
var initialsInput = document.getElementById("initials");
var initialsText = document.querySelector("#initials");




// High score screen selectors
var highscoreScreen = document.querySelector("#highscores-section");
var highscoresTitle = document.querySelector("#highscores-title");
var buttonSection = document.querySelector("#button-section");
var highScoreList = document.querySelector("#highscores");
var highestScores = [];

// Local Storage Variables
// Object to store all of the highscores in local data
var highScores = {};
// Array to sort highscores from most to least
var scoreSort = [];


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// 2) *~QUESTIONS LIST~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Questions have a title, list of options, and the index where the correct answer is stored.
// Those three variables are saved into a larger index for each question group
// Then those question groups are saved into a master questionsArr array

// Each item in questionsArr [question title, [options], index of right answer in options array]



var questionsArr = [
  ["1: Question.", ["1option1", "1option2", "1option3", "1option4"], 2],
  ["2: Question.", ["2option1", "2option2", "2option3", "2option4"], 1],
  ["3: Question.", ["3option1", "3option2", "3option3", "3option4"], 0],
  ["4: Question.", ["4option1", "4option2", "4option3", "4option4"], 3],
  ["5: Question.", ["5option1", "5option2", "5option3", "5option4"], 1],
  ["6: Question.", ["6option1", "6option2", "6option3", "6option4"], 2],
];

var questionsLength = questionsArr.length;

// Keeps track of which question the user is currently on
var questionsCounter = 0;




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// 3) *~FUNCTIONS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// When the submit button is pressed
var submitScore = function () {
  var initials = initialsText.value;
  var score = timeLeft;


  var highScore = {
    initials: initials,
    score: score
  };

  localStorage.setItem("lastScore", JSON.stringify(highScore));
  showHighScoreList();

};

// When the quiz ends (either by time out or answering all questions)
function gameOver() {

  // Clear the quiz screen to get ready for the intials entry page
  quizScreen.textContent = '';

  initialsArea.setAttribute("style", "display: flex");

  // Show the "All Done!" h2 title
  var enterScoreTitle = endGameScreen.children[0].children[0];
  enterScoreTitle.textContent = "All done!"
  endTitleArea.appendChild(enterScoreTitle);

  // Take the remaining time and show your final score
  var finalScore = document.createElement('p');
  finalScore.textContent = "Your final score is: " + timeLeft;
  endTitleArea.appendChild(finalScore);

}; // END Submit on click



function showHighScoreList() {
  // Hide the home screen if pressed from home
  startScreen.textContent = '';
  // Hide the quiz screen if pressed from screen
  quizScreen.textContent = '';
  // Hide the link so it can't be accidentally pressed more
  scoreLink.setAttribute("style", "display: none");
  initialsArea.setAttribute("style", "display: none");
  endTitleArea.textContent = '';
  highscoresTitle.textContent = "Highscores";


  // Go back button will reload the page keeping the high scores in tact
 function goBack() {
    location.reload();
  };

  // Clear button will remove everything in local storage and clear the highscore list
 function clearScores() {
    localStorage.clear();
    highScoreList.textContent = '';
  };

  let backButton = document.createElement("button");
  backButton.textContent = "Go Back";
  backButton.classList = 'active-button';
  // Add in an identifier for the on-click events
  backButton.id = "score-buttons-0";
  buttonSection.appendChild(backButton);

  let clearButton = document.createElement("button");
  clearButton.textContent = "Clear Highscores";
  clearButton.classList = 'active-button';
  // Add in an identifier for the on-click events
  clearButton.id = "score-buttons-1";
  buttonSection.appendChild(clearButton);

}; // END showHighScore list function



// TIMER
function timerScore() {
  // Sets timer
  timer = setInterval(function() {
    timeLeft--;
    topTimer.textContent = "Time Left: " + timeLeft;
    if (timeLeft > 0) {
      // Tests if win condition is met
      if (questionsCounter === 6 && timeLeft > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        gameOver();
        console.log("Answered all questions")
      }
    }
    // Tests if time has run out
    if (timeLeft <= 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
      console.log("Ran out of time")
    }
  }, 1000);
}

// When the Start Quiz button is pressed
function showQuizSection() {
  // Hide start screen
  startScreen.textContent = '';
  // Show quiz screen
  quizScreen.setAttribute("style", "display: block");
}

// Function to cycle through all questions
// CURRENT WORKING POINT 8/26/2022
function askQuestions() {
  console.log(timeLeft);

// Only ask questions if the counter is less than 5
  if (questionsCounter < 6 && timeLeft > 0) {

// Clear the previous entries
  questionTitle.textContent = '';
  option0.textContent = '';
  option1.textContent = '';
  option2.textContent = '';
  option3.textContent = '';

  // q value will equal the values for the current question
  let q = [questionsCounter];

  // Selects the values for the current item
  var currentTitle = questionsArr[q][0]; // String
  var currentOptions = questionsArr[q][1]; // Object
  var answerIndex = questionsArr[q][2]; // Number

  questionTitle.textContent = currentTitle;
  option0.textContent = currentOptions[0];
  option1.textContent = currentOptions[1];
  option2.textContent = currentOptions[2];
  option3.textContent = currentOptions[3];

  console.log ("Still asking quesitons (questions counter not reached 6)")
  };

}; // END askQuestions function

// checkAnswer runs when HTML is clicked - sends the userAnswer value to the function for checking
function checkAnswer(userAnswer) {
  // q value will equal the values for the current question
  let q = [questionsCounter];

  // Selects the values for the current item
  var currentTitle = questionsArr[q][0]; // String
  var currentOptions = questionsArr[q][1]; // Object
  var answerIndex = questionsArr[q][2]; // Number

  // Verify they are both numbers and are going to match.
  console.log(typeof userAnswer + " " + userAnswer + " " + typeof answerIndex + " " + answerIndex);

  if (userAnswer === answerIndex) {
    // Assign the correct message to the class to show it as green in validation section
    console.log("Correct!");
    timeLeft += 10;
    Object.assign(validationMessage, {
      className: "correct-message",
    });
    validationMessage.textContent = "Correct!";
    questionsCounter += 1;

  } else {
    // Assign the incorrect message to the class to show it as red in validation section
    console.log("Sorry, that's incorrect.");
    timeLeft -= 10;
    Object.assign(validationMessage, {
      className: "incorrect-message",
    });
    validationMessage.textContent = "Sorry, that's incorrect.";
    questionsCounter += 1;
  }; // END if-else

  askQuestions();
  // Slight delay before the previous validation message goes away

  setTimeout(() => {
    validationMessage.textContent = '';
  }, "1200")

} // END checkAnswers function



// When the Start Quiz Button is pressed
function startQuiz() {

  // Hide the start screen and show the quiz screen
  showQuizSection();
  // Start the timer
  timerScore();
  // Start question asking loop function
  askQuestions();
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// 4) *~LISTENERS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// Start the Quiz Button
startButton.addEventListener("click", startQuiz);
