const template = () => {
  let template = ""
  for (let i = 1; i < 10; i++) {
    template += `<button class="btn-game" data-i="${i}"></button>`
  }
  return template
}

export const PrintButtonGame = () => {
  document.querySelector(".game").innerHTML = template()
}

