let userName = prompt("Qual o seu nome?");
let userAge = prompt("Quantos anos você tem?");
let userLanguage = prompt("Qual linguagem de programação você está estudando?");

if (userName && userAge && userLanguage != null) {
    document.getElementById("frase").innerText = "Olá "+ userName +", você tem "+ userAge +" anos e já está aprendendo "+ userLanguage +"!";
}

let lastQuestion = prompt("Você gosta de estudar "+ userLanguage +"? Responda com o número 1 para SIM ou 2 para NÃO.")
let userAnswer = document.getElementById("ultimaPergunta");
let ultimaPergunta;

if (lastQuestion == 1) {
    ultimaPergunta = '<h2>Muito bom! Continue estudando e você terá muito sucesso.</h2>'
} else {
    ultimaPergunta = '<h2>Ahh que pena... Já tentou aprender outras linguagens?</h2>'
}

userAnswer.insertAdjacentHTML('afterbegin', ultimaPergunta)