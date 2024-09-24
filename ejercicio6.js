const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    return 'Índices fuera de rango'
  }

  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}

const result = swap(fantasticFour, 0, 2)
console.log(result)
