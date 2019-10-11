var score = 0;
// Track the index where we are in the questions.
var currentQuestion = 0;

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


$(document).ready(function () {

    $(".start a").on("click", function (event) {
        event.preventDefault();
        $(".start").hide();
        $(".quiz").show();
        showQuestion();
    });

    $(".quiz ul").on("click", "li", function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    });

    $(".quiz a").click(function (event) {
        event.preventDefault();
        if ($("li.selected").length) {
            var guess = parseInt($("li.selected").attr("id"));
            checkAnswer(guess);
        } else {
            alert("Please select an answer.");
        }
    });

    $(".final a").click(function (event) {
        event.preventDefault();
        restartQuiz();
    });
})

function showQuestion() {
    var question = questions[currentQuestion];
    $(".quiz h2").text(question.title);
    $(".quiz ul").html("");
    for (var i = 0; i < question.choices.length; i++) {
        $(".quiz ul").append("<li id = '" + i + "'> " + question.choices[i])
    };
}

function checkAnswer() {
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

function showSummary() {
    $(".quiz").hide();
    $(".summary").show();
    $(".summary p").text("Congrats you scored " + score + " out of " + questions.length + " correct!")
}

function scoreBoard() {

}

function restartQuiz() {
    $(".summary").hide();
    $(".quiz").show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
}


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