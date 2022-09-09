import { Article } from "./factories/factorie.js";
import { fetchRecipes } from "./service/service.js";
import { search } from "./modules/search_bar.js"
import { displayListAppliance, displayListIngredient, displayListUstensil } from "./modules/displayFilterList.js"


async function main (){
    const data = await fetchRecipes()
    data.recipes.forEach(recipe => {
        new Article(recipe)
    });
    search()
    await displayListAppliance()
    await displayListIngredient()
    await displayListUstensil()
}
main()