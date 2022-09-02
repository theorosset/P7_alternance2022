export function searchByFilter(input, list){
  
  const allLI = document.querySelectorAll(`.${list} li`);

  input.addEventListener("input", (e) => {
    const valueSearchBar = input.value.split(" ").join('').toLowerCase();
      for (let i = 0; i < allLI.length; i++) {
        const li = allLI[i];
        if (!li.innerText.split(" ").join("").toLowerCase().includes(valueSearchBar)) 
        {
          li.remove()
        } else {
          document.querySelector(`.${list}`).appendChild(li)
        }
      }
  });
  addChoiceFilter(list)
}

export function addChoiceFilter(liClass) {
  const list = document.querySelectorAll(`.${liClass} li`)
  const choice = document.querySelector(".filterChoice")

  for (let i = 0; i < list.length; i++) {
    const li = list[i]
    const newLi = document.createElement('li');
    newLi.classList.add(liClass);
    newLi.classList.add('choice');
    newLi.innerHTML =  ` ${li.innerText} <img src='./assets/cross.svg' alt='supprimer le choix'>`;
    li.addEventListener("click", (e)=>{
      choice.appendChild(newLi)
    })
  }
}
