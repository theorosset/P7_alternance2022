import { errorMessageIfSearchWithFilter } from './errorMessage.js'

//add filter in section filterChoice
export function addAndSearchFilter() {
  const allLi = document.querySelectorAll('.list li')

  let elements = { articles: [], ingredients: [], "list-red": [],  "list-green": [],  "list-blue": [] };
  
  allLi.forEach((li) => {
    li.addEventListener('click', (event) => {
      if (event.target.closest('ul')) {
        const parentClass = event.target.closest('ul').classList.value
        const parentClassPart = parentClass.split(" ")
        
        const newLi = document.createElement('li')
        newLi.innerHTML = `${li.innerText} <img class="cross" src='./assets/cross.svg' alt='supprimer le choix'>`
        newLi.classList.add('choice')

        if(parentClassPart[0] === "list" && parentClassPart[1].indexOf("list-") > -1) {

          addClassOfChoice(parentClassPart[1], newLi)

          if (parentClassPart[1].indexOf('blue') > -1) {
            elements = { ...elements, ...searchInIngredient(parentClassPart[1]) }
          } else {
            const dataName = parentClassPart[1] === "list-red" ? 'data-ustensil' : 'data-appliance';
            elements = { ...elements, ...searchInApplianceOrUstensil(dataName, parentClassPart[1]) }            
          }
          
          //elements.choices = [...elements["list-red"] ?? [], ...elements["list-green"] ?? [] ,...elements["list-blue"] ?? []]
          li.classList.add("displayNone")
        }
   
        newLi.querySelector('.cross').addEventListener('click', (event) => deleteFilter(event, elements, li, parentClassPart[1]));
      }
    })
  })
}


/**
 * 
 * @param {HTMLClassElement} classList 
 * @param {HTMLElement} li 
 * 
 */
function addClassOfChoice(classList, li) {
  const filterChoice = document.querySelector('.filterChoice')
  li.classList.add(classList)
  filterChoice.appendChild(li)
}

//------------ingredient search------------------
function searchInIngredient(classList, doNotFilter) {
  const ingredientsElement = document.querySelectorAll('.ingredient')
  const ingredients = []

    for(let c = 0; c < ingredientsElement.length; c++){
      const ingredient = ingredientsElement[c]
      if( doNotFilter || !ingredient.closest('article').classList.contains('displayNone')) {
        ingredients.push(ingredient)
      }
    }
  const choices = Array.from(document.querySelectorAll('.choice.list-blue'))
  
  for(let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i]
    for (let j = 0; j < choices.length; j++) {
      const choice = choices[j]
      textMatch(choice, ingredient)
    }
  }

  const elements = { ingredients };
  elements[classList] = choices;

  return elements;
}

function textMatch(choice, htmlElementOrAttribute, dataAttribute) {
  const regexp = new RegExp(choice.innerText.toLowerCase(), 'gi')
  const section = document.querySelector('#section_recipes')
  let value;

  if (htmlElementOrAttribute.tagName === 'ARTICLE' && dataAttribute) {
    value = htmlElementOrAttribute.getAttribute(dataAttribute).toLowerCase() 
    htmlElementOrAttribute.classList.toggle('displayNone', !regexp.test(value))
  } else {
    value = htmlElementOrAttribute.innerText.toLowerCase()
    htmlElementOrAttribute.closest('article').classList.toggle('displayNone', !regexp.test(value))
  }
  errorMessageIfSearchWithFilter(section)
}

function searchInApplianceOrUstensil(dataSet, classList, doNotFilter) {
  const articles = []
  const articlesElements = document.querySelectorAll('.recipe')
  
  for(let c = 0; c < articlesElements.length; c++){
    const article = articlesElements[c]
    if( doNotFilter || !article.classList.contains('displayNone')) {
      articles.push(article)
    }
  }
  const choices = Array.from(document.querySelectorAll(`.choice.${classList}`))

  for(let i = 0; i < articles.length; i++) {
    const article = articles[i]
    for (let j = 0; j < choices.length; j++) {
      const choice = choices[j]
      textMatch(choice, article, dataSet)
    }
  }

  const elements = { articles };
  elements[classList] = choices;

  return elements;
}


/**
 * 
 * @param {HTMLElement} li  its li in ul .filterChoice
 * @param {HTMLAllCollection} choices 
 * @param {HTMLBaseElement} ingredientsOrArticles 
 */

function deleteFilter(event, elements, liInlistOfFilter, classList ) {
  let dataName;

  if (classList.indexOf('blue') === -1) {
    dataName = classList === "list-red" ? 'data-ustensil' : 'data-appliance';
  }

  const liInFilterChoice = event.target.closest('li')
 
  const indexChoice = elements[classList].findIndex((choice) => choice.innerText === liInFilterChoice.innerText)

  elements[classList].splice(indexChoice, 1)
  let choices = [...elements["list-red"] ?? [], ...elements["list-green"] ?? [] ,...elements["list-blue"] ?? []]
  
  liInFilterChoice.remove()
  liInlistOfFilter.classList.remove("displayNone")
  
  if (choices.length === 0) {
    const articles = document.querySelectorAll('article')
    for (let i = 0; i < articles.length; i ++) {
      const article = articles[i]
      article.classList.toggle('displayNone', false)
    }
  } else {
    searchInApplianceOrUstensil('data-ustensil', 'list-red', true)
    searchInApplianceOrUstensil('data-appliance', 'list-green', true)
    searchInIngredient('list-blue', true)
  }
}