const prompt = require("prompt-sync")();

/*
  ESCOLHA ENTRE ForEach ou for
  
  Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

let soma = 0;
let numeros = [
  parseFloat(prompt("Primeiro número: ")),
  parseFloat(prompt("Segundo número: ")),
  parseFloat(prompt("Terceiro número: ")),
  parseFloat(prompt("Quarto número: ")),
  parseFloat(prompt("Quinto número: ")),
];
if (numeros.some(isNaN)) return console.log("Dígite números válidos.");

// for (let i = 0; i < 5; i++) {
//   console.log(soma += numeros[i]);
// }

numeros.forEach(num => {
  console.log(soma += num);
});
