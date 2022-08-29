import { List } from "../factories/factorie.js";
import { fetchUstensilsInRecipes } from "../service/service.js";
import { closeAllList } from "./CloseFilter.js";

// function for display list of ustensil
export async function displayListUstensil() {
  const filterUstensils = document.querySelector(".filter_utensil");
  const allIngredient = await fetchUstensilsInRecipes();
  new List(filterUstensils, allIngredient);
  const ul = document.querySelector(".list-red");

  filterUstensils.addEventListener("click", () => {
    ul.classList.toggle("displayNone");
    filterUstensils.style.width = "667px";
    closeAllList("ustensil");
  });
}

