import { displayErrorMessage } from "./errorMessage.js";
import { getRecipesMatch } from "./searchByFilter.js";
import { updateAllList } from "./updateFilterList.js";

/**
 * this function update recipes in two time 
 * @param {string} searchValue
 */
export function updateRecipes(searchValue) {
	let choices = Array.from(document.querySelectorAll(".choice"));
	let articles = Array.from(document.querySelectorAll(".recipe"));

	articles.forEach(article => article.classList.toggle("displayNone", false));
	
	updateRecipesByFilter(choices, articles);

	articles = Array.from(document.querySelectorAll(".recipe"))
		.filter((article) => !article.classList.contains("displayNone"));

	if (String(searchValue).trim() !== "") {
		articles = Array.from(document.querySelectorAll(".recipe"));
		[searchValue].forEach((choice) => {
			articles.forEach((article) => {
				getRecipesMatch(choice, article);
			});
		});

		articles = Array.from(document.querySelectorAll(".recipe"))
			.filter((article) => !article.classList.contains("displayNone"));

		updateRecipesByFilter(choices, articles);
	}
}

/**
 * this function return data-attribute use for search
 * @param { Object } choice 
 * @returns { String } return data attribute
 */
function getDataName(choice) {
	let dataAttribute = "";
	if (typeof choice === "object") {
		if(choice.classList.contains("list-red") || choice.classList.contains("list-green")) {
			dataAttribute = choice.classList.contains("list-red") ? "data-ustensil" : "data-appliance";
		}
	}
	return dataAttribute;
}

//update
function updateRecipesByFilter(choices, articles) {
	if (choices.length === 0) {
		articles.forEach((article) => article.classList.toggle("displayNone", false));
	} else {
		choices.forEach((choice) => {
			articles = Array.from(document.querySelectorAll(".recipe"))
				.filter((article) => !article.classList.contains("displayNone"));
			articles.forEach((article) => {
				getRecipesMatch(choice, article, getDataName(choice));
			});
		});
	}
}

/**
 * function search with search bar
 */
export function search() {
	const input = document.querySelector(".search_bar");

	input.addEventListener("input", (e) => {
		const searchValue = e.target.value.toLowerCase();
		if (searchValue.length > 2) {
			updateRecipes(searchValue);
		} else if (searchValue.length === 0) {
			updateRecipes("");
		}
		updateAllList();
		displayErrorMessage();
	});
}
