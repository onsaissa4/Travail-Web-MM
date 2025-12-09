const livre = {
    titre: "Les miserables",
    auteur: "Victor Hugo",
    annee: 1900,
    getInfo() {
        return `${this.titre} ecrit par ${this.auteur} en ${this.annee}`;
    }
};

console.log(livre.getInfo());