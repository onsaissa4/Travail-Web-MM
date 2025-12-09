import { Livre } from "../modules/livre";
export declare class Library {
    private livres;
    constructor();
    addLivre(livre: Livre): void;
    removeLivre(livre: Livre): void;
    searchByTitle(title: string): Livre[];
    borrowLivre(livreId: number): boolean;
    returnLivre(livreId: number): boolean;
    getLivres(): Livre[];
}
//# sourceMappingURL=library.d.ts.map