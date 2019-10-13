// Track the number of correct answers
var score = 0;
// Track the index where we are in the questions.
var currentQuestion = 0;
// List of quesions in arrays

var timeEL = document.querySelector(".time");

var questions = [
    {
        title: "What's the most effective Poke Ball in the game?",
        choices: ["Great Ball", "Ultra Ball", "Master Ball", "Timer Ball"],
        answer: 2
    },
    {
        title: "Which of these Pokemon is NOT an Eeveelution?",
        choices: ["Vapereon", "Leafeon", "Flygon", "Sylveon"],
        answer: 2
    },
    {
        title: "What object is Hypno always holding?",
        choices: ["Twisted Spoon", "Pendulum", "Pocket Watch", "Moon Stone"],
        answer: 1
    },
    {
        title: "What is not a category in the Pokemon contests?",
        choices: ["Beauty", "Cuteness", "Talent", "Coolness"],
        answer: 2
    },
    {
        title: "The chance of finding a shiny wild Pokémon is a very low, it being 1 in ______.",
        choices: ["150", "1234", "8192", "9000"],
        answer: 2
    }];

// This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function () {

    $(".quiz").hide();
    $(".summary").hide();
    $(".final").hide();

    // Create an event listener on "Start Quiz". Hide the starting screen to show the quiz.
    $(".start button").on("click", function (event) {
        event.preventDefault();
        $(".start").hide();
        $(".quiz").show();
        showQuestion();
    });
    // Create an event listener on li when an option is being selected by user.
    $(".quiz ul").on("click", "li", function (event) {
        event.preventDefault();
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        if ($("li.selected").length) {
            var guess = parseInt($("li.selected").attr("id"));
            checkAnswer(guess);
        }
    });
    // Create an event listener on "Submit" to store the user initial and score and submit to scoreboard.
    $("#submit").on("click", function (event) {
        event.preventDefault();

        var initial = document.querySelector("#initial").value;

        if (initial === "") {
            displayMessage("error", "Initial cannot be blank");
        } else {
            localStorage.setItem("initial", initial);
        }
        $(".highScore").append("<li>" + initial + " - " + score + "</li>");
        showScore();
    })
    // Create an event listener on "Restart Quiz" to restart the quiz.
    $("#restart").on("click", function (event) {
        event.preventDefault();
        restartQuiz();
    });
    // Create an event listener on "Clear Scoreboard" to clear all scores.
    $("#clear").on("click", function (event) {
        $("ul").html("");
    });

    $("header a").on("click", function () {
        showScore();
    })

});


// Create a function to show up one at a time.
function showQuestion() {
    var secondsLeft = 15;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEL.textContent = "TIme: " + secondsLeft;
        if (secondsLeft === 0) {
            stopInterval();
        }
    }, 1000);

    var stopInterval = function () {
        clearInterval(timerInterval);
    }
    var question = questions[currentQuestion];
    $(".quiz h3").text(question.title);
    $(".quiz ul").html("");
    for (var i = 0; i < question.choices.length; i++) {
        $(".quiz ul").append("<li id = '" + i + "'> " + question.choices[i] + "</li>");
    };
}

// Create a function that check the user answers. If correct, increases score. If there is no more quesion, immediately go to summary.
function checkAnswer(guess) {
    var question = questions[currentQuestion];
    if (question.answer === guess) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    };
}

// Create a function that show the overall summary.
function showSummary() {
    $(".quiz").hide();
    $(".summary").show();
    $(".summary p").text("Congrats you scored " + score + " out of " + questions.length + " correct!")
}

function showScore() {
    $(".summary").hide();
    $(".quiz").hide();
    $(".final").show();
}
// Create a function that restart the quiz when requested by user.
function restartQuiz() {
    $(".summary").hide();
    $(".final").hide();
    $(".quiz").show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
}

// //Create a function that allows 15 seconds per question. If timer runs out, question counts as incorrect and skip to the next question.

