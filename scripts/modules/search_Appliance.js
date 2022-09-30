import { List } from '../factories/factorie.js'
import { fetchApplianceInRecipes } from '../service/service.js'
import { closeAllList } from './CloseFilter.js'
import { searchInListOfFilter } from "./searchInFilterList.js";

// function for display list of ingredients
export async function displayListAppliance() {
  const filterDevice = document.querySelector('.filter_device')
  const allIngredient = await fetchApplianceInRecipes()

  new List(filterDevice, allIngredient)

  const ul = document.querySelector('.list-green')
  
  filterDevice.addEventListener('click', () => {
    ul.classList.toggle('displayNone')
    filterDevice.style.width = '667px'
    closeAllList('device')
  })
  searchInListOfFilter(filterDevice, 'list-green')
}