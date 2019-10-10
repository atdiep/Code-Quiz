var questions = [
    {
        title: "Which color is not considered to be one of the primary colors of light?",
        choices: ["Red", "Yellow", "Green", "Blue"],
        answer: "Yellow"
    },
    {
        title: "Many scientists think that some of the dinosaurs did not go extinct, but rather evolved into what kind of creature?",
        choices: ["Amphibians", "Reptiles", "Birds", "Mammals"],
        answer: "Birds"
    },
    {
        title: "Which of the following is not a favorable adjective when discussing wine?",
        choices: ["Fat", "Flinty", "Leggy", "Vigorous"],
        answer: "Fat"
    },
    {
        title: "What is the traditional gift for a 40th wedding anniversary?",
        choices: ["Emerald", "Diamond", "Ruby", "Sapphire"],
        answer: "Ruby"
    },
    {
        title: "The Declaration of Independence was written by whom?",
        choices: ["Benjamin Franklin", "Thomas Jefferson", "James Madison", "George Washington"],
        answer: "Thomas Jefferson"
    },
];

// Header with 'View Highscores' and timer'
// Intro with a 'Start Quiz' button to intiate the quiz.
// Timer starts. Each question has 15 seconds to answer the question. If the timer runs out of time, it will considered the question wrong and skip to the next question.
// If the question is answered correctly, the correct count increases and stores until the end of the quiz. Alert the user right/wrong.
// After the quiz if over. Show the final score and prompt the user for their initial and submit the infomation and store it to 'Highscores'. 
// User has the option to 'Go back' to previous page or 'Clear scoreboard'.

var timeEL = document.querySelector(".time");
var secondsLeft = 15;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = "Time: " + secondsLeft;
    })
}