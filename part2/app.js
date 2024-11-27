// Part 2: Deck of Cards
$(function() {
  let baseURL = "https://deckofcardsapi.com/api/deck";

  // 1.
  async function newCard() {
    let data = await $.getJSON(`${baseURL}/new/draw/?count=1`);
    let { suit, value } = data.cards[0];
    console.log(`${value} of ${suit}`);
  }

  // 2.
  async function newCards() {
    let card1 = await $.getJSON(`${baseURL}/new/draw/?count=1`);
    let deckId = card1.deck_id;
    let card2 = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    [card1, card2].forEach(card => {
      let { suit, value } = card.cards[0];
      console.log(`${value} of ${suit}`);
    });
  }

  // 3.
  async function setup() {
    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $('button')
    .show().
    on('click', async function() {
      let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
      let cardImage = cardData.cards[0].image;
      $('#card-display').append(
        $('<img>', {
          src: cardImage,
        })
      );
      if (cardData.remaining === 0) {
        // Disable button
        $('button').prop('disabled', true);

        // Displays message letting user know the deck is finished.
        $('#card-display').append(
          $('<div>', {
            text: 'Deck finished. Refresh for new deck.',
            class: 'alert alert-warning mt-4',
          })
        );
      }
    });
  }
  setup();
});
