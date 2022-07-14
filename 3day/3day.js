const area = prompt("Você quer seguir na área de Front-End ou Back-End? Digite 1 para Front e 2 para Back.")

let linguagem = "";

if (area === "1") {
        linguagem = prompt("Você prefere aprender React ou Vue?")
}
else if (area === "2") {
        linguagem = prompt("Você prefere aprender C# ou Java?")
}
else {
        linguagem = alert("Poxa, não consegui entender o que você disse.")
}

const especialistaOuFullstack = prompt("Você quer continuar se especializando na sua área ou se tornar um profissional FullStack? Digite 1 para especialista e 2 para FullStack.")

if (especialistaOuFullstack === "1") {
    alert("Que bacana! "+ linguagem +" é realmente uma linguagem muito legal!")
}
else if (especialistaOuFullstack === "2") {
    alert("Que legal! Boa sorte na sua jornada.")
}
else {
    alert("Poxa, infelizmente eu não consegui entender a sua resposta.")
}

let ultimaPergunta = prompt("Você tem interesse em aprender outra tecnologia? Digite 'sim' se for o caso.")

while (ultimaPergunta === "sim") {
    let outraTecnologia = prompt("Qual?");
    alert("Incrível! "+ outraTecnologia +" é muito interessante.")
    ultimaPergunta = prompt("Você tem interesse em aprender outra tecnologia? Digite 'sim' se for o caso.")
}