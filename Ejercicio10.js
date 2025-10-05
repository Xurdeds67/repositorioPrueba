let numeros = prompt("Escribe números separados por comas:")
  .split(",")
  .map(Number);

function sumarPares(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      suma += array[i];
    }
  }
  return suma;
}

alert("La suma de los números pares es: " + sumarPares(numeros));
