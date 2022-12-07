
export class Article {
	constructor(recipes) {
		const {
			appliance,
			description,
			ingredients,
			name,
			serving,
			time,
			ustensils,
		} = recipes;

		//selector in dom
		const section = document.querySelector("#section_recipes");

		//create element
		const article = document.createElement("article");
		const a = document.createElement("a");
		const divImageFutur = document.createElement("div");
		const divCardBottom = document.createElement("div");
		const divRecipeIngredient = document.createElement("div");
		const divIngredient = document.createElement("div");
		const divRecipeTitleTime = document.createElement("div");
		const pTime = document.createElement("p");
		const pRecip = document.createElement("p");
		const h2 = document.createElement("h2");
		const divRecipLogic = document.createElement("div");
		//add class
		article.classList.add("recipe");
		divImageFutur.classList.add("recipe-image-futur");
		divCardBottom.classList.add("recipe_card-bottom");
		divRecipeIngredient.classList.add("recipe-ingredient");
		divIngredient.classList.add("ingredient");
		divRecipeTitleTime.classList.add("recipe-title-time");
		divRecipLogic.classList.add("recipe-logic");
    
		//set attribut
		a.setAttribute("src", "#");
		article.setAttribute("data-ustensil", ustensils);
		article.setAttribute("data-appliance",appliance);
		//set innerText
		h2.innerText = name;
		pTime.innerHTML = `<strong> ${time} min <strong/>`;
		pRecip.innerText = description;

		//append child
		section.appendChild(article);
		article.appendChild(a);
		a.appendChild(divImageFutur);
		a.appendChild(divCardBottom);
		divCardBottom.appendChild(divRecipeTitleTime);
		divCardBottom.appendChild(divRecipeIngredient);
		divRecipeTitleTime.appendChild(h2);
		divRecipeTitleTime.appendChild(pTime);
		divRecipeIngredient.appendChild(divIngredient);
		divRecipeIngredient.appendChild(divRecipLogic);
		divRecipLogic.appendChild(pRecip);

		ingredients.forEach(({ ingredient, quantity, unit }) => {
			const p = document.createElement("p");
			p.innerHTML = `<strong>${ingredient}</strong>: ${quantity ? quantity : ""}${unit ? unit : ""}`;
			divIngredient.appendChild(p);
		});
	}
}
export class List{
	constructor(input, elementRecipe){
		const parent = input.parentNode;
		const ul = document.createElement("ul");
		ul.classList.add("list");
		ul.classList.add("displayNone");

		if(input.classList.value === "filter filter_recipes"){
			ul.classList.add("list-blue");
		}
		if(input.classList.value === "filter filter_utensil"){
			ul.classList.add("list-red");
		}
		if(input.classList.value === "filter filter_device"){
			ul.classList.add("list-green");
		}
    
		parent.insertBefore(ul, input.nextSibling);
		for(let i = 0; i < elementRecipe.length; i++){
			const li = document.createElement("li");
			li.innerText = elementRecipe[i];
			ul.appendChild(li);
		}
	}
}
 