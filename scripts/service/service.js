
export async function fetchRecipes() {
  return await fetch("./recipes.json")
  .then((res) => {
    return res.json();
  })
}

