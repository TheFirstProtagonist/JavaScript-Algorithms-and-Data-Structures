"use strict";
const character = "#";
const count = 8;
const rows = [];
let inverted = true;
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    }
    else {
        rows.push(padRow(i, count));
    }
}
/*
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
*/
/*
for (let i: number = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
*/
const result = rows.join("\n");
console.log(result);
