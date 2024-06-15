const character: string = "#";
const count: number = 8;
const rows: string[] = [];
let inverted: boolean = true;

function padRow(rowNumber: number, rowCount: number): string {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
}


for (let i: number = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

const result: string = rows.join("\n");

console.log(result);