//update list of ingredient
function updateListIngredient() {
	const choices = Array.from(document.querySelectorAll(".choice.list-blue"));
	const ingredients = document.querySelectorAll(".ingredient p strong");
	const listIngredients = document.querySelectorAll(".list-blue li");

	listIngredients.forEach((element) => element.classList.toggle("displayNone", false));

	let arrayIngredients = [];
	let arrayChoice = [];

	choices.forEach((choice) => arrayChoice.push(choice.innerText));

	ingredients.forEach((ingredient) => {
		if (!ingredient.closest("article").classList.contains("displayNone")) {
			arrayIngredients.push(ingredient.innerText.toLowerCase());
		}
	});

	arrayIngredients = [...new Set(arrayIngredients)];

	listIngredients.forEach((element) => {
		const textOfElement = element.innerText.toLowerCase();

		if (!arrayIngredients.includes(textOfElement) || arrayChoice.includes(textOfElement)) {
			element.classList.toggle("displayNone", true);
		}
	});
}

function updateListApplianceAndUstensil() {
	const articles = document.querySelectorAll("article");
	const listAppliance = document.querySelectorAll(".list-green li");
	const listUstensil = document.querySelectorAll(".list-red li");
	const choices = document.querySelectorAll(".choice.list-red, .choice.list-green");

	listAppliance.forEach((element) => element.classList.toggle("displayNone", false));
	listUstensil.forEach((element) => element.classList.toggle("displayNone", false));

	let arrayAppliance = [];
	let arrayChoice = [];
	let arrayUstensils = [];

	choices.forEach((choice) => arrayChoice.push(choice.innerText.toLowerCase()));

	articles.forEach((article) => {
		if (!article.classList.contains("displayNone")) {
			arrayAppliance.push(article.getAttribute("data-appliance").toLowerCase());

			article.getAttribute("data-ustensil").split(",").forEach((ustensil) => arrayUstensils.push(ustensil.toLowerCase()));
		}
	});

	arrayAppliance = [...new Set(arrayAppliance)];
	arrayUstensils = [...new Set(arrayUstensils)];

	listAppliance.forEach((element) => {
		const textOfElement = element.innerText.toLowerCase();

		if (!arrayAppliance.includes(textOfElement) || arrayChoice.includes(textOfElement)) {
			element.classList.toggle("displayNone", true);
		}
	});

	listUstensil.forEach((element) => {
		const textOfElement = element.innerText.toLowerCase();

		if (!arrayUstensils.includes(textOfElement) || arrayChoice.includes(textOfElement)) {
			element.classList.toggle("displayNone", true);
		}
	});
}

export function updateAllList() {
	updateListIngredient();
	updateListApplianceAndUstensil();
}
