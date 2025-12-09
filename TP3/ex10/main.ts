import { Library } from "./services/library";
import { ApiService } from "./services/apiService";

async function main() {
    const library = new Library();

    const livres = await ApiService.fetchLivres();
    livres.forEach(livre => library.addLivre(livre));

    console.log("Livres disponibles au démarrage:");
    console.log(library.getLivres());

    const emprunt = library.borrowLivre(1);
    console.log(emprunt ? "Livre emprunté !" : "Impossible d'emprunter ce livre");

    console.log("Livres après emprunt:");
    console.log(library.getLivres());

    library.returnLivre(1);
    console.log("Livres après retour:");
    console.log(library.getLivres());
}

main();
