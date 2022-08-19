import { article } from "./factories/factorie.js";
import { fetchRecipes } from "./service/service.js";


async function main (){
    const data = await fetchRecipes()
    
    data.recipes.forEach(recipe => {
        new article(recipe)
    });
    
}
main()