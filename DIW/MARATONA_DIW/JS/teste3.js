/*

b = --a * 2; pré-decremento: a = a - 1, b = a * 2
b = a-- * 2; pós-decremento: b = a * 2, a = a - 1 
b = ++a * 2; pré-incremento: a = a + 1, b = a * 2
b = a++ * 2; pós-incremento: b = a * 2, a = a + 1 

*/

let n = +'12';
console.log(n,typeof n);

n = '12';
console.log(n,typeof n);

let a, b;
a = 2;
b = --a * 2; 
console.log(a,typeof a, b, typeof b);
a = 2;
b = a-- * 2; 
console.log(a,typeof a, b, typeof b);
a = 2;
b = ++a * 2;
console.log(a,typeof a, b, typeof b);
a = 2;
b = a++ * 2;
console.log(a,typeof a, b, typeof b);

let nome = 'José';
let sobrenome = 'Pereira';
console.log(nome + ' ' + sobrenome);

a = "5" + 2;
console.log(`a = ${a} do tipo ${typeof a}`);

b = +"5" + 2;
console.log(`b = ${b} do tipo ${typeof b}`);

let c = "5" - 2;
console.log(`c = ${c} do tipo ${typeof c}`);

let d = 5 + '2';
console.log(`d = ${d} do tipo ${typeof d}`);

let e = 5 - '2';
console.log(`e = ${e} do tipo ${typeof e}`);

let f = 5 + 2 + '2';
console.log(`f = ${f} do tipo ${typeof f}`);

let g = 5 + '2' + 2;
console.log(`g = ${g} do tipo ${typeof g}`);

let h = +( 5 + '2') + 2;
console.log(`h = ${h} do tipo ${typeof h}`);

let i = '5' / 2;
console.log(`i = ${i} do tipo ${typeof i}`);

// (idade >= 18)? true: false;

/*

let a = 2, b = 1, operador = '+';
switch( operador ) {
    case '+':
        console.log( a+b );
        break;
    case '-':
        console.log( a-b );
        break;
    case '*':
    case '/':    
        console.log( "operador não implementado" );
        break;
    default:
        console.log( "operador inválido" );                
}

let i = 0;
while( i<3 ) {
    console.log( i );
    i++;
}

do {
    console.log( i );
    i++;
} while ( i<3 );


for( let p = 0; p < 10; p++ ) {
    if( p%2 == 0 ) 
    console.log( p + "é um número par" );
}


for( let p = 0; p < 10; p++ ) {
    if( p%2 == 0 ) {
    continue; 
    console.log( p + "é um número par" );
   }
}


for( let p = 0; p < 10; p++ ) {
    if( p%2 == 0 ) {
    break;
    console.log( p + "é um número par" );
  }
}

*/
