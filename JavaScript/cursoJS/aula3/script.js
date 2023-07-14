let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log(varA, varB, varC);

const tempA = 'A'

varA = varB;
varB =  varC;
varC = tempA;

//ou tem essa 

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);