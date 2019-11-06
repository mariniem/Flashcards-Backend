fetch('http://localhost:3333/cards') // 2 Promisses: then und catch
  .then(res => res.json())
  //.then(cards => console.log(cards))
  .then(cards => cards.forEach(showLinks))
  .catch(err => console.log(err))

function showLinks(card) {
  const el = document.createElement('div')
  el.classList.add('cards')
  el.innerHTML = `<h2> ${card.title} </h2>
  <p class="question" > ${card.question} </p>
  <p class="answer" > ${card.answer} </p>
  <button> Show </button>
`
  el.href = 'http://localhost:3333/cards/' + card.id
  el.style.display = 'block'
  document.body.appendChild(el)

  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => button.addEventListener('click', showCards))
}
function showCards() {
  const questions = document.querySelectorAll('.question')
  questions.forEach(question => question.classList.toggle('active'))
  const answers = document.querySelectorAll('.answer')
  answers.forEach(answer => answer.classList.toggle('active'))
}

// weitere Elemente erzeugen
// div mit Classe
// Karte mit Titel und border
// Klasse interaktiv
// show bei click auf Show sieht man den Titel und Question und Answer
// Hide
// toggle
