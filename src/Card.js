export default class Card {
  constructor(card) {
    const form = document.querySelector('form')
    const el = document.createElement('section')
    el.innerHTML = `<h2> ${card.title} </h2>
    <p hidden data-js="question"> ${card.question} </p>
    <p hidden data-js="answer"> ${card.answer} </p>
    <span>Show</span>
    `
    form.insertAdjacentElement('afterend', el)
    this.showCard(el)
  }

  showCard(el) {
    const questionEl = el.querySelector('[data-js="question"]')
    const answerEl = el.querySelector('[data-js="answer"]')
    const button = el.querySelector('span')
    button.addEventListener('click', () => {
      questionEl.toggleAttribute('hidden')
      answerEl.toggleAttribute('hidden')
      button.textContent = button.textContent === 'Show' ? 'Hide' : 'Show'
    })
  }
}
