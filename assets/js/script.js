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
var userAnswer = false;
var userClicked = document.querySelector("#active-button");

var isWin = false;

// Game over screen selectors
var endGameScreen = document.querySelector("#end-game");
var endTitleArea = document.querySelector("#title-area")
var initialsArea = document.querySelector("#initials-area");



// High score screen selectors
var highscoreScreen = document.querySelector("#highscores-section");
var highscoresTitle = document.querySelector("#highscores-title");
var backButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear-highscores");
var buttonSection = document.querySelector("#button-section");

// Local Storage Variables
// Object to store all of the highscores in local data
var highScores = {};
// Variable for the highest score to compare against
var highestScore = 0;
// Array to sort highscores from most to least
var scoreSort = [];


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
    answerIndex: "0",
  },

  question2: {
    questionTitle: "2: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: "3",
  },

  question3: {
    questionTitle: "3: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: "3",
  },

  question4: {
    questionTitle: "4: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: "2",
  },

  question5: {
    questionTitle: "5: What does one append to code to prevent spaces from sneaking in to user input?",
    options: {
      0: "answer1",
      1: "answer2",
      2: "answer3",
      3: "answer4",
    },
    answerIndex: "1",
  }
};




// 3) *~FUNCTIONS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



function gameOver() {
  // Clear the quiz screen to get ready for the intials entry page
  quizScreen.textContent = '';

  initialsArea.setAttribute("id", "initials-reveal");

  var enterScoreTitle = endGameScreen.children[0].children[0];
  enterScoreTitle.textContent = "All done!"
  endTitleArea.appendChild(enterScoreTitle);


  var finalScore = document.createElement('p');
  finalScore.textContent = "Your final score is: " + timeLeft;
  endTitleArea.appendChild(finalScore);

  var finalScore = document.createElement('p');
  finalScore.textContent = "Please enter your initials:";
  initialsArea.appendChild(finalScore);


  var input = document.createElement("input");
  input.type = "text";
  input.id = "initials";
  input.className = ""; // set the CSS class
  initialsArea.appendChild(input);

  var input = document.createElement("input");
  input.type = "button";
  input.value = "Submit";
  input.id = "submit";
  input.className = "submit"; // set the CSS class
  initialsArea.appendChild(input);

  // When the submit button is pressed, a bunch of things happen:
  var submitButton = document.querySelector("#submit");
  submitButton.onclick = function () {
    // Enters your most recent score and initials into local storage
    var initialsText = document.querySelector("#initials");

    // If the currentScore is higher than the highestScore
    console.log(timeLeft + " " + highestScore);
    // They're both numbers so they can mathematically compare
    console.log(typeof timeLeft + " " + typeof highestScore);

    // Sake of testing
    timeLeft = 1;

    if ((timeLeft > highestScore) || highScores.index < 5) {
      // Log the score as an object with initials: score
      var key = initialsText.value.trim();
      console.log(key);

      var object = {};
      console.log(object);

      object[key] = timeLeft;

      // Add the current score as an entry into the highscores object
      highScores = { ...object };
      console.log(object);
      console.log(highScores);

      // And store that object to local storage
      localStorage.setItem("highScores", JSON.stringify(highScores));
    }




    // Switch to the highscores screen
    endGameScreen.textContent = '';
    highscoresTitle.textContent = "Highscores";


    // Array of two buttons to create
    var buttons = ["Go Back", "Clear Highscores"];

    // Create two buttons in the buttonSection
    for (i = 0; i < 2; i++) {
      let button = document.createElement("button");
      button.innerHTML = buttons[i];
      button.classList = 'active-button';
      button.id = "score-buttons";
      buttonSection.appendChild(button);
    }

  //

  }
};



// TIMER
function timerScore() {
  // Sets timer
  timer = setInterval(function() {
    timeLeft--;
    topTimer.textContent = "Time Left: " + timeLeft;
    if (timeLeft >= 0) {
      // Tests if win condition is met
      if (isWin && timeLeft > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        gameOver();
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


 // When button is clicked, show the first question prompt in the list
function askFirstQuestion() {
  // From the questionTitle key, pull the value
  var currentQuestion = questions.question1.questionTitle;
  questionTitle.textContent = currentQuestion;

  // From the options object, pull the entries
  var answers = Object.entries(questions.question1.options);
  // We're going to increase the item number until it reaches 3, to signify the index of the answer.
  var itemNumber = 0;
  // For each of the found answers inside of the given question object, we can find the value and key for each
  answers.forEach(([key, value]) => {
    console.log(value);
    console.log(key);

    // Create a new list item
    var newLi = document.createElement("li");
    Object.assign(newLi, {
      // Assign class, id, and click listener/function
      className: "active-button",
      id: itemNumber,
      onclick: function checkAnswer() {
        // When this item is clicked, it's referencing its uniquely generated id
        console.log("Clicked " + newLi.id);
        userAnswer = newLi.id;
        // realAnswer obtains the value stored in answerIndex, with references the index of the correct item
        var realAnswer = questions.question1.answerIndex;
        // Verify they are both strings and are going to match.
        console.log(typeof userAnswer + " " + userAnswer + " " + typeof realAnswer + " " + realAnswer);
        if (userAnswer === realAnswer) {
          // Assign the correct message to the class to show it as green
          console.log("Correct!");
          timeLeft += 10;
          var newP = document.createElement("p");
          Object.assign(newP, {
            className: "correct-message",
          })
          newP.textContent = "Correct!";
          validation.appendChild(newP);


        } else {
          // Assign the incorrect message to the class to show it as red
          console.log("Sorry, that's incorrect.");
          timeLeft -= 10;
          var newP = document.createElement("p");
          Object.assign(newP, {
            className: "incorrect-message",
          })
          newP.textContent = "Sorry, that's incorrect.";
          validation.appendChild(newP);

        };
      }
    })
    // Since we want the id to start at 0 to match the index, only increase the item number after it prints
    itemNumber++;
    // Print the content of the value as the newLi text content
    newLi.textContent = value;
    // Finally, append this list item as a child of the ul (optionsList)
    optionsList.appendChild(newLi);

  });

}



// When the Start Quiz Button is pressed
function startQuiz() {

  // Hide the start screen and show the quiz screen
  showQuizSection();
  // Start the timer
  timerScore();
  // Start question asking loop function
  askFirstQuestion();
}

// Either when the timer reaches 0 or user has answered all questions
function endQuiz() {
  // Hide the timer
  timer.textContent = '';
  // Hide the view highscores link
  timer.textContent = '';
  // Hide the quiz screen
  quizScreen.textContent = '';
  // Show the End Game Screen (generate!!!)
}




function test() {
  console.log("It worked!")
}




// 4) *~LISTENERS~*
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// Start the Quiz Button
startButton.addEventListener("click", startQuiz);
