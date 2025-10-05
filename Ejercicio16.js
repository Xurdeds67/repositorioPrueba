const persona = {
  nombre: "Carlos",
  edad: 25,
  profesion: "Programador",
  presentarse: function () {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
  }
};

persona.presentarse();
