(function () {
  const numero = document.querySelector(".numero");
  const botonSustraccion = document.querySelector(".boton-sustraccion");
  const botonIncremento = document.querySelector(".boton-incremento");
  const contenedor = document.querySelector(".contenedor");

  let contador = 0;

  botonSustraccion.addEventListener("click", restar);
  botonIncremento.addEventListener("click", sumar);

  function restar() {
    contador--;

    numero.textContent = contador;

    if (contador < 0) {
      numero.style.color = "red";
      contenedor.style.boxShadow = "1px 1px 5px rgba(255, 0, 0, 0.562)";
    } else if (contador === 0) {
      numero.style.color = "black";
      contenedor.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.562)";
    }
  }

  function sumar() {
    contador++;

    numero.textContent = contador;

    if (contador > 0) {
      numero.style.color = "rgb(4, 214, 4)";
      contenedor.style.boxShadow = "1px 1px 5px rgba(0, 150, 0, 0.562)";
    } else if (contador === 0) {
      numero.style.color = "black";
      contenedor.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.562)";
    }
  }
})();
