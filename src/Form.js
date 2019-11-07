import { postCard } from './Postrequest'
import Card from './Card'

export default class Form {
  constructor() {
    this.createForm()

    this.addSubmitFunctionality()
  }

  createForm() {
    const templateEl = document.querySelector('#form-template')
    const template = templateEl.innerHTML

    document.body.insertAdjacentHTML('beforeend', template)
    this.form = document.querySelector('form')
  }

  addSubmitFunctionality() {
    this.form.addEventListener('submit', event => {
      event.preventDefault()
      this.createFormObject()
    })
  }

  createSingleCard(card) {
    postCard(card).then(card => new Card(card))
  }

  createFormObject() {
    const title = this.form.title.value
    const question = this.form.question.value
    const answer = this.form.answer.value
    const feedback = document.querySelector('.feedback')
    if (title && question && answer) {
      const card = {
        title,
        question,
        answer
      }
      this.createSingleCard(card)
      feedback.textContent = ''
      this.form.title.value = ''
      this.form.question.value = ''
      this.form.answer.value = ''
    } else {
      feedback.textContent = 'Du Loser'
    }
  }
}
