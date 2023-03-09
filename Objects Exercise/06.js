function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let catalogue = {};
    for (let i = 0; i < sorted.length; i++) {
        let [name, price] = sorted[i].split(" : ");
        let firstLetter = name[0];
        if(!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][name] = price;
    }
    let keys = Object.keys(catalogue);
    for (let key of keys) {
        console.log(key);
        let sortedProducts = Object.keys(catalogue[key]).sort((a, b) => a.localeCompare(b));
        for (let product of sortedProducts) {
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
