function WordsUppercase(input) {
    let reg = /[A-z0-9]+/g;
    let result = input.match(reg);
    console.log(result.join(', ').toUpperCase());
}

WordsUppercase('Hi, how are you?');
WordsUppercase('hello');