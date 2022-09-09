import { List } from '../factories/factorie.js'
import { fetchApplianceInRecipes, fetchIngredientInRecipes, fetchUstensilsInRecipes } from '../service/service.js'
import { closeAllList } from './CloseFilterList.js'
import { searchInList } from "./searchInFilterList.js"

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
  searchInList('list-green', 'filter_device')
}

// function for display list of ustensil
export async function displayListUstensil() {
  const filterUstensil = document.querySelector(".filter_utensil");
  const allIngredient = await fetchUstensilsInRecipes();
  new List(filterUstensil, allIngredient);
  const ul = document.querySelector(".list-red");

  filterUstensil.addEventListener("click", () => {
    ul.classList.toggle("displayNone");
    filterUstensil.style.width = "667px";//ajouter une class a la place
    closeAllList("ustensil");
  });
    searchInList('list-red', 'filter_utensil')
}




// function for display list of ingredients
export async function displayListIngredient() {
  const filterRecipe = document.querySelector(".filter_recipes");
  const allIngredient = await fetchIngredientInRecipes();
  new List(filterRecipe, allIngredient);
  const ul = document.querySelector(".list-blue");
  filterRecipe.addEventListener("click", () => {
    ul.classList.toggle("displayNone");
    filterRecipe.style.width = "667px";
    closeAllList("ingredient");
  });
  searchInList('list-blue', 'filter_recipes')
}