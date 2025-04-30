const prompt = require("prompt-sync")()

let nota = prompt("Dígite sua nota final: ")
if (isNaN(nota) || nota === '') return console.log('Você não escolheu um número')

if (nota <= 4) {
  console.log("Reprovado");
} else if (nota <= 6) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}