function findArrayIndex(array, text) {
  //Tu codigo
  return array.indexOf(text)
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Anakin'))
console.log(findArrayIndex(mainCharacters, 'Camilo'))
console.log(findArrayIndex(mainCharacters, 'Leia'))

/*2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

function findArrayIndex(array, text) {
  return array.indexOf(text)
}
const objects = [
  'Taza',
  'Copa',
  'Pc',
  'Licuadora',
  'Zapato',
  'Abrigo',
  'Espejo',
  'Anillo'
]

function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}
console.log(removeItem(objects, 'Zapato'))
console.log(removeItem(objects, 'Licuadora'))
console.log(removeItem(objects, 'Anillo'))
