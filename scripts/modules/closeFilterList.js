/**
 *
 * @param {inputElement} filter
 *
 * function for close filter if click on another filter
 */

export function closeAllList(filter) {
	const device = document.querySelector("div .list-green");
	const ingredient = document.querySelector("div .list-blue");
	const ustensil = document.querySelector("div .list-red");
	const filterDevice = document.querySelector(".filter_device");
	const filterUstensil = document.querySelector(".filter_utensil");
	const filterIngredient = document.querySelector(".filter_recipes");

	switch (filter) {
	case "ustensil":
		device.classList.add("displayNone");
		ingredient.classList.add("displayNone");
		filterDevice.classList.remove("filterWitdh");
		filterIngredient.classList.remove("filterWitdh");
		break;
	case "device":
		ingredient.classList.add("displayNone");
		ustensil.classList.add("displayNone");
		filterUstensil.classList.remove("filterWitdh");
		filterIngredient.classList.remove("filterWitdh");
		break;
	case "ingredient":
		device.classList.add("displayNone");
		ustensil.classList.add("displayNone");
		filterDevice.classList.remove("filterWitdh");
		filterUstensil.classList.remove("filterWitdh");
		break;
	}
}
