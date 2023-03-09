function juice(input) {
  class Bottle {
    constructor(juice, qty) {
      this.juice = juice;
      this.qty = qty;
    }
  }
  let result = {};
  for (let line of input) {
    let [juice, qty] = line.split(" => ");
    qty = Number(qty);
    if (!result.hasOwnProperty(juice)) {
      result[juice] = {bottles: 0, quantity: 0}; 
    }
    result[juice].quantity += qty;
        while (result[juice].quantity >= 1000) {
            result[juice].bottles += 1;
            result[juice].quantity -= 1000;
            if (result[juice].bottles === 1) {
                let currQty = result[juice].quantity;
                delete result[juice];
                result[juice] = {bottles: 1, quantity: currQty}
            }
        }
    
}
    for (const typeOfJuice in result) {
        if(result[typeOfJuice].bottles > 0) {
            console.log(`${typeOfJuice} => ${result[typeOfJuice].bottles}`);
        }
    }
}

juice([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
juice([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
