import Card from './Card'
import Form from './Form'

export default class App {
  constructor() {
    new Form()
    fetch('http://localhost:3333/cards') // ist ein get Request; Ergebnis von dem fetch => promise
      .then(res => res.json())
      .then(cards => cards.forEach(card => new Card(card)))
      .catch(err => console.log('--->', err))
  }
}
