let selected = []
export const getSelected = () => selected
export const setSelected = (data, index) => {
  if (data === "reset") {
    selected = []
  } else {
    selected[index] = data
  }
}

let player = "X";
export const getPlayer = () => player
export const setPlayer = (data) => player = data
