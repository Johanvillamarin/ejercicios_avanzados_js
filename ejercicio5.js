function rollDice(numCaras) {
  const resultado = Math.floor(Math.random() * numCaras) + 1
  return resultado
}

const tirada = rollDice(6)
console.log('el numero es: ' + tirada)
