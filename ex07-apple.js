function AmountOfApples(quantity) {
  if (quantity === 0 || isNaN(quantity)) return console.log("Escolha quantidade válidade");

  if (quantity < 12) {
    console.log("Cada maça custa R$ 0,30");
  } else {
    console.log("Cada maça custa R$ 0,25");
  }
}

AmountOfApples(12)