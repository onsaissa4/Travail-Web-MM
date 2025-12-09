import { Personne } from "./personne";
export class Utilisateur extends Personne {
    role;
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
}
//# sourceMappingURL=utilisateur.js.map