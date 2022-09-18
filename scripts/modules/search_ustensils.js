import { List } from '../factories/factorie.js'
import { fetchUstensilsInRecipes } from '../service/service.js'
import { searchByFilter } from './filterSearch.js'

// function for display list of ustensil
export async function displayListUstensil() {
  const filterUstensil = document.querySelector('.filter_utensil')
  const allIngredient = await fetchUstensilsInRecipes()
  new List(filterUstensil, allIngredient)
  const ul = document.querySelector('.list-red')

  filterUstensil.addEventListener('focus', () => {
    ul.classList.remove('displayNone')
    filterUstensil.style.width = '667px' //ajouter une class a la place
  })

  filterUstensil.addEventListener('blur', () => {
    ul.classList.add('displayNone')
    filterUstensil.style.width = '' //ajouter une class a la place
  })

  searchByFilter(filterUstensil, 'list-red')
}
