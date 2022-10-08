import { errorMessageIfSearchWithBar } from "./errorMessage.js";

export function search() {
  const h2All = Array.from(document.querySelectorAll(".recipe-title-time h2"));
  const input = document.querySelector(".search_bar");
  const section = document.querySelector("#section_recipes");

  input.addEventListener("keyup", (e) => {
    const string = e.target.value.toLowerCase();
    h2All.forEach((h2) => {
      if(!h2.innerText.toLowerCase().includes(string) && input.value.length > 2 ){
        h2.closest("article").remove();
      } else {
        section.appendChild(h2.closest("article"));
      }       
    });
    errorMessageIfSearchWithBar(section);
  });
}

