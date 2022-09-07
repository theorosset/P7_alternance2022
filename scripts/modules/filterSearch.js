export function searchByFilter(input, list) {
  const allLI = document.querySelectorAll(`.${list} li`)

  input.addEventListener('input', (e) => {
    const valueSearchBar = input.value.toLowerCase()
    
    for (let i = 0; i < allLI.length; i++) {
      const li = allLI[i]
      const regexp = new RegExp(valueSearchBar, 'gi')
      if (
        !li.innerText.match(regexp)
      ) {
        li.remove()
      } else {
        document.querySelector(`div .${list}`).appendChild(li)
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
      search_appliance()
    })
  }
}

//search with filter ingredient 
function search_ingredient() {
  const ingredients = document.querySelectorAll('.recipe-ingredient .ingredient')
  const articles = document.querySelectorAll('.recipe')
  const choiceSearch = setChoice('list-blue')
  
  choiceSearch.forEach((choice) => {
    for (let i = 0; i < ingredients.length; i++) {
      const ingredient = ingredients[i]
      const ingredientSearch = ingredient.innerText.toLowerCase()
      const regexp = new RegExp(choice, 'gi')
      
      if (ingredientSearch.match(regexp)) {
        document.querySelector('#section_recipes').appendChild(articles[i])
      } else {
        articles[i].remove()
      }
    }
  })
}

//search with filter ustensil 
function search_ustensils(){
const articles =  document.querySelectorAll('.recipe')
const choiceSearch = setChoice('list-red');

choiceSearch.forEach((choice) => {
  for (let i = 0; i < articles.length; i++){
    const article = articles[i]
    const regexp = new RegExp(choice, 'gi')
    const ustensilOfArticle = article.getAttribute("data-ustensil").toLowerCase()
    if(ustensilOfArticle.match(regexp)){
       document.querySelector('#section_recipes').appendChild(article)
    }else{
      article.remove()
    }
    }
  })
}

//search with filter appliance fusionner les search 
function search_appliance(){
const articles =  document.querySelectorAll('.recipe')
const choiceSearch = setChoice('list-green');

choiceSearch.forEach((choice) => {
  for (let i = 0; i < articles.length; i++){
    const article = articles[i]
    const regexp = new RegExp(choice, 'gi')
    const applianceOfArticle = article.getAttribute("data-appliance").toLowerCase()
    
    if(applianceOfArticle.match(regexp)){
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
  let choiceSearch = []
  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i]
    choiceSearch.push(choice.innerText)
  }
return choiceSearch
}
