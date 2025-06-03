let questoes = [{
        question: "Qual das alternativas é uma das principais causas das enchentes nas cidades?",
        answers: [{
                option: "Impermeabilização do solo (asfalto, concreto)",
                correct: true
            },
            {
                option: "Ventos fortes",
                correct: false
            },
            {
                option: "Plantio de árvores em excesso",
                correct: false
            },
        ],
    },
    {
        question: "Qual medida ajuda a prevenir enchentes nas áreas urbanas?",
        answers: [{
                option: "Jogar lixo nos bueiros",
                correct: false
            },
            {
                option: "Preservar áreas verdes e construir sistemas de drenagem",
                correct: true
            },
            {
                option: "Construir mais prédios",
                correct: false
            },
        ],
    },
    {
        question: "O lixo jogado nas ruas contribui para as enchentes porque:",
        answers: [{
                option: "Deixa a cidade mais feia",
                correct: false
            },
            {
                option: "Deixa o solo mais fértil",
                correct: false
            },
            {
                option: "Obstrui bueiros e impede o escoamento da água",
                correct: true
            },
        ],
    },
    {
        question: "Quando ocorre uma enchente, é recomendado:",
        answers: [{
                option: "Atravessar a pé ou de carro áreas alagadas",
                correct: false
            },
            {
                option: "Ficar próximo de postes e fios elétricos",
                correct: false
            },
            {
                option: "Procurar abrigo seguro, longe da água",
                correct: true
            },
        ],
    },
    {
        question: "Qual destes fenômenos não está diretamente relacionado às enchentes?",
        answers: [{
                option: "Poluição do ar",
                correct: true
            },
            {
                option: "Chuvas fortes",
                correct: false
            },
            {
                option: "Falta de drenagem urbana",
                correct: false
            },
        ],
    },
    {
        question: "O que fazer primeiro ao perceber que sua casa será alagada?",
        answers: [{
                option: "Poluição do ar",
                correct: false
            },
            {
                option: " Desligar energia e procurar abrigo seguro",
                correct: true
            },
            {
                option: "Falta de drenagem urbana",
                correct: false
            },
        ],
    },
    {
        question: "Qual item NÃO deve ser descartado nas ruas, pois contribui para enchentes?",
        answers: [{
                option: "Garrafas plásticas",
                correct: false
            },
            {
                option: "Panfletos e papéis",
                correct: false
            },
            {
                option: "Todos os anteriores",
                correct: true
            },
        ],
    },
    {
        question: "O que fazer ao se deparar com uma rua alagada dirigindo",
        answers: [{
                option: "Acelerar para atravessar rápido",
                correct: false
            },
            {
                option: "Esperar a água baixar ou buscar rota alternativa",
                correct: true
            },
            {
                option: "FEstacionar no meio da via",
                correct: false
            },
        ],
    },
    {
        question: "É seguro caminhar em água de enchente se ela for rasa?",
        answers: [{
                option: "Não, pois pode haver buracos e contaminação",
                correct: true
            },
            {
                option: "Sim, se não houver correnteza",
                correct: false
            },
            {
                option: "Sim, desde que não corra",
                correct: false
            },
        ],
    },
    {
        question: "Qual tecnologia pode ajudar na prevenção de enchentes urbanas?",
        answers: [{
                option: "Câmeras de segurança",
                correct: false
            },
            {
                option: "GPS comum",
                correct: false
            },
            {
                option: "Aplicativos com dados climáticos e geolocalização em tempo real",
                correct: true
            },
        ],
    },
];

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const btnVoltar = document.querySelectorAll(".finish button")[1];


let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questoes.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    let motivacional = "";
    if (questionsCorrect <= 5) {
        motivacional = `<span>
            Você pode melhorar! Pratique mais bons hábitos para prevenir enchentes e proteger nossa comunidade!
        </span>`;
    } else {
        motivacional = `<span>
            Parabéns! Continue praticando bons hábitos para prevenir enchentes e proteger nossa comunidade!
        </span>`;
    }

    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questoes.length}<br><br>${motivacional}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questoes.length}`;
    const item = questoes[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
<button class="answer" data-correct="${answer.correct}">
    ${answer.option}
</button>
`;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });

    btnVoltar.onclick = () => {
        window.close();
    };

}

loadQuestion();