console.log('it works')

fetch('http://localhost:3333/cards') // 2 Promisses: then und catch
  .then(res => res.json())
  //.then(cards => console.log(cards))
  .then(cards => cards.forEach(showLinks)) // fetch: macht einen request an den Server 3333 cards
  .catch(err => console.log(err))

function showLinks(card) {
  const el = document.createElement('a')
  el.textContent = card.title
  el.href = 'http://localhost:3333/cards/' + card.id
  el.style.display = 'block'
  document.body.appendChild(el)
}
