import { Article } from "./factories/factorie.js";
import { fetchRecipes } from "./service/service.js";
import { search } from "./modules/search_bar.js";
import { displayListIngredient } from "./modules/search_ingredient.js";
import { displayListUstensil } from "./modules/search_ustensils.js";
import { displayListAppliance } from "./modules/search_appliance.js";
import { addAndSearchFilter } from "./modules/searchByFilter.js";


async function main() {
	const data = await fetchRecipes();
	for (let i = 0; i < data.recipes.length; i++ ) {
		const recipe = data.recipes[i];
		new Article(recipe);
		console.log("oui");
	}
	search();
	await displayListIngredient();
	await displayListUstensil();
	await displayListAppliance();
	addAndSearchFilter();
}

main();
