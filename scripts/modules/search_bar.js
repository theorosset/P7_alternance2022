import { errorMessageIfSearchWithBar } from "./errorMessage.js"

export function search() {
  const h2All = Array.from(document.querySelectorAll('.recipe-title-time h2'))
  const input = document.querySelector('.search_bar')
  const section = document.querySelector("#section_recipes")

  input.addEventListener('keyup', (e) => {
    const string = e.target.value.toLowerCase()
    h2All.filter((h2) => {
      if(!h2.innerText.toLowerCase().includes(string) && input.value.length > 2 ){
        const parent = h2.closest('article')
        parent.remove()
      } else {
        const parent = h2.closest('article')
        section.appendChild(parent)
      }       
    })
    errorMessageIfSearchWithBar(section)
  })
}

