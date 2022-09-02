import { List } from "../factories/factorie.js";
import { fetchUstensilsInRecipes } from "../service/service.js";
import { closeAllList } from "./CloseFilter.js";
import { searchByFilter } from "./filterSearch.js";

// function for display list of ustensil
export async function displayListUstensil() {
  const filterUstensil = document.querySelector(".filter_utensil");
  const allIngredient = await fetchUstensilsInRecipes();
  new List(filterUstensil, allIngredient);
  const ul = document.querySelector(".list-red");

  filterUstensil.addEventListener("click", () => {
    ul.classList.toggle("displayNone");
    filterUstensil.style.width = "667px";
    closeAllList("ustensil");
  });
    searchByFilter(filterUstensil, "list-red");
}

