import { List } from "../factories/factorie.js";
import { fetchIngredientInRecipes } from "../service/service.js";
import { closeAllList } from "./CloseFilter.js";
import { searchByFilter } from "./filterSearch.js";
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
  searchByFilter(filterRecipe, "list-blue");
}

