class Deck {
  constructor() {
    this.deck = [];
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const faceValues = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    // combines each face value with a suit.
    // creates a deck of cards in order for Ace of Clubs to King of Spaces.
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faceValues.length; j++) {
        this.deck.push(`${faceValues[j]} of ${suits[i]}`);
      }
    }
  }

  Shuffle() {
    const { deck } = this;

    // Shuffles the deck using the temp method.
    // This is said to me more efficient than using ES6s' shuffling feature that uses destructuring.
    for (let i = deck.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));

      let cardTemp = deck[i];
      deck[i] = deck[randomIndex];
      deck[randomIndex] = cardTemp;
    }

    return this;
  }

  GiveOneCard() {
    const { deck } = this;

    // returns a single random card.
    let randomIndex = Math.floor(Math.random() * 52);

    return deck[randomIndex];
  }
}

let myDeck = new Deck();
myDeck.Shuffle();
console.log("\nHere is your card: ", myDeck.GiveOneCard());

console.log("\nThank you so much for giving me a chance to display my skills!\n")

module.exports = Deck;