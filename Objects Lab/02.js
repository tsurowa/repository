function solve(input) {
    const result = {};
    for (let line of input) {
        let tokens = line.split(" <-> ");
        let name = tokens[0];
        let population = Number(tokens[1]);

        if(name in result) {
            result[name] += population;
        } else {
            result[name] = population;
        }
    }
    for (let res in result) {
        console.log(`${res} : ${result[res]}`);
    }
}

solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
