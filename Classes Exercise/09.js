function cars (input) {
    class Car {
        constructor(carBrand, carModel, producedCars) {
            this.carBrand = carBrand;
            this.carModel = carModel;
            this.producedCars = producedCars;
        }
    }
    let result = {};
    input.map(el => {
        let [carBrand, carModel, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);
        if(!result.hasOwnProperty(carBrand)) {
            result[carBrand] = {};
        }
        if(result[carBrand][carModel]) {
            result[carBrand][carModel] += Number(producedCars);
        } else {
            result[carBrand][carModel] = Number(producedCars);
        }
    });
    for (const carBrand in result) {
        console.log(`${carBrand}`);
        for(const carModel in result[carBrand]) {
            console.log(`###${carModel} -> ${result[carBrand][carModel]}`);
        }
    }
    
}

cars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);