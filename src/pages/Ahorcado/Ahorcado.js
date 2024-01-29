import "./Ahorcado.css"
import { desableBtns, generaABC, inicio, intento, pista } from "../../utils/gameAhorcado"

const template = () => `
  <div class="main-container">
    <h1 class="titulo">Juego del ahorcado</h1>
    <h1 id="msg-final"></h1>
    <h3 id="acierto"></h3>
    <div class="no-wrap">
      <h2 class="palabra" id="palabra"></h2>
      <picture>
        <img src="images/ahorcado_6.png" alt="" id="image6">
        <img src="images/ahorcado_5.png" alt="" id="image5">
        <img src="images/ahorcado_4.png" alt="" id="image4">
        <img src="images/ahorcado_3.png" alt="" id="image3">
        <img src="images/ahorcado_2.png" alt="" id="image2">
        <img src="images/ahorcado_1.png" alt="" id="image1">
        <img src="images/ahorcado_0.png" alt="" id="image0">
      </picture>
    </div>
    <div class="flex-row" id="turnos">
      <div class="col">
        <h3>Intentos restantes: <span id="intentos">6</span></h3>
      </div>
      <div class="col">
        <button id="reset">Elegir otra palabra</button>
        <button id="pista">Dame una pista!</button>
        <span id="hueco-pista"></span>
      </div>
    </div>
    <div class="flex-row">
      <div class="col">
        <div class="flex-row" id="abcdario">
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
`
const addEvents = () => {
  document.querySelector("#reset").addEventListener("click", inicio)

  document.querySelectorAll(".letra").forEach(item => {
    item.addEventListener("click", (e) => intento(e.target.id))
  })
  document.querySelector("#pista").addEventListener("click", pista)
}

export const PrintAhorcadoPage = () => {
  document.querySelector("main").innerHTML = template()
  generaABC()
  desableBtns()
  addEvents()
}
