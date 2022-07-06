#include <stdio.h>
#include <math.h>
int main ( int argc, char* argv [ ] )
{

 int x = 0; // definir variavel com valor inicial

 printf ( "%s\n", "Exemplo0111 - Programa = v0.1" );
 printf ( "%s\n", "Autor: __Ivan_Pereira_Reis_Nascimento__" );

// mostrar valor inicial
 printf ( "%s%d\n", "x = ", x );

// ler do teclado
 printf ( "Entrar com um valor inteiro: " );
 scanf ( "%d", &x );

 getchar ( ); 

// Calculo
 x = x * x;
 x = x/4; 

// mostrar valor lido
 printf ( "%s%i\n", "x = ", x );

// encerrar
 printf ( "\n\nApertar ENTER para terminar." );
 getchar( ); // aguardar por ENTER
 return ( 0 ); // voltar ao SO (sem erros)
} 