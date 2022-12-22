import { updateAllList } from "./updateFilterList.js";

export function searchInListOfFilter(input, list) {
	const allLI = document.querySelectorAll(`.${list} li`);
  
	input.addEventListener("input", (e) => {
		const valueSearchBar = input.value.toLowerCase();
  
		for (let i = 0; i < allLI.length; i++) {
			const li = allLI[i];
			const regexp = new RegExp(valueSearchBar, "gi");
			if (!li.innerText.match(regexp)) {
				li.remove();
			} else {
				document.querySelector(`div .${list}`).appendChild(li);
			}
		}
		updateAllList();
	});
}