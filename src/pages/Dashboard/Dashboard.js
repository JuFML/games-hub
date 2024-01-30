//Dashboard.js ------> src/pages/Dashboard/Dashboard.js
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img
            src="./images/3-en-raya.png"
            alt="go to hash"
          />
          <h2>3 EN RAYA</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {

  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  const navigateTresEnRaya = document.getElementById("navigateTresEnRaya");
  navigateTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });

  const navigateAhorcado = document.getElementById("navigateAhorcado");
  navigateAhorcado.addEventListener("click", () => {
    initControler("Ahorcado");
  });
};

export const printTemplateDashboard = () => {

  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";

  addEventListeners();
  getInfo();
};