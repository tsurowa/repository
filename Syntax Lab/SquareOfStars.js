function SquareOfStars(number) {
    let star = "* ";
    for (let i = 0; i < number; i++) {
        console.log(star.repeat(number).trim());
    }
}

SquareOfStars(1); 
SquareOfStars(2); 
SquareOfStars(5); 
SquareOfStars(7); 