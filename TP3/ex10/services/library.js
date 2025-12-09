import { Repository } from "../utils/repository";
export class Library {
    livres;
    constructor() {
        this.livres = new Repository();
    }
    addLivre(livre) {
        this.livres.add(livre);
    }
    removeLivre(livre) {
        this.livres.remove(livre);
    }
    searchByTitle(title) {
        return this.livres.getAll().filter(l => l.title.includes(title));
    }
    borrowLivre(livreId) {
        const livre = this.livres.find(l => l.id === livreId);
        if (livre && livre.available) {
            livre.available = false;
            return true;
        }
        return false;
    }
    returnLivre(livreId) {
        const livre = this.livres.find(l => l.id === livreId);
        if (livre && !livre.available) {
            livre.available = true;
            return true;
        }
        return false;
    }
    getLivres() {
        return this.livres.getAll();
    }
}
//# sourceMappingURL=library.js.map