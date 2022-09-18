
export function searchByFilter(input, list) {
  const allLI = document.querySelectorAll(`.${list} li`)

  input.addEventListener('input', (e) => {
    const valueSearchBar = input.value.toLowerCase()

    for (let i = 0; i < allLI.length; i++) {
      const li = allLI[i]
      const regexp = new RegExp(valueSearchBar, 'gi')
      if (!li.innerText.match(regexp)) {
        li.remove()
      } else {
        document.querySelector(`div .${list}`).appendChild(li)
      }
    }
  })
}

//add filter in section filterChoice
export function addAndSearchFilter() {
  const allLi = document.querySelectorAll('.list li')

  allLi.forEach((li) => {
    li.addEventListener('click', (event) => {
      if (event.target.closest('ul')) {
        const parentClass = event.target.closest('ul').classList.value
        const newLi = document.createElement('li')
        newLi.innerHTML = `${li.innerText} <img src='./assets/cross.svg' alt='supprimer le choix'>`
        newLi.classList.add('choice')

        if (parentClass === 'list list-blue') {
          addClassOfChoice('list-blue', newLi)
        }
        if (parentClass === 'list list-red') {
          addClassOfChoice('list-red', newLi)
          search_ustensils_appliance('data-ustensil', 'list-red')
        }
        if (parentClass === 'list list-green') {
          addClassOfChoice('list-green', newLi)
          search_ustensils_appliance('data-appliance', 'list-green')
        }
      }
    })
  })
}

/**
 * 
 * @param {HTMLClassElement} classList 
 * @param {HTMLElement} li 
 */
 function addClassOfChoice(classList, li) {
  const filterChoice = document.querySelector('.filterChoice')
  li.classList.add(classList)
  filterChoice.appendChild(li)
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
      if (!ingredientSearch.match(regexp)) {
         articles[i].remove()
      } else {
       document.querySelector('#section_recipes').appendChild(articles[i])
      }
    }
  })
}

//search with filter ustensil
function search_ustensils_appliance(dataSet, classList) {
  const articles = document.querySelectorAll('.recipe')
  const choiceSearch = setChoice(classList)

  choiceSearch.forEach((choice) => {
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i]
      const regexp = new RegExp(choice, 'gi')
      const ustensilOfArticle = article
        .getAttribute(dataSet)
        .toLowerCase()
      if (ustensilOfArticle.match(regexp)) {
        document.querySelector('#section_recipes').appendChild(article)
      } else {
        article.remove()
      }
    }
  })
}

//search with filter appliance fusionner les search
function search_appliance() {
  const articles = document.querySelectorAll('.recipe')
  const choiceSearch = setChoice('list-green')

  choiceSearch.forEach((choice) => {
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i]
      const regexp = new RegExp(choice, 'gi')
      const applianceOfArticle = article
        .getAttribute('data-appliance')
        .toLowerCase()

      if (applianceOfArticle.match(regexp)) {
        document.querySelector('#section_recipes').appendChild(article)
      } else {
        article.remove()
      }
    }
  })
}

//add all choice in variable choiceSearch for search in ingredient
function setChoice(list) {
  const choices = document.querySelectorAll(`ul .${list}`)
  let choiceSearch = []
  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i]
    choiceSearch.push(choice.innerText)
  }
  return choiceSearch
}
