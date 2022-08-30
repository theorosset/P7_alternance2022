export function searchByFilter(filterInput, list){
  const input = document.querySelector(`${filterInput}`);
  const allLI = document.querySelectorAll(`${list} li`);

  input.addEventListener("input", (e) => {
    const valueSearchBar = input.value.split(" ").join('').toLowerCase();
      for (let i = 0; i < allLI.length; i++) {
        const li = allLI[i];
        if (
          !li.innerText.split(" ").join("").toLowerCase().includes(valueSearchBar) && valueSearchBar.length >= 3
        ) {
          li.style.display = "none";
        } else {
          li.style.display = "";
        }
      }
  });
}