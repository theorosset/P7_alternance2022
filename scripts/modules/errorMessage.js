export function errorMessageIfSearchWithBar(section) {
	const errorMsg = document.querySelector(".errorMessage");
  
	if(section.children.length === 1) {
		errorMsg.classList.remove("displayNone");
	} else {
		errorMsg.classList.add("displayNone");
	}
}

export function errorMessageIfSearchWithFilter(){
	const errorMessage = document.querySelector(".errorMessage");

	if(document.querySelectorAll(".recipe").length === document.querySelectorAll(".recipe.displayNone").length) {
		errorMessage.classList.remove("displayNone");
	} else {
		errorMessage.classList.add("displayNone");
	}
}