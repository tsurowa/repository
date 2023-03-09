function playingCards(face, suit) {
    face = face.toUpperCase();
    suit = suit.toUpperCase();
  let faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (faces.includes(face) == false) {
    throw new Error;
  } else if (suits.hasOwnProperty(suit) == false) {
    throw new Error;
  }

  let result = {
    face,
    suit, 
    toString() {
        return this.face + suits[this.suit];
    }
  }

  return result;
}
//let cards = playingCards("A", "S");
let cards = playingCards("10", "H");
//let cards = playingCards("1", "C");
console.log(cards.toString());