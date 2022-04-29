var input = require("fs").readFileSync("input", "utf8");
var value = parseInt(input.split("\n"));
console.log(value);

const possibleBankNotes = [100, 50, 20, 10, 5, 2, 1];
let bankNotesWithValues = {};
let remainingValue = value;

possibleBankNotes.forEach((bankNote) => {
  const bankNoteAmount = Math.floor(remainingValue / bankNote);
  remainingValue = remainingValue % bankNote;

  bankNotesWithValues = {
    ...bankNotesWithValues,
    ...{ [bankNote]: bankNoteAmount },
  };
});

Object.entries(bankNotesWithValues)
  .sort((a, b) => Number(b[0]) - Number(a[0]))
  .forEach((bankNoteWithValue) => {
    console.log(`${bankNoteWithValue[1]} nota(s) de R$ ${bankNoteWithValue[0]},00`);
  });