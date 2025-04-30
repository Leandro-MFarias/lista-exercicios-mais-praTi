const prompt = require("prompt-sync")();

// Aqui decidi usar o Number() pq faço a verificação do 0
// E também acredito que é mais válido que seja um número ao inves de string nos Cases.

let escolha = Number(prompt("Dígite o número 1, 2 ou 3: "))
console.log(escolha);
if (isNaN(escolha) || escolha == 0) return console.log("Escolha um número válido");

switch (escolha) {
  case 1:
    console.log('Você escolheu 1');
    break
  case 2:
    console.log('Você escolheu 2');
    break
  case 3:
    console.log('Você escolheu 3');
    break
  default:
    console.log('Escolha entre 1, 2 e 3.');
    break
}