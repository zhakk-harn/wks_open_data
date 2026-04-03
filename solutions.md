# 1

```js
fetch("etablissements-cinematographiques.json")
  .then((res) => res.json())
  .then((cinemas) => {
    console.log(cinemas.slice(0, 5));
  })
  .catch((err) => console.error(err));

function draw() {}
```

# 2

```js
fetch("etablissements-cinematographiques.json")
  .then((res) => res.json())
  .then((cinemas) => {
    const cinemasByRevenue = cinemas.toSorted(
      (a, b) => b.entrees_2022 - a.entrees_2022,
    );

    console.log(cinemasByRevenue);
  })
  .catch((err) => console.error(err));

function draw() {}
```

# 3

```js
fetch("etablissements-cinematographiques.json")
  .then((res) => res.json())
  .then((cinemas) => {
    let totalEntree = 0;
    let totalEntreeAmericaines = 0;

    for (let i = 0; i < cinemas.length; i++) {
      totalEntree += cinemas[i].entrees_2022;
      totalEntreeAmericaines +=
        (cinemas[i].entrees_2022 *
          cinemas[i].pdm_en_entrees_des_films_americains) /
        100;
    }

    console.log((totalEntreeAmericaines / totalEntree) * 100);
  })
  .catch((err) => console.error(err));

function draw() {}
```

# 4

```js
let dataset = null;

let populationCommuneMax = 0;
let entreeMax = 0;

fetch("etablissements-cinematographiques.json")
  .then((res) => res.json())
  .then((cinemas) => {
    for (let i = 0; i < cinemas.length; i++) {
      if (cinemas[i].entrees_2022 > entreeMax) {
        entreeMax = cinemas[i].entrees_2022;
      }

      if (cinemas[i].population_de_la_commune > populationCommuneMax) {
        populationCommuneMax = cinemas[i].population_de_la_commune;
      }
    }

    dataset = cinemas;

    console.log(dataset.slice(0, 3));
  })
  .catch((err) => console.error(err));

function draw() {
  // if no dataset then cancel draw
  if (dataset == null) {
    return;
  }

  for (let i = 0; i < dataset.length; i++) {
    circle(
      (width * dataset[i].population_de_la_commune) / populationCommuneMax,
      height - (height * dataset[i].entrees_2022) / entreeMax,
      30,
    );
  }
}
```
