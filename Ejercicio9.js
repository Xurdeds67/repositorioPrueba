
const CONTRASEÑA_CORRECTA = "1234";

function pedirContraseña() {
  let intento;
  do {
    intento = prompt("Introduce la contraseña:");
    if (intento !== CONTRASEÑA_CORRECTA) {
      alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
  } while (intento !== CONTRASEÑA_CORRECTA);
  alert("¡Contraseña correcta! Bienvenido.");
}

pedirContraseña();
