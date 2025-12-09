import { Livre } from "../modules/livre";
import { Repository } from "../utils/repository";

export class Library {
    private livres: Repository<Livre>;

    constructor() {
        this.livres = new Repository<Livre>();
    }

    addLivre(livre: Livre): void {
        this.livres.add(livre);
    }

    removeLivre(livre: Livre): void {
        this.livres.remove(livre);
    }

    searchByTitle(title: string): Livre[] {
        return this.livres.getAll().filter(l => l.title.includes(title));
    }

    borrowLivre(livreId: number): boolean {
        const livre = this.livres.find(l => l.id === livreId);
        if (livre && livre.available) {
            livre.available = false;
            return true;
        }
        return false;
    }

    returnLivre(livreId: number): boolean {
        const livre = this.livres.find(l => l.id === livreId);
        if (livre && !livre.available) {
            livre.available = true;
            return true;
        }
        return false;
    }

    getLivres(): Livre[] {
        return this.livres.getAll();
    }
}
