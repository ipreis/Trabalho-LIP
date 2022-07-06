#include <stdio.h>
#include <math.h>
int main ( int argc, char* argv [ ] )
{

 int x = 0; 
 int y = 0;

 printf ( "%s\n", "Exemplo0111 - Programa = v0.1" );
 printf ( "%s\n", "Autor: __Ivan_Pereira_Reis_Nascimento__" );

// mostrar valor inicial
 printf ( "%s%d\n", "x = ", x );

// ler do teclado
 printf ( "Entrar com um valor inteiro: " );
 scanf ( "%d", &x );

 printf ( "Entrar com outro valor inteiro: " );
 scanf ( "%d", &y );

 getchar ( ); 

// Calculo
 x = x * 2;
 y = y * 2;

// mostrar valor lido
 printf ( "%s%i Perimetro = %i\n", "Area = ", x * y , 2 * ( x + y ) );

// encerrar
 printf ( "\n\nApertar ENTER para terminar." );
 getchar( ); // aguardar por ENTER
 return ( 0 ); // voltar ao SO (sem erros)
} 