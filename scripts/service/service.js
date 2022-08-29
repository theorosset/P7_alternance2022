
export async function fetchRecipes() {
  return await fetch("./recipes.json")
  .then((res) => {
    return res.json();
  })
}

export async function fetchIngredientInRecipes(){
  return await fetch("./recipes.json")
  .then((res) => {
   return  res.json(); 
  }).then((data)=>{
    let arrayIngredients = [];
    data.recipes.forEach(recipe => recipe.ingredients.forEach(ingredient =>  arrayIngredients.push(ingredient.ingredient)));
    arrayIngredients =  [...new Set(arrayIngredients)]
    return arrayIngredients
  })
}


export async function fetchUstensilsInRecipes(){
  return await fetch("./recipes.json")
  .then((res) => {
   return  res.json(); 
  }).then((data)=>{
    let arrayUstensils = [];
    data.recipes.forEach(recipe => recipe.ustensils.forEach(ustensil =>  arrayUstensils.push(ustensil)));
    arrayUstensils =  [...new Set(arrayUstensils)]
    return arrayUstensils
  })
}

export async function fetchApplianceInRecipes(){
  return await fetch("./recipes.json")
  .then((res) => {
   return  res.json(); 
  }).then((data)=>{
    let arrayAppliance = [];
    data.recipes.forEach(recipe => arrayAppliance.push(recipe.appliance));
    console.log(arrayAppliance);
   arrayAppliance = [...new Set(arrayAppliance)]
    return arrayAppliance
  })
}