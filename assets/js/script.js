// Timed Coding Quiz
// Last Updated by Arielle Schlickman-Elak Aug 21 2022

// Variables for sections at top of page
var viewHighscores = document.querySelector("#view-highscores");
var timer = document.querySelector("#timer");

// Variables for each section to display depending upon point in game
var startSection = document.querySelector("#start");
var quizSection = document.querySelector("#quiz-section");
var endGameSection = document.querySelector("#end-game");
var optionsList = document.querySelector("#options-list");

// Variables for hiding and showing sections
var showQuizSection = document.querySelector("#start-quiz");
var showEndGame = document.querySelector("#end-game");
var showHighscores = document.querySelector("#highscores");

// Create variable objects to house the randomly selected questions, with an associated index for scrambling
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
        answer: 1
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

var startButton = document.querySelector("#start-quiz");

// In order to access the correct question - the index must be applied to the first level since that's the first level array
// Set up a function that will for each possible item in the questions array, project in turn

function askQuestion() {
// When button is clicked, show the first question prompt in the list
    var currQuestion = questions[0].question;
    var postQuestion = document.body.children[2].appendChild(document.createElement('h2'));
    postQuestion.textContent = currQuestion;

    var currOptions = questions[0].options;

    var optionsLength = currOptions.length;
    var optionItem;
// Then for each option in the currOptions array, post it as a new list item
    for (i = 0; i < optionsLength; i++) {
        optionItem = document.createElement('li');
        optionItem.className = 'option';
        optionItem.innerHTML = currOptions[i];
        document.getElementById('options-list').appendChild(optionItem);
    }
}


startButton.addEventListener("click", askQuestion);


var postQuestion = document.body.children[2].appendChild(document.createElement('h2'));
