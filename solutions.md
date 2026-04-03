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
    const cinemasByRevenue = cinemas.toSorted((a, b) => b.seances - a.seances);

    console.log(cinemasByRevenue);
  })
  .catch((err) => console.error(err));

function draw() {}
```

# 3 

```js

```
