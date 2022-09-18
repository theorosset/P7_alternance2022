import { List } from '../factories/factorie.js'
import { fetchApplianceInRecipes } from '../service/service.js'
import { searchByFilter } from './filterSearch.js'

// function for display list of ingredients
export async function displayListAppliance() {
  const filterDevice = document.querySelector('.filter_device')
  const allIngredient = await fetchApplianceInRecipes()

  new List(filterDevice, allIngredient)

  const ul = document.querySelector('.list-green')

  filterDevice.addEventListener('click', () => {
    ul.classList.remove('displayNone')
    filterDevice.style.width = '667px'
  })
  
  filterDevice.addEventListener('blur', () => {
    ul.classList.add('displayNone')
    filterDevice.style.width = ''
  })
  searchByFilter(filterDevice, 'list-green')
}
