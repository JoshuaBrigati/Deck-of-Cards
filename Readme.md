# Deck of Cards

Used a javascript class to create a deck of cards.

## Functions

* Shuffle: Shuffles the current deck of cards.  
``` javascript
let myDeck = new Deck();
console.log("Original Deck: \n", myDeck.deck);
myDeck.Shuffle();
console.log("Deck after shuffled: \n", myDeck.deck);

Original Deck:
 ['Ace of Clubs',
  '2 of Clubs',
  '3 of Clubs',
  ...]

Deck after shuffled:
 ['5 of Diamonds',
  '2 of Clubs',
  'Jack of Spades',
  ...]
```