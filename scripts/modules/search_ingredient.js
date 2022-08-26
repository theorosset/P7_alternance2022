import { List } from "../factories/factorie.js"
import { fetchIngredientInRecipes } from "../service/service.js"


// function for display list of ingredients
export async function displayListIngredient(){
  const filterRecipes = document.querySelector(".filter_recipes")
  const allIngredient = await fetchIngredientInRecipes()
  console.log(allIngredient);
  filterRecipes.addEventListener("click", () => {
    new List(filterRecipes, allIngredient)
  })
}
