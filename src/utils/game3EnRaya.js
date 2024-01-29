import { positions } from "../global/data/tresEnRaya.data";
import { getPlayer, getSelected, setPlayer, setSelected } from "../global/state";

export const initGame = () => {
  setPlayer("X")
  setSelected("reset")
  const currentPlayer = document.querySelector(".currentPlayer");
  currentPlayer.innerHTML = `CURRENT PLAYER: ${getPlayer()}`

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

const newMove = (e) => {
  const currentPlayer = document.querySelector(".currentPlayer");
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = getPlayer();
  e.target.removeEventListener("click", newMove);
  setSelected(getPlayer(), index)

  setTimeout(() => {
    checkIfIsThereWinner();
  }, [100]);
  setPlayer(getPlayer() === "X" ? "O" : "X")
  currentPlayer.innerHTML = `CURRENT PLAYER: ${getPlayer()}`
}

const checkIfIsThereWinner = () => {
  let playerLastMove = getPlayer() === "X" ? "O" : "X";

  const items = getSelected()
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (let pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("PLAYER '" + playerLastMove + "' WON!");
      initGame();
      return;
    }
  }

  if (getSelected().filter((item) => item).length === 9) {
    alert("TIED GAME!");
    initGame();
    return;
  }
}


