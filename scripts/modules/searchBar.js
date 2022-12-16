import { displayErrorMessage } from "./errorMessage.js";
import { getRecipesMatch } from "./searchByFilter.js";

/**
 * this function update recipes in two time 
 * @param {string} searchValue
 */
export function updateRecipes(searchValue) {
	let choices = Array.from(document.querySelectorAll(".choice"));
	let articles = Array.from(document.querySelectorAll(".recipe"));

	//one time check choice
	if (choices.length === 0) {
		articles.forEach((article) => article.classList.toggle("displayNone", false));
	} else {
		choices.forEach((choice) => {
			articles.forEach((article) => {
				articles = Array.from(document.querySelectorAll(".recipe"))
					.filter((article) => !article.classList.contains("displayNone"));

				getRecipesMatch(choice, article);
			});
		});
	}

	//two time check search bar value
	if (String(searchValue).trim() === "undefined" || String(searchValue).trim() === "" ) {
		articles = Array.from(document.querySelectorAll(".recipe"))
			.filter((article) => !article.classList.contains("displayNone"));
	} else {
		[searchValue].forEach((choice) => {
			articles.forEach((article) => {
				getRecipesMatch(choice, article);
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
			updateRecipes();
		}
		displayErrorMessage();
	});
}
