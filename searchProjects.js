let cards

setTimeout(() => {
  cards = document.querySelectorAll('.card')
}, 100)

let filter = document.querySelector('#search')
filter.addEventListener('input', filterCards)

function filterCards() {
  if (filter !== '') {
    for (let card of cards) {
      let projectName = card.querySelector('h3')
      projectName = projectName.textContent.toLowerCase()
      let projectDesc = card.querySelector('.description')
      projectDesc = projectDesc.textContent.toLowerCase()

      let filterText = filter.value.toLowerCase()

      if (!projectName.includes(filterText) && !projectDesc.includes(filterText)) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    }
  }
}

// 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