import { displayErrorMessage } from "./errorMessage.js";
import { updateRecipes } from "./searchBar.js";
//add filter in section filterChoice
export function addFilter() {
	const allLi = document.querySelectorAll(".list li");

	let elements = {
		articles: [],
		ingredients: [],
		"list-red": [],
		"list-green": [],
		"list-blue": [],
	};

	allLi.forEach((li) => {
		li.addEventListener("click", (event) => {
			if (event.target.closest("ul")) {
				const parentClass = event.target.closest("ul").classList.value;
				const parentClassPart = parentClass.split(" ");

				// create and display filter choice
				const newLi = document.createElement("li");
				newLi.innerHTML = `${li.innerText} <img class="cross" src='./assets/cross.svg' alt='supprimer le choix'>`;
				newLi.classList.add("choice");

				if (parentClassPart[0] === "list" && parentClassPart[1].indexOf("list-") > -1) {
					addClassOfChoice(parentClassPart[1], newLi);

					//condition for set element variable
					if (parentClassPart[1].indexOf("blue") > -1) {
						elements = { ...elements, ...searchInIngredient(parentClassPart[1])};
					} else {
						const dataName = parentClassPart[1] === "list-red" ? "data-ustensil" : "data-appliance";
						elements = { ...elements, ...searchInApplianceOrUstensil(parentClassPart[1], false, dataName)};
					}

					li.classList.add("displayNone");
				}

				//add Event listener for delet filter
				newLi.querySelector(".cross").addEventListener("click", (event) => deleteFilter(event, elements, li, parentClassPart[1]));
				displayErrorMessage();
			}
		});
	});
}

/**
 *
 * @param {HTMLClassElement} classList
 * @param {HTMLElement} li
 *
 */
function addClassOfChoice(classList, li) {
	const filterChoice = document.querySelector(".filterChoice");
	li.classList.add(classList);
	filterChoice.appendChild(li);
}

//------------ingredient search------------------
function searchInIngredient(classList, doNotFilter) {
	const ingredients = Array.from(document.querySelectorAll(".ingredient"))
		.filter((ingredient) => doNotFilter || !ingredient.closest("article").classList.contains("displayNone"));

	const choices = Array.from(document.querySelectorAll(".choice.list-blue"));

	if (choices[classList] && choices[classList].length > 0) {
		const articles = document.querySelectorAll("article");
		articles.forEach((article) => article.classList.remove("displayNone"));
	} else {
		ingredients.forEach((ingredient) => choices.forEach((choice) => getRecipesMatch(choice, ingredient)));
	}
	const elements = { ingredients };
	elements[classList] = choices;

	return elements;
}

/**
 *
 * @param {Element} choice
 * @param {HTMLElement} htmlElementOrAttribute
 * @param {HTMLDataElement} dataAttribute
 *
 *  this function display recipes found
 */
export function getRecipesMatch(choice, htmlElementOrAttribute, dataAttribute) {
	let regexp;
	if (typeof choice === "object") {
		regexp = new RegExp(choice.innerText.toLowerCase(), "gi");
	} else {
		regexp = new RegExp(choice.toLowerCase(), "gi");
	}
	let value;
	if (htmlElementOrAttribute.tagName === "ARTICLE" && dataAttribute) {
		value = htmlElementOrAttribute.getAttribute(dataAttribute).toLowerCase();
		htmlElementOrAttribute.classList.toggle("displayNone", !regexp.test(value));
	} else {
		value = htmlElementOrAttribute.innerText.toLowerCase();
		htmlElementOrAttribute.closest("article").classList.toggle("displayNone", !regexp.test(value));
	}
}

/**
 *
 * @param {HTMLDataElement} dataSet
 * @param {HTMLClassElement} classList
 * @param {Boolean} doNotFilter
 *
 */
function searchInApplianceOrUstensil(classList, doNotFilter, dataSet) {
	const articles = Array.from(document.querySelectorAll(".recipe"))
		.filter((article) => doNotFilter || !article.classList.contains("displayNone"));

	const choices = Array.from(document.querySelectorAll(`.choice.${classList}`));
	if (choices[classList] && choices[classList].length > 0) {
		articles.forEach((article) => article.classList.remove("displayNone"));
	} else {
		choices.forEach((choice) => {
			articles.forEach((article) => {
				getRecipesMatch(choice, article, dataSet);
			});
		});
	}

	const elements = { articles };
	elements[classList] = choices;

	return elements;
}

/**
 *
 * @param {Event} event
 * @param {Array} elements
 * @param {HTMLElement} liInlistOfFilter
 * @param {HTMLClassElement} classList
 *
 * this function its for delet filter and play search function
 */

function deleteFilter(event, elements, liInlistOfFilter, classList) {
	const searchBar = document.querySelector(".search_bar");

	const liInFilterChoice = event.target.closest("li");

	const indexChoice = elements[classList].findIndex((choice) => choice.innerText === liInFilterChoice.innerText);

	elements[classList].splice(indexChoice, 1);
	let choices = [
		...(elements["list-red"] ?? []),
		...(elements["list-green"] ?? []),
		...(elements["list-blue"] ?? []),
	];

	liInFilterChoice.remove();
	liInlistOfFilter.classList.remove("displayNone");

	const li = document.querySelectorAll(".choice");
	const liClassList = [];
	li.forEach(item => liClassList.push(item.classList[1]));

	if (choices.length === 0) {
		if(searchBar.value) {
			updateRecipes(searchBar.value);
		} else {
			const articles = document.querySelectorAll("article");
			articles.forEach((article) => article.classList.toggle("displayNone", false));
		}
	} else {
		const workflowObject = {
			"list-green": {
				method: searchInApplianceOrUstensil,
				attribute: "data-appliance",
			},
			"list-red": {
				method: searchInApplianceOrUstensil,
				attribute: "data-ustensil",
			},
			"list-blue": {
				method: searchInIngredient,
			},
		};

		liClassList.forEach((item, i) => {
			workflowObject[item]["method"](item, i === 0, workflowObject[item]["attribute"]);
		 });
		 
		 if (searchBar.value) {
			 updateRecipes(searchBar.value);
		 }
	}
	displayErrorMessage();
}
