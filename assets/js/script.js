var timerEl = document.querySelector(".timer")
var questionTitle = document.querySelector(".question-text")
var questionOptionOne = document.querySelector("#option-button-one")
var questionOptionTwo = document.querySelector("#option-button-two")
var questionOptionThree = document.querySelector("#option-button-three")
var questionOptionFour = document.querySelector("#option-button-four")


var timer;
var timerCount;

//list of questions
var questionOne = {
    question: 'What is JavaScript?',
    options: ['A loosely typed programming language', 'A Java framework', 'A scroll found in coffee shops', 'A programming paradigm'],
    answer: 0
}

var questionTwo = {
    question: 'What is...?',
    options: ['1', '2', '3', '4'],
    answer: 2
}

var questionThree = {
    question: 'What is...?',
    options: ['1', '2', '3', '4'],
    answer: 1
}


//start quiz when user clicks start button
function startQuiz() {
    showQuestion();
}

//timer function starts counting down from 60 seconds when user clicks start button
// function startTimer() {
//     timer = setInterval(function() {
//         timerCount--;
//         timerEl.textContent = timerCount;
//         if (timerCount >= 0) {
//             if questionBank
//         }
//     })
// }

//questions are visible for user when this function is called
function showQuestion() {
    questionTitle.textContent = questionOne.question;
    questionOptionOne.textContent = questionOne.options[0];
    questionOptionTwo.textContent = questionOne.options[1];
    questionOptionThree.textContent = questionOne.options[2];
    questionOptionFour.textContent = questionOne.options[3];
}


//ends the quiz if user answers all questions before timer is up or if timer completes count to 0 before user answers all questions
// function endQuiz() {

// }

//event listener to start quiz when user presses start button