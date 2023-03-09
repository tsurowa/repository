function solve (input) {
    let result = [];
    for (const line of input) {
        let [command, str] = line.split(' ');
        if (command === 'add') {
            result.push(str);
        } else if (command === 'remove') {
            result = result.filter((x) => x !== str);
        } else if (command === 'print') {
            console.log(result.join(','));
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// let obj = {
//     add, 
//     remove,
//     print,
// }

// input.forEach(element => {
//     let [command, str] = element.split(' ');
//     return obj[command](str);
// });

// function add(str) {
//     result.push(str);
// }
// function remove(str) {
//     result = result.filter((x) => (x !== str));
// }
// function print () {
//     console.log(result.join(','));
//}
// }