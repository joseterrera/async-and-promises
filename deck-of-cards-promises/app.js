let baseURL = 'https://deckofcardsapi.com/api/deck';

/**
 * Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
 */

 function getNewCard() {
   let response = axios.get(`${baseURL}/new/draw`)
  //  console.log(response.data.cards[0])
  response.then(
    res => {
      let { suit, value } = res.data.cards[0];
      console.log(`Exercise One: ${value.toLowerCase()} of ${suit.toLowerCase()}`);
     }
    
  )
}


 getNewCard()


 /**Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

Once you have both cards, console.log the values and suits of both cards.
**/

let firstCard = null
function getTwoCards() {
  let getFirstCard = axios.get(`${baseURL}/new/draw`)
  getFirstCard.then(
    res => {
      firstCard = res.data.cards[0];
      let deckId = res.data.deck_id;
      let getSecondCard = axios.get(`${baseURL}/${deckId}/draw`);
      return getSecondCard
    })
    
  .then(res => {
    let secondCard = res.data.cards[0];
    [firstCard, secondCard].forEach(function(card) {
      console.log(
        `Exercise Two: ${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
      );
    });
  });

}

getTwoCards()


/**
 * Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
 */

const button = document.querySelector('button')
const cardContainer = document.querySelector('div.card-container')
const listEl = document.querySelector('ul')

function generateHTML(srcLink){
  let angle = Math.random() * 90 - 45;
  let randomX = Math.random() * 40 - 20;
  let randomY = Math.random() * 40 - 20;
  return `<li><img src=${srcLink} class="img" style="transform: translate(${randomX}px, ${randomY}px) rotate(${angle}deg)"/></li>`
}



 async function drawCards() {
  let cardsDrawed = []
  let response = await axios.get(`${baseURL}/new/shuffle`)
  let deckId = response.data.deck_id;

  button.addEventListener('click', async function() {
    let newCard = await axios.get(`${baseURL}/${deckId}/draw`)

    let cardSrc = newCard.data.cards[0].image;
    let cardsRemaining = newCard.data.remaining;

    cardsDrawed.push(generateHTML(cardSrc))
    listEl.innerHTML = cardsDrawed.join('\n\n')
    if (cardsRemaining === 0) {
      button.style.cursor = 'not-allowed'
      button.style.pointerEvents = 'none'
      button.style.backgroundColor = '#ddd'
    }
  })
 }

 drawCards()