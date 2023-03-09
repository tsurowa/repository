function solve(input) {
  let result = [];
  result.push("<table>");
  let data = JSON.parse(input);
  let properties = Object.keys(data[0]);
  result.push(`<tr>${properties.map((p) => `<th>${p}</th>`).join("")}</tr>`);
  for (let entry of data) {
    result.push(`<tr>${properties.map((p) => `<td>${entry[p]}</td>`).join("")}</tr>`);
  }
  result.push("</table>");
  result.forEach(el => console.log(el))
}

  solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)
;
