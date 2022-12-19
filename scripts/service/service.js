//get all data
export async function fetchRecipes() {
	return await fetch("./recipes.json")
		.then((res) => {
			return res.json();
		})
		.catch(err => {
			return console.error(err);
		});
}
// get ingredients data
export async function fetchIngredientInRecipes(){
	return await fetch("./recipes.json")
		.then((res) => {
			return  res.json(); 
		}).then((data)=>{
			let arrayIngredients = [];
			data.recipes.forEach(recipe => recipe.ingredients.forEach(ingredient =>  arrayIngredients.push(ingredient.ingredient.toLowerCase())));
			arrayIngredients =  [...new Set(arrayIngredients)];
			return arrayIngredients;
		})
		.catch(err => {
			return console.error(err);
		});
}
// get ustensils data
export async function fetchUstensilsInRecipes(){
	return await fetch("./recipes.json")
		.then((res) => {
			return  res.json(); 
		}).then((data)=>{
			let arrayUstensils = [];
			data.recipes.forEach(recipe => recipe.ustensils.forEach(ustensil =>  arrayUstensils.push(ustensil.toLowerCase())));
			arrayUstensils =  [...new Set(arrayUstensils)];
			return arrayUstensils;
		})
		.catch(err => {
			return console.error(err);
		});
}
//get appliance data
export async function fetchApplianceInRecipes(){
	return await fetch("./recipes.json")
		.then((res) => {
			return  res.json(); 
		}).then((data)=>{
			let arrayAppliance = [];
			data.recipes.forEach(recipe => arrayAppliance.push(recipe.appliance));
			arrayAppliance = [...new Set(arrayAppliance)];
			return arrayAppliance;
		})
		.catch(err => {
			return console.error(err);
		});
}
