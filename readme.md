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