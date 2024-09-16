# Introduction 

Dans ce cours, nous allons apprendre a concevoir un back office en utilisant une architecutre API REST avec Node.js, Express, MySQL et Sequelize. Nous allons constuire un mini-projet de gestion de blibliothèque pour illustrer les concepts clés.



# Projet : Système de gestion de bibliothèque
Notre système permettra de : 
* Gérer les livres (ajouter, lister, mettre à jour, supprimer)
* Gérer les auteurs (ajouter, lister, mettre à jour, supprimer)
* Associer les auteurs à des livres

# Configuration de l'environnement de travail 
## Instalation des dépendances 
Dans le terminal vous allez entrer les commandes : 
```
npm init -y
npm i express mysql2 sequelize dotenv
npm i --save-dev nodemon
```

## Structure du projet 
```
 BookAPI/
 |-- src/
 |   |-- config/
 |   |   |-- database.js
 |   |-- models/
 |   |   |-- index.js
 |   |   |-- book.js
 |   |   |-- author.js
 |   |-- controllers/
 |   |   |-- bookController.js
 |   |   |-- authorController.js
 |   |-- routes/
 |   |   |-- bookRoutes.js
 |   |   |-- authorRoutes.js
 |   |-- middlewares/
 |   |   |-- errorHandler.js
 |   |-- app.js
 |-- .env
 |-- package.json
 |-- readme.md
```

# Modèles
## Qu'est ce qu'un modèle ?
Un modèle dans le contexte de Sequelize repréente une table dans votre base de données.
Il définit la sturcuture des données, les types de champs et les relations entre différentes tables.
Les modèles permettent d'intéraigir avec la base de données de manière orientée objet, sans avoir à écrire de requêtes SQL directement.

# Contrôleurs
## Qu'est ce qu'un contrôleur ?
Un crontrôler est responsable de la logique métier de votre application.
Il reçoit les requêtes de votre utilisateur via les routes.
Intéragit via les models pour accéder ou modifier les données, et préparre la réponse à envoyer.
Les contrôleurs agissent comme des intermédiaires entre les routes (qui définissent les points d'entrées de l'API) et les modèles (qui repréentent les données).

## Comprendre req, res et next 
Dans les fonctions de contrôleur, vous rencontrerez souvent les trois paramètres importants : 
1. `req` (Request)
    * Objet représentant le requête entrante 
    * Contient des informations sur la requête, comme les paramètres de la requête, les en-têtes HTTP, le corps de la requête, etc.
    * Exemple = `req.params`, `req.body`, `req.query`, `req.headers`
2. `res` (Response) :
    * Objet représentant la réponse HTTP que votre serveur ba envoyer 
    * Fournit des méthodes pour contrôler la réponse (définir le statut, les en-têtes HTTP, le corps de la réponse, etc.)
    * Exemple = `res.status()`, `res.send()`, `res.json()`, `res.sendFile()`
3. `next` (Next) :
    * Fonction qui passe le contrôle au middleware suivant
    * Utilisée pour la gestion des erreurs, quand appelée avec un argument 
    * Exemple = `next()` (passe au middleware suivant), `next(err)` (passe à un gestionnaire d'erreurs)


# Routes
## Qu'est ce qu'une route ?
Les routes définissent les points d'entrées de votre API.
Elles spécifient comment votre application répond a différentes requêtes HTTP (GET, POST, PUT, DELETE) sur différentes URL.
Les routes agissent comme des "aiguilleurs", dirigeant les requêtes vers les contrôleurs appropriés.

# Middlewares
## Qu'est ce qu'un middleware ?
Un middleware est une fonction qui a accès aux objets de requête (req), de réponse (res) et à la fonction suivante(next) dans le cycle de requête-réponse de l'application.
Les middlewares peuvent : 
* Exécuter du code avant
* Apporter des modifications aux objets de requête et de réponse
* Terminer le cycle requête-réponse
* Appeler le prochain middleware dans la pile 
Les middlewares sont utilisés pour des tâches telles que la journalisation, la gestions des erreurs, l'authentification, etc.
Exemple d'un middleware :


```js
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
}
app.use(loggerMiddleware);
```