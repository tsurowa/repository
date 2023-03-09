function solve(input) {
    let matrix = [];
    let currMove = input.shift().split(" ");
    console.log(currMove);
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// Player O wins!
// O	X	X
// X	O	X
// O	false	O
console.log('-------');
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// This place is already taken. Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false
console.log('-------');
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
// The game ended! Nobody wins :(
//     O	X	X
//     X	X	O
//     O	O	X
    
