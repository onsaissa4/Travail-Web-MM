import { Personne } from "./personne";
export type Role = "User" | "Admin";
export declare class Utilisateur extends Personne {
    role: Role;
    constructor(id: number, name: string, role: Role);
}
//# sourceMappingURL=utilisateur.d.ts.map