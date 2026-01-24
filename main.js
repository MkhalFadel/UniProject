// Quiz questions
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            {ans: "Hyper Text Markup Language"},
            {ans: "High Text Machine Language"},
            {ans: "Hyperlinks Text Markup Language"},
            {ans: "Home Tool Markup Language"},
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used for a line break?",
        options: [
            {ans: "<br>"},
            {ans: "<lb>"},
            {ans: "<break>"},
            {ans: "<line>"},
        ],
        correct: "<br>"
    },
    {
        question: "Which CSS property changes text color?",
        options: [
            {ans: "font-color"},
            {ans: "text-color"},
            {ans: "color"},
            {ans: "foreground"},
        ],
        correct: "color" 
    },
    {
        question: "Which symbol is used for comments in HTML?",
        options: [
            {ans: "//"},
            {ans: "/* */"},
            {ans: "<!-- -->"},
            {ans: "#"},
        ],
        correct: "<!-- -->"
    },
    {
        question: "Which language is used for web interactivity?",
        options: [
            {ans: "HTML"},
            {ans: "CSS"},
            {ans: "Java"},
            {ans: "JavaScript"},
        ],
        correct: "JavaScript"
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: [
            {ans: "<img>"},
            {ans: "<image>"},
            {ans: "<src>"},
            {ans: "<picture>"},
        ],
        correct: "<img>"
    },
    {
        question: "Which CSS property controls the spacing between lines of text?",
        options: [
            {ans: "spacing"},
            {ans: "line-height"},
            {ans: "text-spacing"},
            {ans: "letter-spacing"},
        ],
        correct: "line-height"
    },
    {
        question: "What does CSS stand for?",
        options: [
            {ans: "Cascading Style Sheets"},
            {ans: "Creative Style System"},
            {ans: "Computer Style Sheets"},
            {ans: "Colorful Style Syntax"},
        ],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Which HTML attribute specifies an external CSS file?",
        options: [
            {ans: "href"},
            {ans: "src"},
            {ans: "link"},
            {ans: "style"},
        ],
        correct: "href"
    },
    {
        question: "10- Which JavaScript function is used to log messages to the console?",
        options: [
            {ans: "alert()"},
            {ans: "console.log()"},
            {ans: "print()"},
            {ans: "document.write()"},
        ],
        correct: "console.log()"
    },
]

let currentQuestion = 0;
let userAnswers = [];
let pickedAnswer = "";

/* ELEMENTS */
const questionEl = document.getElementById("question");
const A1 = document.getElementById("a1");
const A2 = document.getElementById("a2");
const A3 = document.getElementById("a3");
const A4 = document.getElementById("a4");
const R1 = document.getElementById('answer1')
const R2 = document.getElementById('answer2')
const R3 = document.getElementById('answer3')
const R4 = document.getElementById('answer4')
const questionsCount = document.getElementById('questionsCount');
const progressFill = document.getElementById("progressFill");
const nextBtn = document.querySelector('.nextBtn');

function loadQuestions()
{
    questionEl.innerHTML = questions[currentQuestion].question;
    loadAnswers()
}
loadQuestions()

function loadAnswers()
{
    A1.textContent = questions[currentQuestion].options[0].ans;
    R1.value = questions[currentQuestion].options[0].ans;
    R1.checked = false
    
    A2.textContent = questions[currentQuestion].options[1].ans;
    R2.value = questions[currentQuestion].options[1].ans;
    R2.checked = false

    A3.textContent = questions[currentQuestion].options[2].ans;
    R3.value = questions[currentQuestion].options[2].ans;
    R3.checked = false
    
    A4.textContent = questions[currentQuestion].options[3].ans;
    R4.value = questions[currentQuestion].options[3].ans;
    R4.checked = false
}

function handleAnswers()
{
    userAnswers[currentQuestion] = pickedAnswer;
    pickedAnswer = "";
    console.log(userAnswers)
}

function pickAnswer(answer)
{
    pickedAnswer = answer;
}

function nextQuestion() {
    handleAnswers();
    if(currentQuestion != 9) currentQuestion++; // Increase the questionsCount variable to go to the next question
    loadQuestions(); // Load the next question;
    questionsCount.innerHTML = `${currentQuestion + 1}/10` // Update the questions count
    progressFill.style.width = `${(currentQuestion + 1) * 10}%` // Update the question progress bar
    if(currentQuestion === 9)
    {
        nextBtn.innerHTML = 'Submit'; // Change the text in the nextBtn to "submit" when on the last question
        nextBtn.removeEventListener('click', nextQuestion)
        nextBtn.addEventListener("click", submitAnswers)
    }    
}

nextBtn.addEventListener('click', nextQuestion)

function previousQuestion() {
    if(currentQuestion === 9)
    {
        nextBtn.innerHTML = 'Next =>' // Change the text in the nextBtn to "Next =>" if it is not the last question
        nextBtn.removeEventListener('click', submitAnswers)
        nextBtn.addEventListener("click", nextQuestion)
    }
    if(currentQuestion != 0) currentQuestion--; //Decrease the questionCount variable to go back to the previous question
    loadQuestions() // load the previous question
    questionsCount.innerHTML = `${currentQuestion + 1}/10` // Update the question count
    progressFill.style.width = `${(currentQuestion + 1) * 10}%` // Update the question progress bar
}

let results = [];

function submitAnswers()
{
    handleAnswers();
    for(let i = 0; i < questions.length; i++)
    {
        for(let j = 0; j < questions[i].options.length; j++)
        {
            if(userAnswers[i] === questions[i].correct)
                results[i] = {userAnswer: userAnswers[i], correctAnswer: questions[i].correct, match: true}
            else
                results[i] = {userAnswer: userAnswers[i], correctAnswer: questions[i].correct, match: false}       
        }
    }
    localStorage.setItem('results', JSON.stringify(results));
    window.location.href = "results.html"
}