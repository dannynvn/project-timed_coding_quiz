var startButton = document.querySelector(".start-button");
var userScore = document.querySelector(".score");
var timerEl = document.querySelector(".timer");

var questionTitle = document.querySelector(".question-text");
var questionOptionOne = document.querySelector("#option-button-one");
var questionOptionTwo = document.querySelector("#option-button-two");
var questionOptionThree = document.querySelector("#option-button-three");
var questionOptionFour = document.querySelector("#option-button-four");
var resultText = document.querySelector(".result");


var timer;
var timerCount;

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
    question: 'What is...?',
    options: ['1', '2', '3', '4'],
    //answer: option 2
}




//start quiz when user clicks start button
function startQuiz() {
    //variable to check if quiz should continue
    var quizComplete = false
}


//show first question


//show second question


//show third question


//function to check if answer is correct
//add point to user score


//function to check if answer is incorrect
//subtract time 


//check if quiz should end
function checkQuizStatus() {
    //if all questions answered or timer is 0, then quiz ends
    quizComplete = true
}

//setScore function
//textContent to user score
//add to local storage

//get high score function
//show highest scores on leaderboard




    // console.log("starting quiz");
    // userScore.textContent = 0;
    // var questionNumber = 1;



    // showQuestionOne();

    // function correctAnswer() {
    //     resultText.textContent = "Correct!";
    //     userScore.textContent++
    //     questionNumber++
    //     console.log("correct answer is chosen");
    //     if (questionNumber == 2) {
    //         questionOptionOne.removeEventListener("click",correctAnswer);
    //         questionOptionTwo.removeEventListener("click",correctAnswer);
    //         // questionOptionThree.removeEventListener("click",correctAnswer);
    //         // questionOptionFour.removeEventListener("click",correctAnswer);
    //         showQuestionTwo();
    //     } else if (questionNumber == 3) {
    //         questionOptionOne.removeEventListener("click",correctAnswer);
    //         // questionOptionTwo.removeEventListener("click",correctAnswer);
    //         questionOptionThree.removeEventListener("click",correctAnswer);
    //         // questionOptionFour.removeEventListener("click",correctAnswer);
    //         showQuestionThree();
    //     } else {
    //         console.log("game over");
    //     }
    //     //move onto next question
    // }
    
    // function wrongAnswer() {
    //     resultText.textContent = "Incorrect!";
    //     console.log("incorrect answer is chosen");
    //     questionNumber++
    //     //subtract 10 second from timer
    //     //move onto next question
    //     if (questionNumber == 2) {
    //         questionOptionOne.removeEventListener("click",correctAnswer);
    //         questionOptionTwo.removeEventListener("click",correctAnswer);
    //         // questionOptionThree.removeEventListener("click",correctAnswer);
    //         // questionOptionFour.removeEventListener("click",correctAnswer);
    //         showQuestionTwo();
    //     } else if (questionNumber == 3) {
    //         questionOptionOne.removeEventListener("click",correctAnswer);
    //         // questionOptionTwo.removeEventListener("click",correctAnswer);
    //         questionOptionThree.removeEventListener("click",correctAnswer);
    //         // questionOptionFour.removeEventListener("click",correctAnswer);
    //         showQuestionThree();
    //     } else {
    //         console.log("game over");
    //     }
    // }

    // //questions are visible for user when this function is called
    // function showQuestionOne() {
    //     questionTitle.textContent = questionOne.question;
    //     questionOptionOne.textContent = questionOne.options[0];
    //     questionOptionTwo.textContent = questionOne.options[1];
    //     questionOptionThree.textContent = questionOne.options[2];
    //     questionOptionFour.textContent = questionOne.options[3];

    //     //event listeners checking for user input
    //     questionOptionOne.addEventListener("click",correctAnswer, {once : true});
    //     questionOptionTwo.addEventListener("click", wrongAnswer, {once: true});
    //     questionOptionThree.addEventListener("click", wrongAnswer,  {once: true});
    //     questionOptionFour.addEventListener("click", wrongAnswer, {once: true});
        
    //     return;
    // }

    // function showQuestionTwo() {
    //     questionTitle.textContent = questionTwo.question;
    //     questionOptionOne.textContent = questionTwo.options[0];
    //     questionOptionTwo.textContent = questionTwo.options[1];
    //     questionOptionThree.textContent = questionTwo.options[2];
    //     questionOptionFour.textContent = questionTwo.options[3];

    //     //event listeners checking for user input
    //     questionOptionOne.addEventListener("click",wrongAnswer, {once : true});
    //     questionOptionTwo.addEventListener("click", wrongAnswer, {once : true});
    //     questionOptionThree.addEventListener("click", correctAnswer, {once : true});
    //     questionOptionFour.addEventListener("click", wrongAnswer, {once : true});

    //     return;
    // }

    // function showQuestionThree() {
    //     questionTitle.textContent = questionThree.question;
    //     questionOptionOne.textContent = questionThree.options[0];
    //     questionOptionTwo.textContent = questionThree.options[1];
    //     questionOptionThree.textContent = questionThree.options[2];
    //     questionOptionFour.textContent = questionThree.options[3];

    //     //event listeners checking for user input
    //     questionOptionOne.addEventListener("click",wrongAnswer, {once : true});
    //     questionOptionTwo.addEventListener("click", correctAnswer, {once : true});
    //     questionOptionThree.addEventListener("click", wrongAnswer, {once : true});
    //     questionOptionFour.addEventListener("click", wrongAnswer, {once : true});

    //     return;
    // }

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



//ends the quiz if user answers all questions before timer is up or if timer completes count to 0 before user answers all questions
// function endQuiz() {

// }

//event listener to start quiz when user presses start button
startButton.addEventListener("click", startQuiz);