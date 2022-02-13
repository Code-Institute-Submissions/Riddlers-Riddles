
// VARIABLE FOR QUESTIONS AND CORRECT ANSWERS
let questions = [
    {
        question: '<strong>#1.</strong> What type of lion never roars?',
        answers: {
            A: 'A dandelion',
            B: 'A lion cub',
            C: 'A captured lion',
            D: 'A mountain lion'
        },
        correctAnswer: 'A dandelion' 
    },
    {
        question: '<strong>#2.</strong> What can you catch but never throw?',
        answers: {
            A: 'Batman',
            B: 'A cold',
            C: 'Your toys',
            D: 'A boomerang'
        },
        correctAnswer: 'A cold'
    },
    {
        question: '<strong>#3.</strong> Pick me up and scratch my head. I will turn red and then black?',
        answers: {
            A: 'A match',
            B: 'Candle',
            C: 'Batman',
            D: 'A scab'
        },
        correctAnswer: 'A match' 
    },
    {
        question: '<strong>#4.</strong> I can be broken without being touched or even seen. What am I?',
        answers: {
            A: 'Glass',
            B: 'A promise',
            C: 'A window',
            D: 'Batman'
        },
        correctAnswer: 'A promise' 
    },
    {
        question: '<strong>#5.</strong> I have a neck, but not a head, I wear a cap. What am I?',
        answers: {
            A: 'A ghost',
            B: 'A bottle',
            C: 'A snake',
            D: 'Batman'
        },
        correctAnswer: 'A bottle' 
    },
    {
        question: '<strong>#6.</strong> If you have it, you want to share it. If you share it, you lose it. What is it?',
        answers: {
            A: 'Love',
            B: 'Talent',
            C: 'A secret',
            D: 'Batman'
        },
        correctAnswer: 'A secret'
    },
    {
        question: '<strong>#7.</strong> Cut me, I will not cry, but you will. What am I?',
        answers: {
            A: 'Slug',
            B: 'Batman',
            C: 'A knife',
            D: 'An onion'
        },
        correctAnswer: 'An onion'
    },
    {
        question: '<strong>#8.</strong> What is black and blue and dead all over?',
        answers: {
            A: 'Batman',
            B: 'Batman',
            C: 'Batman',
            D: 'Batman'
        },
        correctAnswer: 'Batman'
    }
];

// STORE ELEMENTS IN VARIABLES:
let quizBox = document.getElementById('quiz-box');
let questionH2 = document.getElementById('question-h2');
let answerButton = document.getElementsByClassName('answer-button');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');
let scoreTracker = document.getElementById('score');
let q = 0;
let a = 0;
let correct = 0;
let totalQuestions = 8;
let currentQuestion = 0;

scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;

//DISPLAYS GREEN FOR CORRECT AND RED FOR INCORREXT ANSWERS
function revealAnswer(event) {
        if (this.innerHTML === questions[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
            correct++;
            currentQuestion++;
            quizBox.style.backgroundColor = "green";
            questionH2.innerHTML = 'NOT BAD!' + '</br>' + 'TOTAL SCORE: ' + correct + '/' + totalQuestions;
        } 
        else if (this.innerHTML != questions[q].correctAnswer && currentQuestion == (totalQuestions - 1)){
            currentQuestion++;
            quizBox.style.backgroundColor = "red";
            questionH2.innerHTML = 'FOOL!' + '</br>' + 'THE CORRECT ANSWER IS: ' + '<strong>' + questions[q].correctAnswer + '</strong>' + '</br>' + 'Your total score: ' + correct + '/' + totalQuestions;
            } 
        else if (this.innerHTML === questions[q].correctAnswer && currentQuestion == q){
            quizBox.style.backgroundColor = "green";
            questionH2.innerHTML = 'NOT BAD!';
            correct++;
            currentQuestion++;
        } 
        else if (this.innerHTML != questions[q].correctAnswer && currentQuestion == q){
            quizBox.style.backgroundColor = "red";
            questionH2.innerHTML = 'FOOL!' + '</br>' + 'THE CORRECT ANSWER IS: ' + '<strong>' + questions[q].correctAnswer + '</strong>';
            currentQuestion++;
        }
        
        //TRACKS CORRECT ANSWERS
        scoreTracker.innerHTML = 'Score: ' + correct + '/' + totalQuestions;
}
let i;
for (i = 0; i < answerButton.length; i++){
    answerButton[i].addEventListener("click", revealAnswer);
}

// DISPLAY ALL QUESTION OPTIONS 
questionH2.innerHTML = questions[q].question;
answerButton[0].innerHTML = questions[a].answers.A;
answerButton[1].innerHTML = questions[a].answers.B;
answerButton[2].innerHTML = questions[a].answers.C;
answerButton[3].innerHTML = questions[a].answers.D;

nextButton.addEventListener('click', nextQuestion);

// DISPLAY NEXT QUESTION
function nextQuestion(){
    if (currentQuestion == totalQuestions){
        alert('Click the restart button to try again');
    }
    else if (currentQuestion > q){
        q++;
        a++;
        questionH2.innerHTML = questions[q].question;
        answerButton[0].innerHTML = questions[a].answers.A;
        answerButton[1].innerHTML = questions[a].answers.B;
        answerButton[2].innerHTML = questions[a].answers.C;
        answerButton[3].innerHTML = questions[a].answers.D;
        quizBox.style.backgroundColor = 'white';
    }
    else {
        alert('Please select your answer to continue');
    }
}

//RESTART BUTTON 
restartButton.addEventListener('click', restartQuiz);
function restartQuiz(){
    location.reload();
}