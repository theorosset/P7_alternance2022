export function search() {
  const h2All = Array.from(document.querySelectorAll('.recipe-title-time h2'))
  const input = document.querySelector('.search_bar')

  input.addEventListener('keyup', (e) => {
    const string = e.target.value.toLowerCase()
    h2All.filter((h2) => {
      if(!h2.innerText.toLowerCase().includes(string)){
        const parent = h2.closest('article')
        parent.remove()
      } else {
        const section = document.querySelector("#section_recipes")
        const parent = h2.closest('article')
        section.appendChild(parent)
      }
    })
  })
}

