// Timed Coding Quiz
// Last Updated by Arielle Schlickman-Elak Aug 21 2022

// Variables for all components of HTML page
var viewHighscores = document.querySelector("#view-highscores");
var timer = document.querySelector("#timer");

var validationSection = document.querySelector("#validation");
var endGameSection = document.querySelector("#end-game");
var initialsArea = document.querySelector("#initials-area");
var initials = document.querySelector("initials");
var submitButton = document.querySelector("#submit");
var goBackButton = document.querySelector("#go-back");
var clearScoreButton = document.querySelector("#clear-highscores");

// Variable for where question will appear on page
var questionTitle = document.querySelector("#question-title");
// Set up variables with associations to the four different option spaces on the page
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


var questionInput = "Test question.";
var option1Input = "Test option1";
var option2Input = "Test option2";
var option3Input = "Test option3";
var option4Input = "Test option4";

var answerInput = "Test answer";

// Create a variable to house the randomly selected question
var quizQuestion = {
    question: questionInput.value,
    options: [option1Input, option2Input, option3Input, option4Input],
    answer: answerInput
};

// Select the options-list id in HTML for where the options will populate

var test = document.querySelector("#test");

function createOption(option) {
    let li = document.createElement('li');
    li.textContent = option;
    return li;
}
// Get the options-list UL on the page
const optionsList = document.querySelector('#options-list');

// Add a new option
optionsList.appendChild(createOption('Option 1'));
optionsList.appendChild(createOption('Option 2'));
optionsList.appendChild(createOption('Option 3'));
optionsList.appendChild(createOption('Option 4'));


// Add listener to check function
test.addEventListener("click", createOption);
