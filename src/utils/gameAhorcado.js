import { letras, palabras } from "../global/data/ahorcado.data";
import { getCont, getOculta, getPalabra, getRand, resetOculta, setCont, setOculta, setPalabra, setRand } from "../global/state/ahorcado.state";
import { PrintAhorcadoPage } from "../pages/Ahorcado/Ahorcado";

export const desableBtns = () => {
  const buttons = document.getElementsByClassName('letra')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  const btnPista = document.getElementById('pista')
  btnPista.disabled = true;
}

const enableBtnsLetters = () => {
  const buttons = document.getElementsByClassName('letra')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  const btnPista = document.getElementById('pista')
  btnPista.disabled = false;
}

const generaPalabra = () => {
  setRand()
  let rand = getRand()
  setPalabra(palabras[rand][0].toUpperCase())
}

const pintarGuiones = (num) => {
  for (var i = 0; i < num; i++) {
    setOculta(i, "_")
  }
  const hueco = document.getElementById("palabra");
  hueco.innerHTML = getOculta().join("");
}

export const generaABC = () => {
  document.getElementById("abcdario").innerHTML = "";
  letras.forEach((item, i) => {
    let letra = item.toUpperCase()
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' class='letra' id='" + letra + "'>" + letra + "</button>";
  })
}

const compruebaFin = () => {
  if (getOculta().indexOf("_") == -1) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";

    desableBtns()

    document.getElementById("reset").innerHTML = "Empezar";

    const btnInicio = document.getElementById("reset")
    btnInicio.onclick = function () { PrintAhorcadoPage() };
  } else if (getCont() == 0) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";

    desableBtns()

    document.getElementById("reset").innerHTML = "Empezar";
    const btnInicio = document.getElementById("reset")
    btnInicio.onclick = function () { PrintAhorcadoPage() };
  }
}

export const pista = () => {
  let rand = getRand()
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}


export const intento = (letra) => {
  document.getElementById(letra).disabled = true;
  if (getPalabra().indexOf(letra) != -1) {
    for (var i = 0; i < getPalabra().length; i++) {
      if (getPalabra()[i] == letra) {
        let oculta = getOculta()
        // oculta[i] = letra
        // console.log(oculta)
        setOculta(i, letra)
      }
    }
    const hueco = document.getElementById("palabra");
    hueco.innerHTML = getOculta().join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  } else {
    let cont = getCont()
    setCont(cont - 1)
    document.getElementById("intentos").innerHTML = getCont();
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image" + getCont()).className += "fade-in";
  }
  compruebaFin();
  setTimeout(function () {
    document.getElementById("acierto").className = "";
  }, 800);
}

export const inicio = () => {
  resetOculta()
  setCont(6)
  generaPalabra();
  enableBtnsLetters()
  pintarGuiones(getPalabra().length);
  document.getElementById("intentos").innerHTML = getCont()
}