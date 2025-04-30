const prompt = require("prompt-sync")();

console.log("ESCOLHA VALORES DIFERENTES");
let value1 = prompt("Escolha o primeiro valor: ");
let value2 = prompt("Escolha o segundo valor: ");

if (isNaN(value1) || value1 === "" || isNaN(value2) || value2 === "")
  return console.log("Escolha um valor válido");

if (value1 === value2)
  return console.log("Por favor insira valores diferentes");

value1 > value2
  ? console.log(`${value2} \n${value1}`)
  : console.log(`${value1} \n${value2}`);
