// Crie uma função que irá imprimir a idade da pessoa. O usuário fornecerá o ano de nascimento

function exibeIdade(ano) {
    var novaIdade;
    novaIdade = 2022 - ano;
    console.log(`Você tem ${novaIdade} anos`);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Qual ano você nasceu?`, ano => {
    exibeIdade(ano);
    readline.close()
  })