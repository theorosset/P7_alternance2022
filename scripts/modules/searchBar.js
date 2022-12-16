import { displayErrorMessage } from "./errorMessage.js";
import { getRecipesMatch } from "./searchByFilter.js";

/**
 * this function update recipes in two time 
 * @param {string} searchValue
 */
export function updateRecipes(searchValue) {
	let choices = Array.from(document.querySelectorAll(".choice"));
	let articles = Array.from(document.querySelectorAll(".recipe"));
	let articlesWithoutDisplayNone = [];

	for(let i = 0; i < articles.length; i++) {
		const article = articles[i];
		article.classList.toggle("displayNone", false);
	}
	
	if (choices.length === 0) {
		for(let i = 0; i < articles.length; i++) {
			const article = articles[i];
			article.classList.toggle("displayNone", false);
		}
	} else {
		updateRecipesByFilter(choices, articles);
	}

	for(let i = 0; i < articles.length; i++) {
		const article = articles[i];
		if (!article.classList.contains("displayNone")) {
			articlesWithoutDisplayNone.push(article);
		}
	}

	if (String(searchValue).trim() !== "") {
		for(let i = 0; i < [searchValue].length; i++) {
			const choice = [searchValue][i];
			for(let j = 0; j < articles.length; j++) {
				const article = articles[j];
				getRecipesMatch(choice, article);
			}
		}
		let	articlesWithoutDisplayNone = [];

		for(let i = 0; i < articles.length; i++) {
			const article = articles[i];
			if (!article.classList.contains("displayNone")) {
				articlesWithoutDisplayNone.push(article);
			}
		}
		// articles = Array.from(document.querySelectorAll(".recipe"))
		// 	.filter((article) => !article.classList.contains("displayNone"));

		if (choices.length === 0) {
			for(let i = 0; i < articlesWithoutDisplayNone.length; i++) {
				const article = articlesWithoutDisplayNone[i];
				article.classList.toggle("displayNone", false);
			}
		} else {
			updateRecipesByFilter(choices, articlesWithoutDisplayNone);
		}
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
	for (let i = 0; i < choices.length; i++) {
		let articlesWithoutDisplayNone = [];
		const choice = choices[i];
		for (let j = 0; j < articles.length; j++) {
			const article = articles[j];
			if (!article.classList.contains("displayNone")) {
				articlesWithoutDisplayNone.push(article);
			}
		}
		for(let k = 0; k < articlesWithoutDisplayNone.length; k++) {
			const articleWithoutDisplayNone =  articlesWithoutDisplayNone[k];
			getRecipesMatch(choice, articleWithoutDisplayNone, getDataName(choice));
		}
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
		displayErrorMessage();
	});
}
