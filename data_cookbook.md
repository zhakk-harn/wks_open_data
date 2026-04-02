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

# From Array...

## ...to object mapping the occurences

```js
const myArray = [ 3, 8, 18, 4, 6, 18, 3, 11, 14, 12, 18, 17, 15, 12, 17, 6, 17, 4, 7, 18, 3, 18,
  3, 11, 3, 11, 3, 11, 8, 15, 10, 10, 13, 3, 9, 18, 4, 15, 5, 16, 14, 16, 9, 3,
  13, 16, 18, 3, 4, 14, 4, 4, 14, 13, 15, 5, 18, 17, 7, 14, 6, 15, 16, 11, 13,
  3, 3, 10, 8, 18, 7, 17, 4, 18, 14, 5, 4, 6, 10, 3, 13, 8, 16, 3, 16, 3, 4, 18,
  4, 18, 17, 11, 4, 12, 7, 5, 10, 13, 17, 9, 5, 9, 6, 3, 6, 17, 14, 6, 14, 16,
  18, 3, 18, 17, 18, 3, 15, 5, 3, 3, 18, 18, 18, 18, 18, 15, 18, 17, 11, 5, 12,
  6, 8, 3, 18, 9, 3, 16, 3, 16, 3, 8, 18, 7, 7, 18, 3, 9, 8, 12,]

let mapOfOccurences = {};

for(let i = 0; i < myArray.length; i++){
    if(!mapOfOccurences[myArray[i]]){
        mapOfOccurences[myArray[i]] = 1;
    }else{
        mapOfOccurences[myArray[i]] += 1;
    }
}
```