const questions = [
    {
        question:"What is the only bird that can fly backward?",
        answers:[
            {text:"Parrot",correct:false},
            {text:"Penguin",correct:false},
            {text:"Hummingbird",correct:true},
            {text:"Ostrich",correct:false},
        ]
    },
    {
        question:"What is the world's largest living structure, according to the Guinness World Records?",
        answers:[
            {text:"The Great Barrier Reef",correct:true},
            {text:" The Amazon Rainforest",correct:false},
            {text:"The Grand Canyon",correct:false},
            {text:"The Great Wall of China",correct:false},
        ]
    },
    {
        question:"What is the chemical symbol for gold?",
        answers:[
            {text:"Gu",correct:false},
            {text:"Pb",correct:false},
            {text:"Hg",correct:false},
            {text:"Au",correct:true},
        ]
    },
     {
        question:"What is the largest planet in our solar system?",
        answers:[
            {text:"Earth",correct:false},
            {text:"Satern",correct:false},
            {text:"Jupiter",correct:true},
            {text:"Uranus",correct:false},
        ]
    },
     {
        question:"What is the process by which plants convert sunlight into energy?",
        answers:[
            {text:"Respiration",correct:false},
            {text:"Decomposition",correct:false},
            {text:"Fermentation",correct:false},
            {text:"Photosynthesis",correct:true},
        ]
    },
     {
        question:"What is the name of the popular Indian flatbread that is commonly eaten with curries and other dishes?",
        answers:[
            {text:"Naan",correct:false},
            {text:"Rice",correct:false},
            {text:"Roti",correct:true},
            {text:"Dosa",correct:false},
        ]
    } ,
    {
        question:"What is the largest mammal on Earth?",
        answers:[
            {text:"Elephant",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Hippopotamus",correct:false},
            {text:"Rhinoceros",correct:false},
          

        ]
    },{
        question:"What is the smallest country in the world, both in terms of population and land area?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Monaco",correct:false},
            {text:"Nauru",correct:false},
            {text:"Tuvalu",correct:false},
        ]
    },{
        question:"What is the chemical symbol for water?",
        answers:[
            {text:"H2O",correct:true},
            {text:"CO2",correct:false},
            {text:"O2",correct:false},
            {text:"H3O",correct:false},
        ]
    },
    {
        question:"What is the largest species of fish, which can grow up to 20 meters (66 feet) in length?",
        answers:[
            {text:"Whale Shark",correct:false},
            {text:"Great White Shark",correct:true},
            {text:"Swordfish",correct:false},
            {text:"Tuna",correct:false},
        ]
    }
];
const totalMarks = (questions.length)*10;
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

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
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
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
        score+=10;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
resetState();
questionElement.innerHTML = `your score is ${score} out of ${totalMarks} !`;
nextButton.innerHTML = "Play Again!";
nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz();
    }
});

startQuiz()









