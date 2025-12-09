const notes = [12, 5, 17, 9, 20];
function addition (acc, note){
    return acc+ note;
}
const s = notes.reduce(addition);
console.log(s);
const m = s/notes.length;
console.log("moyenne = ",+m);

function cmprDesc(a,b){
    return b-a;
}
notesDesc = notes.slice().sort(cmprDesc);
console.log("notes apres tri: "+ notesDesc);
function sup10(a){
    return a >=10;
}
notesSup10 = notes.filter(sup10);
console.log("notes filtres = "+notesSup10);

