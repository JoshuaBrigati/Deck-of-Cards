# Deck of Cards

Used a javascript class to create a deck of cards.

## Setup
  
```
$ git clone https://github.com/JoshuaBrigati/Deck-of-Cards.git  
$ cd Deck-of-Cards  
$ npm install  
```  
  
If you do not have `npm` you can install it by installing NodeJS: https://nodejs.org/en/  
Then run ``` $ npm install``` again.  
  
This uses NodeJS to run the file.  
run `$ which node` to see if you have it installed.  
If you do not have node installed, install it from https://nodejs.org/en/  
  
**If you do not install NodeJS the Run section will not work.**

# Run

After going through the Setup step,  
run ```$ npm run givecard``` to receive a random card from a shuffled deck.  
  
## Functions

* Shuffle: Shuffles the current deck of cards.  
``` javascript
let myDeck = new Deck();
console.log("Original Deck: ", myDeck.deck); // Returns: Original Deck: ['Ace of Clubs', '2 of Clubs', '3 of Clubs', ...]
myDeck.Shuffle();
console.log("Deck after shuffled: ", myDeck.deck); // Returns: Deck after shuffled: ['5 of Diamonds', '2 of Clubs', 'Jack of Spades', ...] 
```  
  
* GiveOneCard: Gives back a single random card.  
``` javascript
let myDeck = new Deck();
myDeck.Shuffle();
console.log("\nHere is your card: ", myDeck.GiveOneCard()); // Returns: Here is your card:  7 of Hearts
``` 

## Test 

To run tests:
```
$ npm test
```
