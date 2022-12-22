//update list of ingredient
function updateListIngredient() {
	const choices = Array.from(document.querySelectorAll(".choice.list-blue"));
	const ingredients = document.querySelectorAll(".ingredient p strong");
	const listIngredients = document.querySelectorAll(".list-blue li");

	for (let i = 0; i < listIngredients.length; i++) {
		listIngredients[i].classList.toggle("displayNone", false);
	}
	let arrayChoice = [];
	let arrayIngredients = [];

	for(let i = 0; i < choices.length; i++) {
		arrayChoice.push(choices[i].innerText.toLowerCase());
	}
	for(let i = 0; i < ingredients.length; i++) {
		if (!ingredients[i].closest("article").classList.contains("displayNone")) {
			arrayIngredients.push(ingredients[i].innerText.toLowerCase());
		}
	}
	arrayIngredients = [...new Set(arrayIngredients)];

	for(let i = 0; i < listIngredients.length; i++) {
		const textOfElement = listIngredients[i].innerText.toLowerCase();
		if (!arrayIngredients.includes(textOfElement) || arrayChoice.includes(textOfElement)) {
			listIngredients[i].classList.toggle("displayNone", true);
		}
	}
}

function updateListApplianceAndUstensil() {
	const articles = document.querySelectorAll("article");
	const listAppliance = document.querySelectorAll(".list-green li");
	const listUstensil = document.querySelectorAll(".list-red li");
	const choices = document.querySelectorAll(".choice.list-red, .choice.list-green");

	for(let i = 0; i < listAppliance.length; i++) {
		listAppliance[i].classList.toggle("displayNone", false);
	}
	for(let i = 0; i < listUstensil.length; i++) {
		listUstensil[i].classList.toggle("displayNone", false);
	}

	let arrayAppliance = [];
	let arrayChoice = [];
	let arrayUstensils = [];

	for(let i = 0; i < choices.length; i++) {
		arrayChoice.push(choices[i].innerText.toLowerCase());
	}

	for(let i = 0; i < articles.length; i++) {
		const article = articles[i];

		if (!article.classList.contains("displayNone")) {
			arrayAppliance.push(article.getAttribute("data-appliance").toLowerCase());
			const ustensils = article.getAttribute("data-ustensil").split(",");
			
			for(let j = 0; j < ustensils.length; j++) {
				const ustensil = ustensils[j];
				arrayUstensils.push(ustensil.toLowerCase());
			}
		}
	}

	arrayAppliance = [...new Set(arrayAppliance)];
	arrayUstensils = [...new Set(arrayUstensils)];
	
	for(let i = 0; i < listAppliance.length; i++) {
		const textOfElement = listAppliance[i].innerText.toLowerCase();

		if (!arrayAppliance.includes(textOfElement) || arrayChoice.includes(textOfElement)) {
			listAppliance[i].classList.toggle("displayNone", true);
		}
	}

	for(let i = 0; i < listUstensil.length; i++) {
		const textOfElement = listUstensil[i].innerText.toLowerCase();
		
		if (!arrayUstensils.includes(textOfElement) || arrayChoice.includes(textOfElement)) {
			listUstensil[i].classList.toggle("displayNone", true);
		}
	}
}

export function updateAllList() {
	updateListIngredient();
	updateListApplianceAndUstensil();
}
