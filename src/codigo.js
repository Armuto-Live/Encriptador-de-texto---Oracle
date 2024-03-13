const d = document;

const $textTarea = d.querySelector(".text_tarea");
const $resultadoTitulo = d.querySelector(".mensaje-titulo");
const $mensajeDescripcion = d.querySelector(".mensaje-descripcion");
const $botonCopiar = d.querySelector(".boton-copiar");

d.addEventListener("click", (e) => {
  if (e.target.matches(".boton-encriptar")) {
    if ($textTarea.value.length === 0) {
      alert("Debes ingresar un texto");
      $resultadoTitulo.textContent = "Ningún mensaje fue encontrado";
      $mensajeDescripcion.textContent =
        "Ingresa el texto que desees encriptar o desencriptar.";
      $botonCopiar.setAttribute("type", "hidden");
    } else {
      $resultadoTitulo.textContent = "";
      const palabraACifrar = $textTarea.value.split("");
      
      for (let letra in palabraACifrar) {
        if (palabraACifrar[letra] === "a") {
            palabraACifrar[letra] = "ai";
        }
        if (palabraACifrar[letra] === "e") {
            palabraACifrar[letra] = "enter";
        }
        if (palabraACifrar[letra] === "i") {
            palabraACifrar[letra] = "imes";
        }
        if (palabraACifrar[letra] === "o") {
            palabraACifrar[letra] = "ober";
        }
        if (palabraACifrar[letra] === "u") {
            palabraACifrar[letra] = "ufat";
        }
      }
      
      $botonCopiar.setAttribute("type", "button");

      $mensajeDescripcion.textContent = palabraACifrar.join('');

    }
  }

});
