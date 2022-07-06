/*

function mensagem() {
    console.log("Olá Mundo!");
}

mensagem();
----------------------------------------------------------------
function mensagem() {
    return "Olá Mundo!";
}

console.log( mensagem() );

----------------------------------------------------------------
function mensagem(nome) {
    return `Olá ${nome}!`;
}

console.log( mensagem ('Ana') );
console.log( mensagem ('José') );
console.log( mensagem ('Pedro') );
console.log( mensagem ('Álvaro') );

----------------------------------------------------------------
function soma(a, b) {
    return a + b;
}

console.log( soma(2, 3));
console.log( soma(5, 1));
console.log( soma(3, 9));

----------------------------------------------------------------

console.log( 
    function(a, b) {return a + b;}
    );
    
    console.log( 
        (function(a, b) {return a + b;})(4, 5) //IIFE
        );
        
        let soma1 = function(a, b) {return a + b;};
        console.log( soma1(4, 3) );
        
----------------------------------------------------------------      

        let sum = function(a, b) {return a + b;}
        let sub = function(a, b) {return a - b;}
        let mul = function(a, b) {return a * b;}
        let div = function(a, b) {return a / b;}
        
        function executa(fn, a, b) { return fn(a, b); }
        
        console.log(executa( sum, 12, 3));
        console.log(executa( sub, 12, 3));
        console.log(executa( mul, 12, 3));
        console.log(executa( div, 12, 3));
        
*//*

let fat = function fatorial(n){
    if(n<=1) return 1;
    return n* fatorial(n-1);
}

console.log(fat(4));
console.log(fat(3));
console.log(fat(5));

*/

let adicao1 = function(a, b) {return a + b;}  //ARROW FUNCTION
let adicao2 = (a, b) => a + b;

console.log(adicao1(3, 4));
console.log(adicao2(3, 4));