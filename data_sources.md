# Datasets

## Vie publique

- HATVP : https://www.hatvp.fr/
- https://www.data.gouv.fr/
    - Les cinemas (merci Cylian pour le dataset de qualite) : https://data.culturecommunication.gouv.fr/explore/dataset/etablissements-cinematographiques/export/
- https://www.regardscitoyens.org/open-data-en-france/
- Le registre des arbres à Berlin : https://hub.arcgis.com/datasets/esri-de-content::baumkataster-berlin/explore?location=52.516033%2C13.377780%2C18

## Vie quotidienne

- Open Food Facts : https://fr.openfoodfacts.org/data
- La SNCF : https://ressources.data.sncf.com/pages/accueil/
- Trajets maritime : https://www.fleetmon.net/shipping-resources

## ... tout un tas d'autres trucs que j'ai pas verifie (la derniere MaJ date d'il y a 12 ans ^_^")
- https://github.com/awesomedata/awesome-public-datasets

# APIs

## Wikipedia : 
- Effectuer une recherche pour recuperer une liste d'articles : 
```
https://${lang}.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&formatversion=2&srsearch=${searchQuery}&srlimit=${limit}&sroffset=${offset}&origin=*
```

Exemple : 
```
https://fr.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&formatversion=2&srsearch=test&srlimit=${limit}&sroffset=0&origin=*
```

- Recuperer le contenu d'un article
```
https://${lang}.wikipedia.org/w/api.php?action=parse&page=${title}&prop=text|headhtml&format=json&origin=*
```

Exemple : 
```
https://en.wikipedia.org/w/api.php?action=parse&page=Wassily_Kandinsky&prop=text|headhtml&format=json&origin=*
```

## "Backdoor" Youtube via RSS 

Le "channelID" est trouvable en consultant le code de la page pour une chaine donnee

```
https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}
```

## ... tout un tas d'autres trucs que j'ai pas verifie

- https://github.com/public-apis/public-apis