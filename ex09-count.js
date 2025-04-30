for (let i = 10; i >= 1; i--) {
  console.log(i);
  if (i === 1) console.log("Contagem finalizada!\n");
}

function contagem(i) {
  if (i === 0) return console.log("Contagem finalizada!");

  console.log(i);
  setTimeout(() => contagem(i - 1), 2000);
}

contagem(10);