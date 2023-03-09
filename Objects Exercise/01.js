function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    let name = arr[i];
    let calories = Number(arr[i + 1]);
    obj[name] = calories;
  }
  console.log(obj);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
