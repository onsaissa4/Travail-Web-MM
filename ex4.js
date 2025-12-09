const array1 = [1,2,3];
const array2 = [4,5,6];
const fusion = [...array1,...array2];
console.log(fusion); 

const obj1 = {a:1,b:2};
const obj2 = {...obj1,b:10};
console.log(obj2);