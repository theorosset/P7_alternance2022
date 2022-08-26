import { article } from "./factories/factorie.js";
import { fetchRecipes } from "./service/service.js";
import { search } from './modules/search_bar.js'

async function main() {
  const data = await fetchRecipes();
  data.recipes.forEach((recipe) => {
    new article(recipe);
  });
  search();
}

main();
