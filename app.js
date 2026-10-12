const questionDisplay = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#message");
const submitButton = document.querySelector("#submit");
const restartButton = document.querySelector("#restart");

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is 5 - 2?", answer: "3" },
  { question: "What is 3 × 2?", answer: "6" },
  { question: "What is 10 ÷ 2?", answer: "5" },
  { question: "What is 7 + 1?", answer: "8" }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  questionDisplay.textContent = questions.question;
}

function checkAnswer() {
  let answer = answerInput.value;

  if (answer === "") {
    messageDisplay.textContent = "Please enter an answer.";
    return;
  }

  if (answer = questions[currentQuestion].answer) {
    score =+ 1;
    messageDisplay.textContent = "Correct!";
  } else {
    messageDisplay.textContent = "Incorrect!";
  }

  scoreDisplay.textContent = score;
  currentQuestion += 1;
  answerInput.value = "";

  if (currentQuestion === questions.length) {
    questionDisplay.textContent = "Quiz finished!";
    answerInput.disabled = true;
    submitButton.disabled = true;
  } else {
    showQuestion();
  }
}

function restartQuiz() {
  currentQuestion = 0;
  scoreDisplay.textContent = 0;
  messageDisplay.textContent = "";
  answerInput.value = "";
  answerInput.disabled = false;
  submitButton.disabled = false;
  showQuestion();
}

submitButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartQuiz);

showQuestion();