let lado1 = 50;
let lado2 = 50;
let lado3 = 60;

if (
  lado1 < lado2 + lado3 &&
  lado2 < lado1 + lado3 &&
  lado3 < lado1 + lado2
) {
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo isósceles");
  } else if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo equilátero");
  } else if (lado1 !== lado2 && lado2 !== lado3) {
    console.log("Triângulo escaleno");
  }

}

