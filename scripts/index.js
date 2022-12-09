import { Article } from "./factories/factorie.js";
import { fetchRecipes } from "./service/service.js";
import { search } from "./modules/searchBar.js";
import { displayListIngredient } from "./modules/displayList/searchIngredient.js";
import { displayListUstensil } from "./modules/displayList/searchUstensils.js";
import { displayListAppliance } from "./modules/displayList/searchAppliance.js";
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
