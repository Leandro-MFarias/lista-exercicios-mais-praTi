const prompt = require("prompt-sync")()

let idade = prompt("Dígite sua idade: ")
if (isNaN(idade) || idade === '') return console.log('Escolha um número')

if (idade <= 10) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolecente");
} else if (idade <= 60) {
  console.log("Adulto");
} else { 
  console.log("Idoso");
}