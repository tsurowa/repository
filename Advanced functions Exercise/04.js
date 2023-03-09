function solution() {
  let store = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0,
  };
  let library = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };
  return function (input) {
    let [command, microEl, qty] = input.split(' ');
    qty = Number(qty);
    if(command === 'restock') {
        store[microEl] += qty;
        result = 'Success'
    } else if (command === 'prepare') {
        let ingredients = Object.keys(library[microEl]);
        for (let ingr of ingredients) {
            if (library[microEl][ingr] <= store[ingr]) {
                store[ingr] -= (library[microEl][ingr] * qty);
            } else {
                return `Error: not enough ${ingr} in stock `;
            }
        }
        return 'Success';
    } else if (command === 'report') {
        result = `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }
    return result;
  }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
