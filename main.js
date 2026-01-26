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

let currentQuestion = 0; // Keep track of the index of the questions being dispalyed 
let userAnswers = []; // An array to store the answers of the users
let pickedAnswer = ""; // A variable used to store the currently picked answer of the user to add to the userAnswers array

/* ELEMENTS */
const questionEl = document.getElementById("question");
const Ans1 = document.getElementById("a1"); // Answer p element NO.1
const Ans2 = document.getElementById("a2"); // Answer p element NO.2
const Ans3 = document.getElementById("a3"); // Answer p element NO.1
const Ans4 = document.getElementById("a4"); // Answer p element NO.3
const Rad1 = document.getElementById('answer1') // Answer radio element NO.1
const Rad2 = document.getElementById('answer2') // Answer radio element NO.1
const Rad3 = document.getElementById('answer3') // Answer radio element NO.1
const Rad4 = document.getElementById('answer4') // Answer radio element NO.1
const questionsCount = document.getElementById('questionsCount'); // Questions Count Element
const progressFill = document.getElementById("progressFill"); // Questions Progress Bar
const nextBtn = document.querySelector('.nextBtn'); // The Next Button

// This function will take the question and Display it 
function loadQuestions()
{
    questionEl.innerHTML = questions[currentQuestion].question; // Taking the question from the questions Array using the currentQuestion variable for the index of the question and then display it
    loadAnswers()
}
loadQuestions()

// This function will take each answer from the question being displyed and assing them to each Answer box
function loadAnswers()
{
    /*
        1-In here Each Ans.textContent is used to display on of the answers of the current question
        
        2-textContent is used here instead of innerHTML because some answers contain HTML element and may not appear in the Answer Box
        and it will be treated as a page element instead
        
        3-The Rad.value is used to set the value of the radio element to one of the question's answers so that JS can later read the
        value and determine if the answer is correct
        
        4-The Rad.checked = false is used here to uncheck the radio element each time the question changes
    */ 

    Ans1.textContent = questions[currentQuestion].options[0].ans;
    Rad1.value = questions[currentQuestion].options[0].ans;
    Rad1.checked = false
    
    Ans2.textContent = questions[currentQuestion].options[1].ans;
    Rad2.value = questions[currentQuestion].options[1].ans;
    Rad2.checked = false

    Ans3.textContent = questions[currentQuestion].options[2].ans;
    Rad3.value = questions[currentQuestion].options[2].ans;
    Rad3.checked = false
    
    Ans4.textContent = questions[currentQuestion].options[3].ans;
    Rad4.value = questions[currentQuestion].options[3].ans;
    Rad4.checked = false
}

// This function is used to handle the answers the user picks on each question
function handleAnswers()
{
    /*
        1-The pickedAnswer variable holds the current answer the user picked for the current question and it is then added to the 
        userAnswers array based on the index of the current question, which means if the currentQuestion value is 2 then that means 
        that the user is on the third question and his answer will stored on the same index which is 2

        2-pickedAnswer is then set to  = "" to reset its value to nothing so if the user skips the question and does not answer it
        the answer picked in the previous question is not added to the array instead an empty string will be added
    */
    userAnswers[currentQuestion] = pickedAnswer;
    pickedAnswer = "";
}

function pickAnswer(answer)
{
    /*
        This function takes a paramiter called answer which is passed from the question.html like this pickAnswer(this.value) on the
        radio element. this.value is a built in method that takes the value of the element which can be used in JS like in here the 
        value passed using the answer paramiter is being assigned to the pickedAnswer variable
    */
    pickedAnswer = answer;
}

// This funciton is called when the user click the next button to handle the change of the question
function nextQuestion() {
    /*
        1- the handleAnswers() function is called to re-assign the new answers of the new question

        2- the if(currentQuestion != 0) currentQuestion++ is used here to make sure that the user can't increment the value of
        the currentQuestion to be bigger than 9 or that will make issues with the code because the variable keeps track of the
        current question and if incremented beyond 9 errors will happen because we only have 10 questions

        3- the loadQuestions() function is called to update the question element to the new question

        4-questionCount.innerHTML is used here to update the visible count of the question on the page by taking the currentQuesetion
        variable and increment its value by 1, which means if the currentQuestion is set to 2 that means we are on the third question
        so it is incremented by 1 to show 3/10 on the page

        5-prgoressFill.style.width is used to update the progress bar showen in the page by taking the currentQuestion variable
        incrementing it by 1 and then multiplying by 10 so that we can add the value to the width of the bar to make it look like it
        is increasing, if the currentQuestion variable's value is 2 then after adding 1 and multiplying by 10 it becomes 30 wich will
        set the width of the progress bar to 30%

        6- the if(currentQuestion === 9) condition is used here to chekc if the user reached the last question if yes the text on the
        next button will change from 'next' to 'Submit' and also the function of the button will change from the nextQuestion() function
        to the submitAnswers() function which is used to submit the quiz
    */


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

nextBtn.addEventListener('click', nextQuestion) // used to assign the nextQuestion() function to the next Button when the page loads

function previousQuestion() {

    /*
        1- the if if(currentQuestion === 9) condition is used here to check if the user is on the last question before going back to
        the previous question it will change the text on the button from 'Submit' to 'Next', it will also remove the submitAnswers
        function and assign it the nextQuestion() funciton, the opposite of what happens in the nextQuestion() function

        2- the if(currentQuestion != 0) currentQuestion--; condition will make sure that as long as the currentQuestion variable is 
        not 0 it will be able to decrement the value of the variable so that in case the varaible value is 0 it wont be a negative
        value and cause errors when trying to load the questions and answers

        3- the loadQuestion() will load the previous question 

        4- the questionsCount & the progressFill will do the same functionality as the previous function
    */

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

let results = []; // An array used to store the results of the quiz after being calculated

// This function will handle the submission proccess of the quiz 
function submitAnswers()
{
    /* 
        1- the handleAnswers() function will call the function to add the last question's answer before submitting

        2- the for loop in here will loop through the questions array and on each question it will compare the answer of the user 
        with the correct answer of the question, if the answer the user chose is correct it will be added to the results array 
        with a property called 'match' with the boolean value true to indicate that the user's answer and the correct answer matches
        each other, if the user chose the wrong answer the answer is also added to the results array but the match property will be 
        false indicating that the user's answer is wrong

        3-localStorage.setItem this is a built in function that is used to store data in the browser's local storage so that certain
        data can be shared across mutliple pages in this case we are sharing the results array to the result.html page,
        JSON.stringfy(results) is used to store the data we want to share in the form of strings becuase the browser can only save
        strings or number.

        4-window.location.href is used here to redirect the user to the results page 
    */

    handleAnswers();
    for(let i = 0; i < questions.length; i++)
    {
        if(userAnswers[i] === questions[i].correct)
            results[i] = {userAnswer: userAnswers[i], correctAnswer: questions[i].correct, match: true}
        else
            results[i] = {userAnswer: userAnswers[i], correctAnswer: questions[i].correct, match: false}       
    }
    localStorage.setItem('results', JSON.stringify(results));
    window.location.href = "results.html"
}