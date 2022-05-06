var input = require("fs").readFileSync("input", "utf8");
var value = parseInt(input.split("\n"));

if (value == 1) console.log("0");
else {
  const values = [0, 1];

  for (let i = 0; i < value - 2; i++) {
    const sumTwoValues = values[i] + values[i + 1];
    values.push(sumTwoValues);
  }

  console.log(values.join(" "));
}
