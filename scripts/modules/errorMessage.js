export function displayErrorMessage(){
	const errorMessage = document.querySelector(".errorMessage");

	if(document.querySelectorAll(".recipe").length === document.querySelectorAll(".recipe.displayNone").length) {
		errorMessage.classList.remove("displayNone");
	} else {
		errorMessage.classList.add("displayNone");
	}
}