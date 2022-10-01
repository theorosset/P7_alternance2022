export function errorMessageIfSearchWithBar(section) {
    const errorMsg = document.querySelector('.errorMessage')
    
    if(section.children.length === 1) {
        errorMsg.classList.remove('displayNone')
      } else {
        errorMsg.classList.add('displayNone')
      }
}

export function errorMessageIfSearchWithFilter(section){
  const errorMessage = document.querySelector(".errorMessage")
  let numberOfElementHaveDisplayNone = 0;
    for (let i = 0; i < section.children.length; i++) {
        const article = section.children[i]
        if (article.classList.contains('displayNone')) { 
            numberOfElementHaveDisplayNone++
          }
    }
  
  if(section.children.length === numberOfElementHaveDisplayNone) {
    errorMessage.classList.remove('displayNone')
  } else {
    errorMessage.classList.add('displayNone')
  }
}