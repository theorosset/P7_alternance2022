import { List } from "../factories/factorie.js"
import { fetchIngredientInRecipes } from "../service/service.js"
import { closeAllList } from "./CloseFilter.js";

// function for display list of ingredients
export async function displayListIngredient(){
  const filterRecipes = document.querySelector(".filter_recipes")
  const allIngredient = await fetchIngredientInRecipes()
  new List(filterRecipes, allIngredient)
  const ul = document.querySelector(".list-blue")
  filterRecipes.addEventListener("click", () => {
    ul.classList.toggle("displayNone");
    filterRecipes.style.width = '667px'
    closeAllList('ingredient')
  })
}
