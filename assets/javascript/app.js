var panel = $("#quiz-area");
var countStartNumber = 30;

// Questions

var questions = [{
    question: "Who was the original drummer for the Beatles?",
    answers: ["Pete Best", "Meat Vest", "Skeet Chest", "Best Lest"],
    correctAnswer: "Pete Best",
    image: "assets/images/ringo1.gif"
}, {
    question: "Who?",
    answers: [],
}];

// Variable that will hold the setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartTimer,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this - counter === 0) {
            console.log("TIME UP");
            this.timeUp();
        }
    },

    loadQuestion: function () {

        timer = setInterval(this.countdown.bind(this), 1000);

        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
            + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
          }
        },

    nextQuestion: function () {
        this.counter - window.countStartTimer;
        this.$("#counter-number").text(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },

    timeUp: function () {

        clearInterval(window.timer);

        $("#counter-number").text(this.counter);

        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000);
        }
    },

    results: function () {

        clearInterval(window.timer);

        panel.html("<h2>All done, here's how you did!</h2>");

        $("#counter-number").text(this.counter);

        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        panel.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function(e) {
        clearInterval(window.timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function() {

        this.incorrect++;

        clearInterval(window.timer);

        panel.html("<h2>Nope!</h2>");
        panel.append("<h3>The Correct Answer was " + questions[this.currentQuestion].correctAnswer + "</h3>");
        panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === question.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },

    answeredCorrectly: function() {

        clearInterval(window.timer);

        this.correct++;

        panel.html("<h2>Correct!</h2>");
        panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results.bind(this), 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion.bind(this), 3 * 1000);
        }
    },

    reset: function() {
        this.currentQuestion = 0;
        this.counter = countStartTimer;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
       

};


// CLICK EVENTS

$(document).on("click", "#startButton", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e){
    game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion.bind(game)();
});

