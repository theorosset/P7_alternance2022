import { Article } from "./factories/factorie.js";
import { fetchRecipes } from "./service/service.js";
import { search } from "./modules/searchBar.js";
import { displayListAppliance, displayListIngredient, displayListUstensil } from "./modules/displayFilterList.js";
import { addFilter} from "./modules/searchByFilter.js";

async function main (){
	const data = await fetchRecipes();
	data.recipes.forEach(recipe => {
		new Article(recipe);
	});
	await displayListAppliance();
	await displayListIngredient();
	await displayListUstensil();
	addFilter();
	search();
}

main();