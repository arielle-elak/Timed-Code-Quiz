// Timed Coding Quiz
// Last Updated by Arielle Schlickman-Elak Aug 21 2022

// Variables for sections at top of page
var viewHighscores = document.querySelector("#view-highscores");
var timer = document.querySelector("#timer");

// Variables for each section to display depending upon point in game
var startSection = document.querySelector("#start");
var quizSection = document.querySelector("#quiz-section");
var endGameSection = document.querySelector("#end-game");


// MANUAL TEST OF QUESTIONS AND OPTIONS PUSH TO HTML
var questionInput = "Test question.";
var option1Input = "Test option1";
var option2Input = "Test option2";
var option3Input = "Test option3";
var option4Input = "Test option4";
var answerInput = "Test answer";

// Create a variable to house the randomly selected questions, with an associated index for scrambling
var questions = [
    {
        index: '0',
        question: "What does one append to code to prevent spaces from sneaking in to user input?",
        options: {
            a: ".trim()",
            b: ".clip()",
            c: ".trim[]",
            d: ".clip[]"
        },
        answer: 'a'
    },

    {
        index: '1',
        question: "Question 2",
        options: {
            a: '.trim()',
            b: '.clip()',
            c: '.trim[]',
            d: '.clip[]'
        },
        answer: 'b'
    },

    {
        index: '2',
        question: "Question 3",
        options: {
            a: '.trim()',
            b: '.clip()',
            c: '.trim[]',
            d: '.clip[]'
        },
        answer: 'c'
    },

    {
        index: '3',
        question: "Question 4",
        options: {
            a: '.trim()',
            b: '.clip()',
            c: '.trim[]',
            d: '.clip[]'
        },
        answer: 'd'
    },

    {
        index: '4',
        question: "Question 5",
        options: {
            a: '.trim()',
            b: '.clip()',
            c: '.trim[]',
            d: '.clip[]'
        },
        answer: 'a'
    }
];




// Select the options-list id in HTML for where the options will populate

var test = document.querySelector("#test");

function createQuestion(question) {
    let h2 = document.createElement('h2');
    h2.textContent = question;
    return h2;
}

// Variable for where question will appear on page
var questionTitle = document.querySelector("#question-title");
questionTitle.appendChild(createQuestion('Question 1'));

function createOption(option) {
    let li = document.createElement('li');
    li.textContent = option;
    return li;
}

const optionsList = document.querySelector('#options-list');
optionsList.appendChild(createOption('Option 1'));
optionsList.appendChild(createOption('Option 2'));
optionsList.appendChild(createOption('Option 3'));
optionsList.appendChild(createOption('Option 4'));


// Add listener to check function
test.addEventListener("click", createQuestion, createOption);
