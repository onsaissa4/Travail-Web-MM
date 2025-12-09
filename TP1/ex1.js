var a = 5;
let b = 6;
const c = 7;

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("resultat ds bloc: ",a,b,c);


}
console.log("resultat out of block: ",a,b,c);
//var variable globale et les autres non