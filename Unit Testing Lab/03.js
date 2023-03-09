function printDeckOfCards(cards) {
    let newResult = [];
    for (const token of cards) {
        let currLine = token.split('');
        let suit = currLine.pop();
        let face = currLine.join('');
        try {
        let currCard = createCard(face, suit);
        newResult.push(currCard);
        } catch (error) {
            return console.log(`Invalid card: ${token}`);
        }
    }
    console.log(newResult.join(' '));

    function createCard (face, suit){
        
      let faces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
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

  }
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);