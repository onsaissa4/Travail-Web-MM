import { Personne } from "./personne";

export type Role = "User" | "Admin";

export class Utilisateur extends Personne {
    constructor(id: number, name: string, public role: Role) {
        super(id, name);
    }
}
