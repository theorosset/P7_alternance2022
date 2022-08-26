import { List } from "../factories/factorie.js"
import { fetchUstensilsInRecipes } from "../service/service.js"


// function for display list of ustensil 
export async function displayListUstensil(){
  const filterUstensils = document.querySelector(".filter_utensil")
  const allIngredient = await fetchUstensilsInRecipes()
  filterUstensils.addEventListener("click", () => {
    new List(filterUstensils, allIngredient)
  })
}
