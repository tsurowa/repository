function Fruit(typeFruit, weightInGr, priceKg) {
    let weightInKg = weightInGr / 1000;
    let totalPrice = weightInKg * priceKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeFruit}.`);
}

Fruit('orange', 2500, 1.80);
Fruit('apple', 1563, 2.35);