var startButton = document.querySelector(".start-button");
var userScore = document.querySelector(".score");
var timerEl = document.querySelector(".timer");
var questionNumber = 1;

var questionTitle = document.querySelector(".question-text");
var questionOptionOne = document.querySelector("#option-button-one");
var questionOptionTwo = document.querySelector("#option-button-two");
var questionOptionThree = document.querySelector("#option-button-three");
var questionOptionFour = document.querySelector("#option-button-four");
var resultText = document.querySelector(".result");


var timer;
var timerCount;
var quizComplete = false;


//list of questions
var questionOne = {
    question: 'What is JavaScript?',
    options: ['A loosely typed programming language', 'A Java framework', 'A scroll found in coffee shops', 'A programming paradigm'],
    //answer: option 1
}

var questionTwo = {
    question: 'What is DOM an abbreviation of?',
    options: ['Domination', 'Document Owner Message', 'Document Object Model', 'Document on Machine'],
    //answer: option 3
}

var questionThree = {
    question: 'Commonly used data types DO not include...',
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    //answer: option 2
}


//start quiz when user clicks start button
function startQuiz() {
    //variable to check if quiz should continue
    var quizComplete = false;
    timerCount = 15;
    startButton.disabled = true;
    startTimer();
    showQuestionOne();

}

//timer function starts counting down from 15 seconds when user clicks start button
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) {
            if(quizComplete && timerCount > 0) {
                clearInterval(timer);
                endQuiz();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

//functions checking answer and moving onto next question
function correctAnswer() {
    resultText.textContent = "Correct!";
    userScore.textContent++
    questionNumber++
    console.log("correct answer is chosen");
    //move onto next question
    if (questionNumber == 2) {
        resetOptions();
        showQuestionTwo();
    } else if (questionNumber == 3) {
        resetOptions()
        showQuestionThree();
    } else {
        console.log("quiz complete");
        endQuiz();
        resultText.textContent = "Quiz complete!";
    }
}

function wrongAnswer() {
    resultText.textContent = "Incorrect!";
    console.log("incorrect answer is chosen");
    questionNumber++
    //subtract 5 seconds from timer
    //move onto next question
    if (questionNumber == 2) {
        resetOptions();
        showQuestionTwo();
    } else if (questionNumber == 3) {
        resetOptions()
        showQuestionThree();
    } else {
        console.log("game over");
        endQuiz();
        resultText.textContent = "Quiz complete!";
    }
}

//function to reset event listeners
function resetOptions() {
    questionOptionOne.removeEventListener("click",correctAnswer);
    questionOptionTwo.removeEventListener("click",correctAnswer);
    questionOptionThree.removeEventListener("click",correctAnswer);
    questionOptionFour.removeEventListener("click",correctAnswer);
    questionOptionOne.removeEventListener("click",wrongAnswer);
    questionOptionTwo.removeEventListener("click",wrongAnswer);
    questionOptionThree.removeEventListener("click",wrongAnswer);
    questionOptionFour.removeEventListener("click",wrongAnswer);
}

//check if quiz should end
function checkQuizStatus() {
    //if all questions answered or timer is 0, then quiz ends
    quizComplete = true;
}

//setScore function
//textContent to user score
//add to local storage

//get high score function
//show highest scores on leaderboard

//ends the quiz if user answers all questions before timer is up or if timer completes count to 0 before user answers all questions
function endQuiz() {
    quizComplete = true;
    timerEl.textContent = "0";
}

//question 1 and options becomes visible for user
function showQuestionOne() {
    questionTitle.textContent = questionOne.question;
    questionOptionOne.textContent = questionOne.options[0];
    questionOptionTwo.textContent = questionOne.options[1];
    questionOptionThree.textContent = questionOne.options[2];
    questionOptionFour.textContent = questionOne.options[3];

    //event listeners checking for user input
    questionOptionOne.addEventListener("click",correctAnswer, {once : true});
    questionOptionTwo.addEventListener("click", wrongAnswer, {once: true});
    questionOptionThree.addEventListener("click", wrongAnswer,  {once: true});
    questionOptionFour.addEventListener("click", wrongAnswer, {once: true});
    
    return;
}

//question 2 and options becomes visible for user
function showQuestionTwo() {
    questionTitle.textContent = questionTwo.question;
    questionOptionOne.textContent = questionTwo.options[0];
    questionOptionTwo.textContent = questionTwo.options[1];
    questionOptionThree.textContent = questionTwo.options[2];
    questionOptionFour.textContent = questionTwo.options[3];

    //event listeners checking for user input
    questionOptionOne.addEventListener("click",wrongAnswer, {once : true});
    questionOptionTwo.addEventListener("click", wrongAnswer, {once : true});
    questionOptionThree.addEventListener("click", correctAnswer, {once : true});
    questionOptionFour.addEventListener("click", wrongAnswer, {once : true});

    return;
}

//question 3 and options becomes visible for user
function showQuestionThree() {
    questionTitle.textContent = questionThree.question;
    questionOptionOne.textContent = questionThree.options[0];
    questionOptionTwo.textContent = questionThree.options[1];
    questionOptionThree.textContent = questionThree.options[2];
    questionOptionFour.textContent = questionThree.options[3];

    //event listeners checking for user input
    questionOptionOne.addEventListener("click",wrongAnswer, {once : true});
    questionOptionTwo.addEventListener("click", correctAnswer, {once : true});
    questionOptionThree.addEventListener("click", wrongAnswer, {once : true});
    questionOptionFour.addEventListener("click", wrongAnswer, {once : true});

    return;
}

//event listener to start quiz when user presses start button
startButton.addEventListener("click", startQuiz);