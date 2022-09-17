//add filter in section filterChoice
export function addFilter() {
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
          searchInIngredient(newLi)
        }
        if (parentClass === 'list list-red') {
          addClassOfChoice('list-red', newLi)
          searchInApplianceOrUstensil('data-ustensil', 'list-red', newLi)
        }
        if (parentClass === 'list list-green') {
          addClassOfChoice('list-green', newLi)
          searchInApplianceOrUstensil('data-appliance', 'list-green', newLi)
        }
      }
    })
  })
}

//function for appendChild of section filterChoice
function addClassOfChoice(classList, li) {
  const filterChoice = document.querySelector('.filterChoice')
  li.classList.add(classList)
  filterChoice.appendChild(li)
}

//------------ingredient search------------------
function searchInIngredient(li) {
  const ingredients = Array.from(document.querySelectorAll('.ingredient'))
  const choices = Array.from(document.querySelectorAll('.choice.list-blue'))

  ingredients.forEach((ingredient) => {
    choices.forEach((choice) => {
      ingredientMatch(choice, ingredient)
    })
  })

  deletFilter(li, choices, ingredients)
}

/**
 * function Look if choice match with ingredient
 *
 * @param {HTMLElement} choice its filter choice
 * @param {HTMLElement} ingredient its ingredient of recipes
 */
function ingredientMatch(choice, ingredient) {
  const section = document.querySelector('#section_recipes')
  const regexp = new RegExp(choice.innerText, 'gi')
  if (ingredient.innerText.match(regexp)) {
    section.appendChild(ingredient.closest('article'))
  } else {
    ingredient.closest('article').remove()
  }
}

//----------------search in ustensil or appliance------------
/**
 * this function look if appliance or ustensil match with choice
 *
 * @param {HTMLElement} choice
 * @param {data-set} attributeOfArticle
 * @param {HTMLElement} article
 *
 */
function ustensilApplianceMatch(choice, attributeOfArticle, article) {
  const section = document.querySelector('#section_recipes')
  const regexp = new RegExp(choice.innerText, 'gi')
  if (attributeOfArticle.match(regexp)) {
    section.appendChild(article)
  } else {
    article.remove()
  }
}

function searchInApplianceOrUstensil(dataSet, classList, li) {
  const articles = document.querySelectorAll('.recipe')
  const choices = Array.from(document.querySelectorAll(`.choice.${classList}`))

  choices.forEach((choice) => {
    articles.forEach((article) => {
      const applianceOfArticle = article.getAttribute(dataSet).toLowerCase()
      ustensilApplianceMatch(choice, applianceOfArticle, article)
    })
  })
  deletFilter(li, choices, articles)
}

function deletFilter(li, choices, ingredientsOrArticles) {
  const section = document.querySelector('#section_recipes')

  li.children[0].addEventListener('click', () => {
    const indexChoice = choices.findIndex((choice) => choice.innerText === li.innerText)
    li.remove()
    choices.splice(indexChoice, 1)

    if (choices.length === 0) {
      ingredientsOrArticles.forEach((ingredient) => {
        section.appendChild(ingredient.closest('article'))
      })
      console.log('ok')
    }

    choices.forEach((choice) => {
      ingredientsOrArticles.forEach((ingredient) => {
        ingredientMatch(choice, ingredient)
      })
    })
  })
}
