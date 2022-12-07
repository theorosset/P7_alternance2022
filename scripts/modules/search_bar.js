import { errorMessageIfSearchWithBar } from "./errorMessage.js";
import { textMatch } from "./searchByFilter.js";

export function search() {
	const input = document.querySelector(".search_bar");
	const section = document.querySelector("#section_recipes");


	input.addEventListener("keyup", (e) => {
		const searchValue = e.target.value.toLowerCase();
		let articles = Array.from(document.querySelectorAll(".recipe"))
			.filter((article) => !article.classList.contains("displayNone"));
		
		if (searchValue.length > 2) {
			let choices = [searchValue].concat(Array.from(document.querySelectorAll(".choice")));
			choices.forEach((choice) => {
				articles.forEach((article) => {
					textMatch(choice, article);
				});
			});
		}
		else if (searchValue.length === 0) {
			const choices = Array.from(document.querySelectorAll(".choice"));
			if (choices.length === 0) {
				const articles = document.querySelectorAll(".recipe");
				articles.forEach((article) => article.classList.toggle("displayNone", false));
			} else {
				choices.forEach((choice) => {
					articles.forEach((article) => {
						textMatch(choice, article);
					});
				});
			}
		}
		errorMessageIfSearchWithBar(section);
	});
}

