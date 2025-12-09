class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    getMention() {
        if (this.note >= 16) {
            return `Tres bien`
        }
        else {
            if (this.note >= 14){
                return `Bien`
            }
            else {
                if (this.note >= 10){
                    return `Passable`

                }
                else {
                    return `Echec`
                }
            }
        }
    }
}
e1 = new Etudiant("Ali", 17);
e2 = new Etudiant("Sara", 13);
e3 = new Etudiant("Noor", 9);

console.log(e1.nom, e1.getMention()); 
console.log(e2.nom, e2.getMention()); 
console.log(e3.nom, e3.getMention()); 