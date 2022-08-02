/*atividade 1 - Crie uma variável chamada nomeCompleto e atribua a ela o seu nome,
após isso, imprima o valor no console utilizando a função
console.log(nomeCompleto)*/

var nomeCompleto = "Keyla T. Z. Coimbra"
console.log(nomeCompleto);

/*atividade 2 -Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo
valores numéricos para ambas. Após isso crie uma terceira variável
chamada resultado atribuindo a multiplicação das duas variáveis
anteriores e imprima o valor do resultado no console*/

var numeroA = 20
var numeroB = 2
var resultado = numeroA*numeroB
console.log(resultado);

/*atividade 3 - Você deverá criar uma função chamada saudacao que ao executá-la
deverá imprimir no console a seguinte mensagem: “Oi eu sou o Goku!”
*/
function saudacao(name){
    console.log('Oi ' + name)
}
saudacao("eu sou o Goku!");

/*atividade 4 - Crie uma função chamada multiplica que recebe dois parâmetros
numéricos. Ela deverá exibir a multiplicação desses dois parâmetros no
console*/

function multi(a,b) {
    return a*b;
}
console.log(multi(20,2));

/*atividade 5 - Crie uma função chamada podeDirigir que receba como parâmetro da
idade em formato número, e exiba no console “Você pode dirigir” caso o
valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
dirigir”*/

function podeDirigir(age){
    if(age>=18)
    {console.log("pode dirigir")}
    else(age<=18)



}




//atividade6 - estrutura de repetição sequencia//
for (var i = 0; i <=20; i++){
    console.log(i);
}

//atividade7 - estrutura de repetição - numeros impares//

for (var i = 0; i <=20; i++){
        if(i%2==1){
        console.log(i);
        
    }
}


//atividade 8 - exemplo algum aluno 

function tabuada (number) {
    let a =1;
    while(a =<10){
        
    }






//readline que a Alice passou na aula do dia 27/07/22 para o usuario digitar
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
 readline.question(`Digite um número para multiplicao   `, numero => {
   multiplicacao(numero);
   readline.close()
 })