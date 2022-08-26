import { List } from "../factories/factorie.js"
import { fetchApplianceInRecipes } from "../service/service.js"


// function for display list of ingredients
export async function displayListAppliance(){
  const filterRecipes = document.querySelector(".filter_device")
  const allIngredient = await fetchApplianceInRecipes()
  console.log(allIngredient);
  filterRecipes.addEventListener("click", () => {
    new List(filterRecipes, allIngredient)
  })
}
