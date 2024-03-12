const questions = [
  {
    question: "Which is the fastest bird in the world?",
    answers: [
      {text: "Bald Eagle", correct: false},
      {text: "Peregrine Falcon", correct: true},
      {text: "Hummingbird", correct: false},
      {text: "Raven", correct: false},
    ]
  },
  {
    question: "What is the color of blood when it's inside your body?",
    answers: [
      {text: "Yellow", correct: false},
      {text: "White", correct: false},
      {text: "Red", correct: true},
      {text: "Green", correct: false},
    ]
  },
  {
    question: "What is the tallest waterfall in the world?",
    answers: [
      {text: "Angel Falls, Venezuela", correct: true},
      {text: "Niagara Falls, New York", correct: false},
      {text: "Wailua Falls, Hawaii", correct: false},
      {text: "Sutherland Falls, New Zealand", correct: false},
    ]
  },
  {
    question: "What letter is not present anywhere on the periodic table of elements?",
    answers: [
      {text: "C", correct: false},
      {text: "X", correct: false},
      {text: "F", correct: false},
      {text: "J", correct: true},
    ]
  },
  {
    question: "Which of these animals has the ability to laugh?",
    answers: [
      {text: "Whale", correct: false},
      {text: "Crocodile", correct: false},
      {text: "Rat", correct: true},
      {text: "Bear", correct: false},
    ]
  },
  {
    question: "Which of these foods will never spoil?",
    answers: [
      {text: "Cereal", correct: false},
      {text: "Honey", correct: true},
      {text: "Beef Jerky", correct: false},
      {text: "Beans", correct: false},
    ]
  },
  {
    question: "What is something the ancient Romans used as mouthwash?",
    answers: [
      {text: "Saltwater", correct: false},
      {text: "Urine", correct: true},
      {text: "Mint tea", correct: false},
      {text: "Freshwater", correct: false},
    ]
  },
  {
    question: "About how many scents can a human nose remember?",
    answers: [
      {text: "Around 500", correct: false},
      {text: "Around 10,000", correct: false},
      {text: "Around 50,000", correct: true},
      {text: "Around 1 million", correct: false},
    ]
  },
  {
    question: "What is the capital city of Canada?",
    answers: [
      {text: "Toronto", correct: false},
      {text: "Vancouver", correct: false},
      {text: "Ottawa", correct: true},
      {text: "Montreal", correct: false},
    ]
  },
  {
    question: "People with what color hair are genetically mutants?",
    answers: [
      {text: "Black", correct: false},
      {text: "Red", correct: true},
      {text: "Blonde", correct: false},
      {text: "Brown", correct: false},
    ]
  },
  {
    question: "Which color is not there in the rainbow?",
    answers: [
      {text: "Indigo", correct: false},
      {text: "Red", correct: false},
      {text: "Brown", correct: true},
      {text: "Yellow", correct: false},
    ]
  },
  {
    question: "How many stripes are there on the US flag?",
    answers: [
      {text: "10", correct: false},
      {text: "11", correct: false},
      {text: "12", correct: false},
      {text: "13", correct: true},
    ]
  },
  {
    question: "How many rings appear on the Olympic flag?",
    answers: [
      {text: "3", correct: false},
      {text: "7", correct: false},
      {text: "5", correct: true},
      {text: "1", correct: false},
    ]
  },
  {
    question: "What is the atomic sign for Helium on the periodic table?",
    answers: [
      {text: "H", correct: false},
      {text: "He", correct: true},
      {text: "Hl", correct: false},
      {text: "Hu", correct: false},
    ]
  },
  {
    question: "What is the general name for a group of wolves?",
    answers: [
      {text: "Pack", correct: true},
      {text: "School", correct: false},
      {text: "Flock", correct: false},
      {text: "Squad", correct: false},
    ]
  },
  {
    question: "What is the currency of Scotland?",
    answers: [
      {text: "Euro", correct: false},
      {text: "Yen", correct: false},
      {text: "Pound sterling", correct: true},
      {text: "Haggis", correct: false},
    ]
  },
  {
    question: "In which country is the Taj Mahal situated?",
    answers: [
      {text: "Pakistan", correct: false},
      {text: "India", correct: true},
      {text: "Japan", correct: false},
      {text: "France", correct: false},
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      {text: "Mississipi", correct: false},
      {text: "Nile", correct: true},
      {text: "Amazon", correct: false},
      {text: "Yangtze", correct: false},
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      {text: "Caravaggio", correct: false},
      {text: "Sandro Botticelli", correct: false},
      {text: "Leonardo Da Vinci", correct: true},
      {text: "Galileo Galilei", correct: false},
    ]
  },
  {
    question: "Which planet is the 3rd closest to the sun?",
    answers: [
      {text: "Earth", correct: true},
      {text: "Mars", correct: false},
      {text: "Jupiter", correct: false},
      {text: "Venus", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML =`You score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();