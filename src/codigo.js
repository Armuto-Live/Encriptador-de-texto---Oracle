const d = document;

const $textTarea = d.querySelector(".text_tarea");
const $resultadoTitulo = d.querySelector(".mensaje-titulo");
const $mensajeDescripcion = d.querySelector(".mensaje-descripcion");
const $botonCopiar = d.querySelector(".boton-copiar");

let textoMinuscula = false;

const cifrarPalabra = (palabraACifrar) => {
  const cifradoMap = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  const palabraCrifrada = palabraACifrar
    .split("")
    .map((letra) => cifradoMap[letra] || letra)
    .join("");

  return palabraCrifrada;
};

const descifrarPalabra = (palabraCifrada) => {
  for (const palabra in palabraCifrada.split(" ")) {
    palabraCifrada = palabraCifrada.replace(/ai/, "a");
    palabraCifrada = palabraCifrada.replace(/enter/, "e");
    palabraCifrada = palabraCifrada.replace(/imes/, "i");
    palabraCifrada = palabraCifrada.replace(/ober/, "o");
    palabraCifrada = palabraCifrada.replace(/ufat/, "u");
  }

  return palabraCifrada;
};

const inputVacio = () => {
  $resultadoTitulo.textContent = "Ningún mensaje fue encontrado";
  $mensajeDescripcion.textContent =
    "Ingresa el texto que desees encriptar o desencriptar.";
};

const validarTexto = (texto) => {
  const formato = /^[a-z]+$/;
  if (formato.test(texto)) {
    textoMinuscula = true;
  } else {
    alert("Solo debes ingresar texto en minuscula");
    textoMinuscula = false;
  }
  console.log(textoMinuscula);
  return textoMinuscula;
};
d.addEventListener("click", (e) => {
  if (e.target.matches(".boton-encriptar")) {
    if ($textTarea.value.length === 0) {
      inputVacio();
      $botonCopiar.setAttribute("type", "hidden");
    } else if (!validarTexto($textTarea.value)) {
      $resultadoTitulo.textContent = "Ningún mensaje fue encontrado";
      $mensajeDescripcion.textContent =
        "Ingresa el texto que desees encriptar o desencriptar.";
    } else {
      $resultadoTitulo.textContent = "";

      $botonCopiar.setAttribute("type", "button");
      $mensajeDescripcion.textContent = cifrarPalabra($textTarea.value);
    }
  }

  if (e.target.matches(".boton-desencriptar")) {
    if ($textTarea.value.length === 0) {
      inputVacio();
      $botonCopiar.setAttribute("type", "hidden");
    } else if (!validarTexto($textTarea.value)) {
      $resultadoTitulo.textContent = "Ningún mensaje fue encontrado";
      $mensajeDescripcion.textContent =
        "Ingresa el texto que desees encriptar o desencriptar.";
    } else {
      $resultadoTitulo.textContent = "";

      $botonCopiar.setAttribute("type", "button");
      $mensajeDescripcion.textContent = descifrarPalabra($textTarea.value);
    }
  }

  if (e.target.matches(".boton-copiar")) {
    navigator.clipboard.writeText($mensajeDescripcion.textContent);
  }
});
