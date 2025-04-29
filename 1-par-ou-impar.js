const prompt = require("prompt-sync")()

// Não usei Number(), mais pela verificação para não vir um 0 caso for vazio 😅
// Mesma coisa para os Exercícios 2 e 3.

let num = prompt('Digite um numero: ')
if (isNaN(num) || num === '') return console.log('Você não escolheu um número')

num % 2 === 0 ? console.log('Número par') : console.log('Número ímpar');