let numero = parseFloat (prompt ("introduce un numero"))

if (!isNaN(numero)) { 
  if (numero % 2 === 0) {
    window.alert("El número " + numero + " es par.");
  } else {
    window.alert("El número " + numero + " es impar.");
  } 
    }else {
    window.alert("No has ingresado un número válido")
  }