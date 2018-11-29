# Deck of Cards

Used a javascript class to create a deck of cards.

## Functions

* Shuffle: Shuffles the current deck of cards.  
``` javascript
let myDeck = new Deck();
console.log("Original Deck: ", myDeck.deck); // Returns: Original Deck: ['Ace of Clubs', '2 of Clubs', '3 of Clubs', ...]
myDeck.Shuffle();
console.log("Deck after shuffled: ", myDeck.deck); // Returns: Deck after shuffled: ['5 of Diamonds', '2 of Clubs', 'Jack of Spades', ...]
```