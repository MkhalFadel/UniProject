/* HOME PAGE LOGIC */
function startQuiz() {
    window.location.href = "questions.html";
}

/* QUIZ DATA */
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which tag is used for a line break?",
        options: ["<br>", "<lb>", "<break>", "<line>"],
        answer: 0
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments in HTML?",
        options: ["//", "/* */", "<!-- -->", "#"],
        answer: 2
    },
    {
        question: "Which language adds interactivity?",
        options: ["HTML", "CSS", "Java", "JavaScript"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;
let selected = false;
let userAnswers = [];

/* ELEMENTS */
const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.querySelector(".next-btn");
const restartBtn = document.querySelector(".restart-btn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const optionsDiv = document.querySelector(".options");
const quizContainer = document.querySelector(".quiz-container");

if (questionEl) loadQuestion();

function loadQuestion() {
    selected = false;
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    optionBtns.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.className = "option-btn";
        btn.disabled = false;
    });

    progressFill.style.width =
        (currentQuestion / questions.length) * 100 + "%";

    progressText.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;
}

function selectAnswer(index) {
    if (selected) return;
    selected = true;

    userAnswers[currentQuestion] = index;
    optionBtns.forEach(btn => btn.disabled = true);

    if (index === questions[currentQuestion].answer) {
        optionBtns[index].classList.add("correct");
        score++;
    } else {
        optionBtns[index].classList.add("wrong");
        optionBtns[questions[currentQuestion].answer].classList.add("correct");
    }

    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    currentQuestion < questions.length ? loadQuestion() : showResults();
}

function showResults() {
    progressFill.style.width = "100%";
    questionEl.textContent = `You scored ${score} / ${questions.length}`;
    optionsDiv.style.display = "none";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";

    const review = document.createElement("div");
    review.innerHTML = questions.map((q, i) => `
        <p>
            <strong>${q.question}</strong><br>
            Your answer: ${q.options[userAnswers[i]]}<br>
            Correct answer: ${q.options[q.answer]}
        </p>
    `).join("");

    quizContainer.appendChild(review);
}

function restartQuiz() {
    window.location.href = "index.html";
}
