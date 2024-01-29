import { PrintButtonGame } from "../../components";
import { initGame } from "../../utils";
import "./TresEnRaya.css"

const template = () => `
  <div class="game-image">
    <img src="./images/monstruo.png" alt="monster">
  </div>
  <div class="game-container">
    <h1>3 EN RAYA</h1>
    <hr />
    <div class="game"></div>
    <h2 class="currentPlayer"></h2>
  </div>
`;

export const PrintTresEnRayaPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintButtonGame()
  initGame();
};


