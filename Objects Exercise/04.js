function solve (input) {
    let result = [];
    for(let i = 0; i < input.length; i++) {
        let line = input[i];
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        if(items) {
            items = items.split(", ");
        } else {
            items = [];
        }
        const hero = {
            name, 
            level, 
            items
        }
        result.push(hero)
    }
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
console.log('---------');
solve(['Jake / 1000 / Gauss, HolidayGrenade']);