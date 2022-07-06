/*
 Exemplo0107 - v0.0. - __ / __ / _____
 Author: Ivan Pereira Reis Nascimento
 
 Para compilar em terminal (janela de comandos):
 Linux : gcc -o exemplo0101 exemplo0101.c
 Windows: gcc -o exemplo0101 exemplo0101.c
 Para executar em terminal (janela de comandos):
 Linux : ./exemplo0101
 Windows: exemplo0101
*/
// dependencias
#include <stdio.h>   // para as entradas e saidas
#include <stdbool.h> // para valores logicos
#include <string.h>  // para cadeias de caracteres
#include <math.h>    // para funcoes matematicas: pow(), sqrt(), sin(), cos()...
/*
 Funcao principal.
 @return codigo de encerramento
 @param argc - quantidade de parametros na linha de comandos
 @param argv - arranjo com o grupo de parametros na linha de comandos
*/
int main ( int argc, char* argv [ ] )
{
// definir dado
 double x = 0.0; // definir variavel com valor inicial
 double y = 0.0; // definir variavel com valor inicial
 double z = 0.0; // definir variavel com valor inicial
                                
// identificar
 printf ( "%s\n", "Exemplo0107 - Programa = v0.7" );
 printf ( "%s\n", "Autor: Ivan Pereira Reis Nascimento" );
 printf ( "\n" ); // mudar de linha

// mostrar valores iniciais
 printf ( "%s%lf\n", "x = ", x );
 printf ( "%s%lf\n", "y = ", y );
// OBS.: O formato para int -> %d (ou %i)
// ler do teclado
 printf ( "Entrar com um valor real: " );
 scanf ( "%lf", &x );
// OBS.: Necessario indicar o endereco -> &
 getchar ( ); // OBS.: Limpar a entrada de dados
 printf ( "Entrar com outro valor real: " );
 scanf ( "%lf", &y );
// OBS.: Necessario indicar o endereco -> &
 getchar ( ); // OBS.: Limpar a entrada de dados
// operar valores
 z = pow( x, y ); // elevar a base (x) 'a potencia (y)
// mostrar valor resultante
 printf ( "%s(%lf)*(%lf) = (%lf)\n", "z = ", x, y, z );
// operar valores
 z = pow( y, x ); // elevar a base (y) 'a potencia (x)
// mostrar valor resultante
 printf ( "%s(%lf)*(%lf) = (%lf)\n", "z = ", y, x, z );


// encerrar
 printf ( "\n\nApertar ENTER para terminar." );
 getchar( ); // aguardar por ENTER
 return ( 0 ); // voltar ao SO (sem erros)
} // fim main( )
/*
---------------------------------------------- documentacao complementar
---------------------------------------------- notas / observacoes / comentarios
---------------------------------------------- previsao de testes
a.) 2.0 e 3.0
b.) 3.0 e 2.0
c.) -3.0 e 2.0
d.) -2.0 e -3.0
---------------------------------------------- historico
Versao     Data          Modificacao
 0.1    30/03/2022         esboco
 0.2    30/03/2022   mudanca de versao
---------------------------------------------- testes
Versao Teste
0.1 01. ( OK ) identificacao de programa leitura e exibicao de inteiro
0.2 01. ( OK ) identificacao de programa
*/