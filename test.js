const Deck = require('./cards')

let myDeck = new Deck();
let originalDeck = myDeck.deck;

var assert = require('assert');
var expect = require('chai').expect;

describe('Deck', () => {
    it('should create a deck of 52 cards', () => {
        assert.equal(originalDeck.length, 52);
    });
});

describe('Shuffle Function', () => {
    it('should shuffle deck', () => {
        myDeck.Shuffle();
        setTimeout(() => {
            assert.notEqual(originalDeck, myDeck.deck);
        }, 100)
    })
})

describe('GiveOneCard Function', () => {
    it('should return a single random card', () => {
        expect(myDeck.GiveOneCard()).to.be.a('string')
    })
})