# NewsPilot

## Description

NewsPilot est une application web Fullstack développée dans le cadre d’un projet de fin de formation développeur Fullstack JavaScript.  
Elle permet de consulter, rechercher et filtrer des actualités issues de différents sites, en récupérant leurs flux RSS directement.

---

## Fonctionnalités principales

- Récupération d’actualités depuis plusieurs flux RSS choisis manuellement  
- Affichage des dernières nouvelles en temps réel  
- Recherche par mots-clés  
- Filtrage par catégories et sources  
- Pagination dynamique  
- Authentification utilisateur 
- Interface responsive (adaptée mobiles et tablettes)  

---

## Technologies utilisées

- **Frontend :** React.js, Redux (ou contexte API), Axios  
- **Backend :** Node.js, Express.js  
- **Base de données :** MongoDB (ou autre)  
- **Parsing RSS :** [rss-parser](https://www.npmjs.com/package/rss-parser) (ou équivalent)  
- **Authentification :** JWT (si utilisée)  


---

## Installation & mise en route

1. **Cloner le dépôt**  
    ```bash
    git clone https://github.com/halima570/NewsPilot_PFF_fullstack_js.git
    cd NewsPilot_PFF_fullstack_js
    ```

2. **Installer les dépendances côté backend**  
    ```bash
    cd backend
    npm install
    ```

3. **Installer les dépendances côté frontend**  
    ```bash
    cd ../frontend
    npm install
    ```

4. **Configurer les flux RSS**  
    - Pour chaque site d’actualité que tu souhaites suivre, trouve l’URL de son flux RSS.  
    - Ajoute ces URLs dans le fichier `config/rssFeeds.js` (ou le fichier équivalent).  

    Exemple :  
    ```javascript
    module.exports = [
        "https://www.francetvinfo.fr/titres.rss",
        "https://www.lemonde.fr/rss/une.xml",
        "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
    ];
    ```

5. **Lancer le serveur backend**  
    ```bash
    cd ../backend
    npm start
    ```

6. **Lancer le client frontend**  
    ```bash
    cd ../frontend
    npm start
    ```

7. **Ouvrir l’application dans ton navigateur**  
   Visite [http://localhost:3000](http://localhost:3000)  
   et connecte-toi pour accéder à toutes les fonctionnalités.

---

## Configuration

- Crée un fichier `.env` dans le dossier backend pour stocker tes variables d’environnement, par exemple :  
    ```
    PORT=5000
    MONGODB_URI=ton_url_mongodb
    JWT_SECRET=ton_secret_pour_jwt
    ```
- Vérifie que les flux RSS que tu utilises sont accessibles publiquement et bien formatés.

- Pour ajouter un nouveau site, récupère son URL RSS et ajoute-la au fichier de configuration.

---

## Utilisation

- Lance le backend puis le frontend comme indiqué ci-dessus.  
- Les actualités sont automatiquement récupérées depuis les flux RSS configurés.  
- Utilise la recherche et les filtres pour naviguer parmi les nouvelles.

---
## Contact

Pour toute question, tu peux me contacter via mon profil linkedin 
www.linkedin.com/in/halima-el-hagouchi-61a21a213.
