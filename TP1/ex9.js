async function afficher5Titres() {
    try {
        //  1)attendre promesse renvoyée par fetch qui va récupérer les données depuis l'API
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");

        // 2) convertir la réponse en JSON
        const donnees = await reponse.json();
    
        //  3) prendre les 5 premiers
        const premiers = donnees.slice(0, 5);

        //  4) affichage ds la console
        for (let post of premiers) {
            console.log(post.title);
        }
    } catch (erreur) {
        console.error("Erreur de récupération des données :", erreur);
    }
}
afficher5Titres();
