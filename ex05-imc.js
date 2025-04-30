const prompt = require("prompt-sync")()

let height = parseFloat(prompt("Dígite sua altura: ").replace(",", "."))
let weight = parseFloat(prompt("Dígite seu peso: ").replace(",", "."))

if (isNaN(height) || isNaN(weight)) return console.log("Dígite um número válido");

let imc = weight / (height * height)
console.log(`Seu IMC é: ${imc.toFixed(2)}`);