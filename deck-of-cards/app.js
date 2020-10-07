let baseURL = 'https://deckofcardsapi.com/api/deck';

/**
 * Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
 */

 async function getNewCard() {
   let response = await axios.get(`${baseURL}/new/draw`)
  //  console.log(response.data.cards[0])
  let { suit, value } = response.data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
 }

 getNewCard()


 /**Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

Once you have both cards, console.log the values and suits of both cards.
**/

async function getTwoCards() {
  let getFirstCard = await axios.get(`${baseURL}/new/draw`)
  let deckId = getFirstCard.data.deck_id
  let getSecondCard = await axios.get(`${baseURL}/${deckId}/draw`);
  [getFirstCard, getSecondCard].forEach( card => {
      let {suit, value} = card.data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });

}

getTwoCards()