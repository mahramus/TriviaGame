var panel = $("#quiz-area");

// Questions

var questions = [{
    question: "What?",
    answers: [],
}, {
    question: "Who?",
    answers: [],
}];

// Variable that will hold the setInterval
var timer; 

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game-counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },
};