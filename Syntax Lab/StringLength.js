function StringLength (a, b, c) {
    let result = a.length + b.length + c.length;
    let avg = result / 3;
    console.log(result);
    console.log(Math.floor(Number(avg)));
}

StringLength('chocolate', 'ice cream', 'cake');
StringLength('pasta', '5', '22.3');