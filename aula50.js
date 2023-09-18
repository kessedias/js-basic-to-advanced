let a = 'A';
let b = 'B';
let c = 'C';

//retribuição de valor
const numeros = [1,2,3];
[a, b, c] = numeros

console.log(a,b,c);

const num = [1,2,3,4,5,6,7,8,9];

//usando operador rest
const [first, second, , ...resto] = num;
console.log(first, second);
console.log(resto);

const multarray = [[1,2,3], [4,5,6], [7,8,9]];
const [,[,,seis]] = multarray;
console.log(multarray[1][2]);//por desestruturação 
console.log(seis);