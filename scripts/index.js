import { Article } from './factories/factorie.js'
import { fetchRecipes } from './service/service.js'
import { search } from './modules/search_bar.js'
import { displayListIngredient } from './modules/search_ingredient.js'
import { displayListUstensil } from './modules/search_ustensils.js'
import { displayListAppliance } from './modules/search_appliance.js'


async function main() {
  const data = await fetchRecipes()
  data.recipes.forEach((recipe) => {
    new Article(recipe)
  })
  search()
  await displayListIngredient()
  await displayListUstensil()
  await displayListAppliance()
}

main()
