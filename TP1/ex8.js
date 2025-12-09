function wait(ms) { //1-attendre ms millisecondes
    return new Promise(function(resolve) { //2- retourner une promesse qui se résout après ms millisecondes
        setTimeout(resolve, ms);
       // 3- utiliser setTimeout pour appeler resolve après ms millisecondes
    });
}

//1) afficher ("Début") dans la console
console.log("Début");
//2) appeler wait(2000) et attendre qu'elle se résolve
wait(2000).then(function() {
    //3) une fois la promesse résolue, afficher ("fin") dans la console
    console.log("Fin");
});