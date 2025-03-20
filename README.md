# Dechiffrage

# 🔐 Devoir de Cybersécurité : Système de Chiffrement  

## 📌 Description  
Ce projet consiste en le développement d'une application web permettant aux employés de **TechSecure** de **chiffrer et déchiffrer des messages sensibles** avant tout échange par email ou messagerie.  

Dans un contexte où les fuites de données sont de plus en plus fréquentes, cet outil vise à améliorer la **protection des communications internes** grâce à un **chiffrement symétrique** simple et efficace, réalisé entièrement côté client.  

## 🎯 Objectifs  
- Développer une application **100% front-end** (HTML, CSS, JavaScript).  
- Implémenter un système de chiffrement et de déchiffrement via une **clé secrète**.  
- Assurer une interface utilisateur **intuitive** et **responsive**.  
- Permettre aux utilisateurs de **chiffrer/déchiffrer leurs messages facilement**.  
- Fournir une explication claire du fonctionnement de l'algorithme utilisé.  

## 🚀 Fonctionnalités  
✔ Interface simple et ergonomique.  
✔ Champ pour entrer un message à chiffrer/déchiffrer.  
✔ Saisie d’une clé secrète pour le chiffrement.  
✔ Boutons pour **chiffrer** et **déchiffrer** le message.  
✔ Affichage du résultat chiffré/déchiffré.  
✔ Explication de l'algorithme utilisé dans l'application.  

## 🛠️ Technologies utilisées  
- **HTML** → Structure de la page.  
- **CSS** → Mise en forme et design responsive.  
- **JavaScript** → Implémentation de l’algorithme de chiffrement.  

## 🔑 Algorithmes de chiffrement  
L’application utilise **l’API Web Crypto de JavaScript** pour implémenter **AES (Advanced Encryption Standard)**.  
En option, des algorithmes plus simples comme **le chiffre de César ou le chiffre de Vigenère** peuvent être utilisés pour une meilleure compréhension des principes de chiffrement.  

## ⚙️ Instructions d’utilisation  
1. **Clonez** ce dépôt Git :  
   ```sh
   git clone https://github.com/utilisateur/nom-du-repo.git
   ```
2. **Ouvrez** le fichier `index.html` dans un navigateur.  
3. **Saisissez** un message et une clé secrète.  
4. **Cliquez sur "Chiffrer"** pour voir le message chiffré.  
5. **Cliquez sur "Déchiffrer"** pour récupérer le message d'origine.  

## 📂 Structure du projet  
```
/projet-chiffrement/
│── index.html      # Interface de l’application  
│── Css             # Design et mise en page  
│── Javascript      # Logique du chiffrement/déchiffrement  
│── README.md       # Documentation du projet  
└── rapport.pdf     # Rapport décrivant le travail en équipe  
```
## 📂 Structure du projet  

1. `index.html`

Le fichier *HTML* contient la structure de la page, incluant :
- Un champ de texte pour entrer le message à chiffrer.
- Un champ pour entrer la valeur du décalage (le nombre d'unités de décalage pour le chiffrement).
- Un bouton pour effectuer l'action de chiffrement et afficher les résultats.
- Des sections pour afficher le message chiffré et déchiffré.

2. `styles.css`

Le fichier *CSS* applique un design simple à la page :
- Il centre la page avec des styles de base pour le texte, les boutons et les champs de saisie.
- Des couleurs et des effets de survol sont ajoutés pour améliorer l'expérience utilisateur.

3. `script.js`

Le fichier *JavaScript* contient la logique de chiffrement et déchiffrement :
- La fonction `chiffrementCesar()` effectue le chiffrement en décalant les caractères de l'alphabet en fonction du décalage choisi.
- La fonction `dechiffrementCesar()` utilise un décalage négatif pour inverser le chiffrement.
- Le script écoute le clic sur le bouton "Chiffrer" pour appliquer le chiffrement et afficher les résultats dans la page.

## Comment utiliser

1. Clonez ce dépôt sur votre machine.
2. Ouvrez le fichier `index.html` dans votre navigateur.
3. Entrez un message dans le champ prévu, définissez un décalage, et appuyez sur le bouton *Chiffrer*.
4. Vous verrez le texte chiffré et le texte déchiffré s'afficher en dessous.
## 🤝 Collaboration  
Ce projet est réalisé en **équipe de 3 à 4 étudiants**. L'utilisation de **Git et GitHub** est recommandée pour une gestion efficace du code et des contributions de chacun.  

## ✍️ Auteurs  
- **Lamour Christian**  
- **Dorvilien Genephile**  
- **Laurat Ferrentz**    

## 📜 Licence  
Ce projet est sous licence MIT – voir le fichier [LICENSE](LICENSE) pour plus de détails.  
