const questions = [
    {
        que: "1) What year was javascript invented ?",
        a: "1995",
        b: "1996",
        c: "1994",
        d: "none of the abouve",
        correct: "b",
    },
    {
        que: "2) which of the following is markup language ?",
        a: "html",
        b: "php",
        c: "c++",
        d: "java",
        correct: "a",
    },
    {
        que: "3) What does css stand for ?",
        a: "hypertext markup language",
        b: "cascading style sheets",
        c: "javascript object notation",
        d: "none of the abouve",
        correct: "b",
    }
];

const quesBox = document.getElementById("quesBox");
const options = document.getElementsByClassName("option");
const lastMessage = document.querySelector("#options");
const submit = document.querySelector(".btn");
const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="option"]'
);
const radioButtons2 = document.querySelectorAll(
    'input[type="radio"][name="option"]'
);
const question1 = document.getElementsByTagName("label")[0];
const question2 = document.getElementsByTagName("label")[1];
const question3 = document.getElementsByTagName("label")[2];
const question4 = document.getElementsByTagName("label")[3];
const answershow = document.getElementById("answer-result");
const scoreShow = document.getElementById("score");

let index = 0;
let score = 0;
let radioChecked = false;


function loadQuestions() {
    data = questions[index];
    console.log(data.que);
    quesBox.innerText = data.que;
    question1.innerText = "1) " + data.a;
    question2.innerText = "2) " + data.b;
    question3.innerText = "3) " + data.c;
    question4.innerText = "4) " + data.d;
}

loadQuestions()

//i spent 2 hours for this submit solution i make mistake in lot of functions

submit.addEventListener("click", () => {
    let radioChecked = false;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            radioChecked = true;
        }
    });
    if (radioChecked) {
        nextQuestion();
    } else {
        setTimeout(() => {
            answershow.innerText = "";
        }, 2000);
        answershow.innerText = "Please Select answer";
    }
});

function nextQuestion() {

    radioIsChecked();

    index++;
    if (index < questions.length) {
        loadQuestions();
    } else {
        if(score > 2){
            quesBox.innerText = "Congrulation You Pass The Exam";
            lastMessage.innerHTML = `your score is ${score}/3`;
            submit.innerText = "play Again";

            submit.addEventListener("click", () => {
                location.reload();
            });
        }
        else{
        quesBox.innerText = "Game Over";
        lastMessage.innerHTML = `your score is ${score}/3`;
        submit.innerText = "play Again";

        submit.addEventListener("click", () => {
            location.reload();
        });
    }
        // scoreShow.innerText = `your score is ${score}/3`;
    }

    uncheckRadioButtons();
}

function radioIsChecked() {
    radioButtons.forEach((radioButton) => {

        if (radioButton.checked) {

            if (radioButton.value == data.correct) {
                score++;
                console.log("correct answer");
                setTimeout(() => {
                    answershow.innerText = "";
                    scoreShow.innerText = "";
                }, 2000);
                answershow.innerText = "Your Last Answer Is correct";
                scoreShow.innerText = `your score is ${score}/3`;
            } else {
                setTimeout(() => {
                    answershow.innerText = "";
                    scoreShow.innerText = "";
                }, 2000);
                answershow.innerText = "Your Last Answer Is Wrong";
                scoreShow.innerText = `your score is ${score}/3`;
            }
        }
        else {

            return;
        }
    });
}

function uncheckRadioButtons() {
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });
}
