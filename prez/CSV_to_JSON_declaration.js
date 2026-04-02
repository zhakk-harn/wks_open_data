import fs from "fs";

const declarations = fs.readFileSync("data/declaration.csv").toString();

const lines = declarations.split("\n");

const columnName = lines[0].split(";");
const dataLines = lines.slice(1);

for (let i = 0; i < dataLines.length; i++) {
  dataLines[i] = dataLines[i].split(";");

  const objForm = {};

  for (let j = 0; j < columnName.length; j++) {
    objForm[columnName[j]] = dataLines[i][j];
  }

  dataLines[i] = objForm;
}

console.log(columnName);
console.log(dataLines.slice(0, 3));

fs.writeFileSync("data/declaration.json", JSON.stringify(dataLines));
