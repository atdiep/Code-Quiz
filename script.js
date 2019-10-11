// Header with 'View Highscores' and timer'
// Intro with a 'Start Quiz' button to intiate the quiz.
// Timer starts. Each question has 15 seconds to answer the question. If the timer runs out of time, it will considered the question wrong and skip to the next question.
// If the question is answered correctly, the correct count increases and stores until the end of the quiz. Alert the user right/wrong.
// After the quiz if over. Show the final score and prompt the user for their initial and submit the infomation and store it to 'Highscores'. 
// User has the option to 'Go back' to previous page or 'Clear scoreboard'.
var score = 0;
var currentQuestion = 0;
var startEl = document.querySelector("#start");
var submitEl = document.querySelector("#submit");
var questions = [
    {
        title: "What's the most effective Poke Ball in the game?",
        choices: ["Great Ball", "Ultra Ball", "Master Ball", "Timer Ball"],
        answer: "Master Ball"
    },
    {
        title: "Which of these Pokemon is NOT an Eeveelution?",
        choices: ["Vapereon", "Leafeon", "Flygon", "Sylveon"],
        answer: "Flygon"
    },
    {
        title: "What object is Hypno always holding?",
        choices: ["Twisted Spoon", "Pendulum", "Pocket Watch", "Moon Stone"],
        answer: "Pendulum"
    },
    {
        title: "What is not a category in the Pokemon contests?",
        choices: ["Beauty", "Cuteness", "Talent", "Coolness"],
        answer: "Talent"
    },
    {
        title: "The chance of finding a shiny wild Pokémon is a very low, it being 1 in ______.",
        choices: ["150", "1234", "8192", "9000"],
        answer: "8192"
    }];

startEl.addEventListener("click", function () {
    startQuiz();

    function startQuiz() {
        for (var i = 0; i < questions, length; i++) {
            var response === choices.indexOf[i]; //The answer the user chosen
            if response == questions[i].answer {
                score++;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
        }
        alert("Your final score is " + score + ".")
    };

    var timeEL = document.querySelector(".time");
    var secondsLeft = 15;

    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEL.textContent = "Time: " + secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                myQuestions(); // Function that skip to the next question and count the last question inccorect.
            }
        }, 1000);
    }

    setTime();
});

submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    //Submit initial and score to scoreboard.
});