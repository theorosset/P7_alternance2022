export function searchInList(classList, filter) {
  const allLi = Array.from(document.querySelectorAll(`div .${classList} li`))
  const input = document.querySelector(`.${filter}`)

  input.addEventListener('keyup', (e) => {
    const string = e.target.value.toLowerCase()
    allLi.filter((li) => {
      if(!li.innerText.toLowerCase().includes(string)){
        li.remove()
      } else {
        document.querySelector(`div .${classList}`).appendChild(li)
      }
    })
  })
}
