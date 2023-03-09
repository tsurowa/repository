function solve(input) {
  const result = [];
  for (let i = 1; i < input.length; i++) {
    let line = input[i].split(/\s*\|\s*/g);
    let town = line[1];
    let latitude = Number(line[2]).toFixed(2);
    let longitude = Number(line[3]).toFixed(2);
    let currObj = {
        Town: town, 
        Latitude: Number(latitude),
        Longitude: Number(longitude),
    }
    result.push(currObj);
  }
  console.log(JSON.stringify(result));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
console.log("---------");
solve([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
