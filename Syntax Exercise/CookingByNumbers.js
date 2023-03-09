function CookingByNumbers(...params) {
    let startNum = Number(params[0]);
    for (const command of params) {
        switch (command) {
            case 'chop':
                startNum /= 2;
                console.log(startNum);
                break;
            case 'dice':
                startNum = Math.sqrt(startNum);
                console.log(startNum);
                break;
            case 'spice':
                startNum += 1;
                console.log(startNum);
                break;
            case 'bake':
                startNum *= 3;
                console.log(startNum);
                break;
            case 'fillet':
                startNum = startNum - (startNum * 0.20);
                console.log(startNum);
                break;
        }
    }
}

CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
