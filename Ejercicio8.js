
let palabra = prompt("Escribe una palabra:");

function invertirPalabra(texto) {
  return texto.split('')  
              .reverse()  
              .join('');  
}

console.log(invertirPalabra(palabra));
