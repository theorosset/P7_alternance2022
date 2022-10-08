import { errorMessageIfSearchWithBar } from "./errorMessage.js";

export function search() {
  const input = document.querySelector(".search_bar");
  const h2All = document.querySelectorAll(".recipe-title-time h2");
  const articles = document.querySelectorAll(".recipe");
  const section = document.querySelector("#section_recipes");

  input.addEventListener("input", (e) => {
    const valueSearchBar = input.value.split(" ").join("").toLowerCase();
    for (let i = 0; i < h2All.length; i++) {
      const h2 = h2All[i];
      const article = articles[i];
      if (!h2.innerText.split(" ").join("").toLowerCase().includes(valueSearchBar) && valueSearchBar.length >= 3) 
      {
        article.remove();
      } else {
        document.querySelector("#section_recipes").appendChild(article);
      }
      errorMessageIfSearchWithBar(section);
    }
  });
}
