function solve(...params) {
    let obj = {};
    for (let token of params) {
        console.log(`${typeof token}: ${token}`);
        if (!obj[typeof token]) {
            obj[typeof token] = 0;
        }
        obj[typeof token]++;        
    }
    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(key => console.log(`${key} = ${obj[key]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });