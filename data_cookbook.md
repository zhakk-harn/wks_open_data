# From object...

## ... to array

array des clefs (a.k.a. "proprietes" ou "noms des valeurs")
```js
Object.keys(monObj);
```

array des valeurs
```js
Object.values(monObj);
```

array de couples "cle,valeur"
```js
Object.entries(monObj);
```

## ... to string

```js
JSON.stringify(monObj);
```

# From String...

## ... to Object

```js
JSON.parse(maString);
```

## ... to array

```js
const delimiteur = ",";
const subStrings = maString.split(",");
```

//TODO a continuer

## regex(?)