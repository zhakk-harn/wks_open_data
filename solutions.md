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

# 5
```js
let dataset = [];


fetch("etablissements-cinematographiques.json")
  .then((res) => res.json())
  .then((cinemas) => {
    let departments = [];

    for (let i = 0; i < cinemas.length; i++) {
      const department = parseInt(cinemas[i].dep);

      if (!departments[department]) {
        departments[department] = { dep: department, cinemas: [] };
      }

      departments[department].cinemas.push(cinemas[i]);
    }



    // log intermediaire pour verifier la forme apres premiere transformation
    console.log(departments);

    // reponse a la pemiere partie de la question
    const sortedDepartments = departments.toSorted((a, b) => b.cinemas.length - a.cinemas.length);
    console.log(sortedDepartments);

    for (let i = 0; i < sortedDepartments.length; i++) {
      if (!sortedDepartments[i]) {
        continue;
      }

      let totalEntrees = 0;
      let totalEntreesAmericaines = 0;
      let totalEntreesEuropeennes = 0;
      let totalEntreesFrancais = 0;
      let totalEntreesAutre = 0;

      for (let j = 0; j < sortedDepartments[i].cinemas.length; j++) {
        totalEntrees += sortedDepartments[i].cinemas[j].entrees_2022;
        totalEntreesAmericaines += sortedDepartments[i].cinemas[j].entrees_2022 * sortedDepartments[i].cinemas[j].pdm_en_entrees_des_films_americains / 100;
        totalEntreesEuropeennes += sortedDepartments[i].cinemas[j].entrees_2022 * sortedDepartments[i].cinemas[j].pdm_en_entrees_des_films_europeens / 100;
        totalEntreesFrancais += sortedDepartments[i].cinemas[j].entrees_2022 * sortedDepartments[i].cinemas[j].pdm_en_entrees_des_films_francais / 100;
        totalEntreesAutre += sortedDepartments[i].cinemas[j].entrees_2022 * sortedDepartments[i].cinemas[j].pdm_en_entrees_des_autres_films / 100;
      }

      console.log({ totalEntrees, totalEntreesAmericaines, totalEntreesAutre, totalEntreesEuropeennes, totalEntreesFrancais });


      sortedDepartments[i].entrees_2022 = totalEntrees;
      sortedDepartments[i].pdm_en_entrees_des_films_americains = totalEntreesAmericaines / totalEntrees * 100;
      sortedDepartments[i].pdm_en_entrees_des_films_europeens = totalEntreesEuropeennes / totalEntrees * 100;
      sortedDepartments[i].pdm_en_entrees_des_films_francais = totalEntreesFrancais / totalEntrees * 100;
      sortedDepartments[i].pdm_en_entrees_des_autres_films = totalEntreesAutre / totalEntrees * 100;
    }

    console.log(sortedDepartments);

    dataset = sortedDepartments;
  })
  .catch((err) => console.error(err));

function draw() {
  // je vous laisse le choix dans le mode de representation
}
```