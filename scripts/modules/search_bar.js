import { displayErrorMessage } from "./errorMessage.js";
import { getRecipesMatch } from "./searchByFilter.js";

export function updateRecipes(searchValue) {
	const articles = Array.from(document.querySelectorAll(".recipe"));
	let choices = Array.from(document.querySelectorAll(".choice"));
	let articlesWithoutDisplayNone = [];

	if (choices.length === 0) {
		for(let i = 0; i < articles.length; i++) {
			const article = articles[i];
			article.classList.toggle("displayNone", false);
		}
	} else {
		for(let i = 0; i < choices.length; i++) {
			const choice = choices[i];
			for(let i = 0; i < articles.length; i++) {
				const article = articles[i];
				getRecipesMatch(choice, article);
			}
		}
	}
	for(let i = 0; i < articles.length; i++) {
		const article = articles[i];
		if(!article.classList.contains("displayNone")) {
			articlesWithoutDisplayNone.push(article);
		}
	}
	if (String(searchValue).trim() === "undefined") {
		articlesWithoutDisplayNone = [];
		for(let i = 0; i < articles.length; i++) {
			const article = articles[i];
			if(!article.classList.contains("displayNone")) {
				articlesWithoutDisplayNone.push(article);
			}
		}
	} else {
		for (let i = 0; i < [searchValue].length; i++) {
			const choice = [searchValue][i];
			for (let i = 0; i < articlesWithoutDisplayNone.length; i++ ) {
				const article = articlesWithoutDisplayNone[i];
				getRecipesMatch(choice, article);
			}
		}
	}
}


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
