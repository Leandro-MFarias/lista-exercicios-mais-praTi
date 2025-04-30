const prompt = require("prompt-sync")();

// Comente o Foreach e descomente o for para mudar qual quer usar.

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
