const questions = [
    //All questions
    {
        question: "The Big Bash League is based in which country?",
        answers: [
            { text: "India", correct: false },
            { text: "Australia", correct: true },
            { text: "Sri Lanka", correct: false },
            { text: "Bangladesh", correct: false },
        ]

    },

    {
        question: "Ben Stokes made his Test debut for England in which year?",
        answers: [
            { text: 2002, correct: false },
            { text: 2012, correct: false },
            { text: 2013, correct: true },
            { text: 2005, correct: false },
        ]

    },

    {
        question: "Who was the first player to reach 10,000 runs in Test cricket?",
        answers: [
            { text: "Sunil gavasker", correct: false },
            { text: "M. S. Dhoni", correct: false },
            { text: "AB de Villiers", correct: true },
            { text: "Shane Warne", correct: false },
        ]

    },

    {
        question: "How many runs did Jack Leach score during his iconic second innings with Ben Stokes during the 2019 Ashes Third Test at Headingley?",
        answers: [
            { text: 6, correct: false },
            { text: 0, correct: false },
            { text: 3, correct: true },
            { text: 1, correct: false },
        ]

    },

    {
        question: "Which player took the most wickets in the 2019 Cricket World Cup?",
        answers: [
            { text: "David Warner", correct: false },
            { text: "virendra sehwag", correct: false },
            { text: "AB de Villiers", correct: false },
            { text: "Mitchell Starc", correct: true },


        ]
    },

    {
        question: "The first official international cricket match was held in 1844 between which two nations?",
        answers: [
            { text: "Australia and USA", correct: false },
            { text: "India and pakistan", correct: false },
            { text: "Canada and USA", correct: true },
            { text: "Shane Warne", correct: false },
        ]

    },

    {
        question: "How many days did the longest recorded Test match last?",
        answers: [
            { text: 6, correct: false },
            { text: 2, correct: false },
            { text: 3, correct: false },
            { text: 9, correct: true },
        ]

    },

    {
        question: "Nasser Hussain last captained the England Test team in which year?",
        answers: [
            { text: 2019, correct: false },
            { text: 2007, correct: false },
            { text: 2004, correct: false },
            { text: 2003, correct: true },
        ]

    },

    {
        question: "Eoin Morgan has played more ODI matches for Ireland than he has played Test matches for England – true or false?",
        answers: [
            { text: false, correct: false },
            { text: false, correct: false },
            { text: true, correct: true },
            { text: false, correct: false },
        ]

    },

    {
        question: "Who has recorded the most career runs in England Test match cricket?",
        answers: [
            { text: "James Anderson", correct: false },
            { text: "Ollie Robinso", correct: false },
            { text: "Stuart Broad", correct: false },
            { text: "Alastair Cook", correct: true },
        ]

    },



];

const questionElement = document.getElementById("question");// Reference to the question element
const answerButtons = document.getElementById("answer-buttons");// Reference to the answer buttons container
const nextButton = document.getElementById("next-btn");// Reference to the next button element


let currectQuestionIndex = 0; // Index of the current question
let score = 0; // Score tracker

//this function sets up the necessary variables to begin the quiz
function startQuiz() {
    currectQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//This function is quiz implementation as it populates the user interface with the current question
function showQuestion() {
    resetState();
    let currectQuestion = questions[currectQuestionIndex];
    let questionNo = currectQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currectQuestion.question;



    currectQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a button for each answer
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Add the "btn" class to the button
        answerButtons.appendChild(button);  // Append the button to the answer buttons container
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Set a data attribute for the correct answer

        }

        button.addEventListener("click", selectAnswer); // Add click event listener to the button


    });

}

//Resets the user interface state for the quiz
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Clear the answer buttons container
    }
}
// Handles the selection of an answer in the quiz
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Add "correct" class to the selected button
        score++; // Increment the score if the answer is correct

    } else {
        selectedBtn.classList.add("incorrect");  // Add "incorrect" class to the selected button

    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Add "correct" class to the buttons with correct answers

        }

        button.disabled = true; // Disable all buttons after an answer is selected

    });
    nextButton.style.display = "block"; // Show the next button after an answer is selected


}

//Displays the final score of the quiz to the user
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
//Handles the action when the "Next" button is clicked during the quiz
function handleNextButton() {
    currectQuestionIndex++;
    if (currectQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}



// Event listener for the "click" event on the "Next" button during the quiz
nextButton.addEventListener("click", () => {
    if (currectQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();




