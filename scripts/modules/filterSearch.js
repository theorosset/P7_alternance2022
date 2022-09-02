export function searchByFilter(input, list) {
  const allLI = document.querySelectorAll(`.${list} li`)

  input.addEventListener('input', (e) => {
    const valueSearchBar = input.value.split(' ').join('').toLowerCase()
    for (let i = 0; i < allLI.length; i++) {
      const li = allLI[i]
      if (
        !li.innerText.split(' ').join('').toLowerCase().includes(valueSearchBar)
      ) {
        li.remove()
      } else {
        document.querySelector(`.${list}`).appendChild(li)
      }
    }
  })
  addAndSearch(list)
}

export function addAndSearch(liClass) {
  const list = document.querySelectorAll(`.${liClass} li`)
  const choice = document.querySelector('.filterChoice')

  for (let i = 0; i < list.length; i++) {
    const li = list[i]
    const newLi = document.createElement('li')
    newLi.classList.add(liClass)
    newLi.classList.add('choice')
    newLi.innerHTML = ` ${li.innerText} <img src='./assets/cross.svg' alt='supprimer le choix'>`
    li.addEventListener('click', (e) => {
      choice.appendChild(newLi)
      search_ingredient()
      search_ustensils()
    })
  }
}

function search_ingredient() {
  const ingredients = document.querySelectorAll('.recipe-ingredient .ingredient')
  const articles = document.querySelectorAll('.recipe')
  const choiceSearch = setChoice('list-blue')

  //search in ingredient with choiceSearch
  choiceSearch.forEach((choice) => {
    for (let i = 0; i < ingredients.length; i++) {
      const ingredient = ingredients[i]
      const ingredientSearch = ingredient.innerText.split('\n').join('').split(' ').join('').toLowerCase()
      if (ingredientSearch.includes(choice.toLowerCase())) {
        document.querySelector('#section_recipes').appendChild(articles[i])
      } else {
        articles[i].remove()
      }
    }
  })
}

function search_ustensils(){
const articles =  document.querySelectorAll('.recipe')
const choices = document.querySelectorAll('.choice')
const choiceSearch = setChoice('list-red');

choiceSearch.forEach((choice) => {
  for (let i = 0; i < articles.length; i++){
    const article = articles[i]
    const ustensilOfArticle = article.getAttribute("data-ustensil").split(",").join("").split(" ").join("").toLowerCase()
    if(ustensilOfArticle.includes(choice.toLowerCase())){
       document.querySelector('#section_recipes').appendChild(article)
    }else{
      article.remove()
    }
    }
  })
}

//add all choice in variable choiceSearch for search in ingredient
function setChoice(list){
const choices = document.querySelectorAll(`ul .${list}`)
console.log(choices);
  let choiceSearch = []
  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i]
    choiceSearch.push(choice.innerText.split(' ').join(''))
  }
return choiceSearch
}