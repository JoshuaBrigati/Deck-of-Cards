class Deck {
  constructor() {
    this.deck = [];
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const faceValues = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Jack", "Queen", "King"];

    // combines each face value with a suit.
    // creates a deck of cards in order for Ace of Clubs to King of Spaces.
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < faceValues.length; j++) {
        this.deck.push(`${faceValues[j]} of ${suits[i]}`);
      }
    }
  }
}

const myDeck = new Deck();
console.log("\n", myDeck.deck);

console.log("\nThank you so much for giving me a chance to display my skills!\n")