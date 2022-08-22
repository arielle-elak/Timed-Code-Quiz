// Timed Coding Quiz
// Last Updated by Arielle Schlickman-Elak Aug 21 2022

// Variables for all components of HTML page
var viewHighscores = document.querySelector("#viewHighscores");
var timer = document.querySelector("#timer");
var questionTitle = document.querySelector("#questionTitle");
var optionsList = document.querySelector("#optionsList");
var validation = document.querySelector("#validation");
var endGame = document.querySelector("#endGame");
var initialsArea = document.querySelector("#initialsArea");


// Set up variables with associations to the four different option spaces on the page
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


// Set up quiz questions with an equivalent index that can be shuffled (so that no two tests will be the same)
// With each question and answer set up as a JSON object with an attribute boolean of true/false
const quizQuestions = {

}
