function solve(input) {
    let result = {};
    for(let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(" | ");
        price = Number(price);

        if(!result[product]) {
            result[product] = {price, town};
        } else {
            if (result[product].price > price) {
                result[product] = {price, town};
            }
        }
    }
    let products = Object.keys(result);
    products.forEach(product => {
        console.log(`${product} -> ${result[product].price} (${result[product].town})`);
    })
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);