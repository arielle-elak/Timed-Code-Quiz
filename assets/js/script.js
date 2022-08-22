// Timed Coding Quiz
// Last Updated by Arielle Schlickman-Elak Aug 21 2022

// Variables for sections at top of page
var viewHighscores = document.querySelector("#view-highscores");
var timer = document.querySelector("#timer");

// Variables for each section to display depending upon point in game
var startSection = document.querySelector("#start");
var quizSection = document.querySelector("#quiz-section");
var endGameSection = document.querySelector("#end-game");



// Create variable objects to house the randomly selected questions, with an associated index for scrambling
var questions = [
    {
        question: "1: What does one append to code to prevent spaces from sneaking in to user input?",
        options: {
            a: ".trim()",
            b: ".clip()",
            c: ".trim[]",
            d: ".trim[]"
        },
        answer: 0
    },

    {
        question: "2: What does one append to code to prevent spaces from sneaking in to user input?",
        options: {
            a: ".trim()",
            b: ".clip()",
            c: ".trim[]",
            d: ".trim[]"
        },
        answer: 1
    },

    {
        question: "3: What does one append to code to prevent spaces from sneaking in to user input?",
        options: {
            a: ".trim()",
            b: ".clip()",
            c: ".trim[]",
            d: ".trim[]"
        },
        answer: 2
    }
];

// In order to access the correct question - the index must be applied to the first level since that's the first level array
console.log(questions[0].question);
