import fs from "fs";

const declarations = JSON.parse(
  fs.readFileSync("data/declaration.json").toString(),
);

for (let i = 0; i < declarations.length; i++) {
  if (declarations[i].open_data == "" || !declarations[i].open_data) {
    continue;
  }

  fetch(`https://www.hatvp.fr/livraison/dossiers/${declarations[i].open_data}`)
    .then((res) => res.text())
    .then((result) => {
      console.log(`feching: ${declarations[i].open_data}`);

      fs.writeFileSync(`declarations/${declarations[i].open_data}`, result);
    })
    .catch((err) => {
      console.error(err);
    });
}
