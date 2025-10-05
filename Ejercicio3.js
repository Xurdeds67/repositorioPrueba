let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
  window.alert("Debes ingresar dos números válidos.");
} else {
  let inicio = Math.min(num1, num2);
  let fin = Math.max(num1, num2);

  let pares = [];

  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      pares.push(i);
      console.log(i);
    }
  }

  if (pares.length > 0) {
    window.alert("Números pares entre " + inicio + " y " + fin + ": " + pares.join(", "));
  } else {
    window.alert("No hay números pares entre " + inicio + " y " + fin);
  }
}
