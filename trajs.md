# 1 : Traitement (recommandé)

Tout est a faire dans p5-espress (aucun traitement à faire via nodejs)

1.S'afficher dans la console les 5 premiers éléments de `etablissements-cinematographiques.json` trouvé à https://data.culturecommunication.gouv.fr/explore/dataset/etablissements-cinematographiques/export/
  - fetch : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  - JSON.parse : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  - Array.slice : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
2.Trier le dataset par ~~revenus~~ nombre décroissant d'entree et s'afficher les 10 premiers
  - Array.toSorted : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
3.Trouver la part de marché moyenne pour les films américains tout cinémas confondus

4.Représenter les cinémas par des cercles avec, en texte, l'addresse (ou au moin une info qui nous permet de le reconnaitre). 
  - position en X = la population de la commune 
  - position en Y = le nombre d'entrees
  - bonus : quand je passe ma souris sur un nom tous les autres devraient s'afficher avec moins de contraste pour que je puisse mieux voir celui qui est proche de ma souris

5.Grouper les cinémas par département de sorte à ce que notre dataset soit maintenant un array de la forme suivante
```js
[
  [], // departement 00 qui n'existe pas donc array vide pour cette adresse
  [/*...*/], // departement 01
  [/*...*/], // departement 02
  [/*...*/], // departement 03
  [/*...*/], // departement 04
  /*etc...*/
]
```
  - trouvez le nombre de cinémas par département et afficher la liste des départements par ordre décroissant de cinemas
  - calculer le nombre de films français, américain, europpéen et autres par département et représenter chaque département par son mix de la façon que vous voulez.

# 2 : Plus doucement

https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X

# 3 : Libre

On peut accepter que la partie data c'est trop tôt et essayer de librement creuser l'utilisation créative de p5.js en continuant à se challenger sur la production de visuels idéallement interactifs.

Ou alors, ce qui serait un possiblement mieux, serait d'essayer d'autre librairies graphiques 

- chart.js
- D3.js
- libs d'animation
  - https://animejs.com/
  - https://gsap.com/
  - https://motion.dev/
- Raw Graph (pas vraiment une lib)

