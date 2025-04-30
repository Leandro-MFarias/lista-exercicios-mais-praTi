const prompt = require("prompt-sync")()

let num = parseInt(prompt('Digite um numero: '))
if (isNaN(num)) return console.log('Você não escolheu um número')

num % 2 === 0 ? console.log('Número par') : console.log('Número ímpar');