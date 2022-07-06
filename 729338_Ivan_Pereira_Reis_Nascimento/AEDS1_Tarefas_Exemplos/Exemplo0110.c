/*
 Exemplo0109 - v0.10. - __ / __ / _____
 Author: Ivan Pereira Reis Nascimento
 
 Para compilar em terminal (janela de comandos):
 Linux : gcc -o exemplo0109 exemplo0109.c
 Windows: gcc -o exemplo0109 exemplo0109.c
 Para executar em terminal (janela de comandos):
 Linux : ./exemplo0109
 Windows: exemplo0109
*/
// dependencias
#include <stdio.h> // para as entradas e saidas
#include <stdbool.h> // para valores logicos
#include <string.h> // para cadeias de caracteres
#include <math.h> // para funcoes matematicas
#include "io.h"   // para definicoes proprias ( na mesma pasta )
/*
 Funcao principal.
 @return codigo de encerramento
 @param argc - quantidade de parametros na linha de comandos
 @param argv - arranjo com o grupo de parametros na linha de comandos
*/
int main ( int argc, char* argv [ ] )
{
// definir dados singulares
 int x = 0 ; // definir variavel com valor inicial para guardar inteiro
 double y = 3.5; // definir variavel com valor inicial para guardar real
 char z = 'A'; // definir variavel com valor inicial para guardar caractere (simbolo)
 bool w = true; // definir variavel com valor inicial para guardar falso ou verdadeiro
 char* a = IO_new_char(STR_SIZE); // definir variavel com tamanho inicial
 char* b = IO_new_char(STR_SIZE); // definir variavel com tamanho inicial
 char* c = IO_new_char(STR_SIZE); // definir variavel com tamanho inicial

// identificar
 IO_id ( "EXEMPLO0110 - Programa - v0.10" );
 printf ( "%s\n", "Autor: Ivan Pereira Reis Nascimento" );
 printf ( "\n" ); // mudar de linha
// concatenar (juntar) cadeias de caracteres
 strcpy ( a, "abc" ); // atribuir a variavel (a) o valor constante ("abc")
 strcpy ( b, "def" ); // OBS.: a atribuicao de cadeia de caracteres NAO usa (=)
 IO_printf ( "\na = %s b = %s\n", a, b );
 c = IO_concat ( a, b ); // alternativa melhor para a funcao nativa strcat (a,b)
 IO_printf ( "\nc = [%s]+[%s] = [%s]\n", a, b, c );
 strcpy ( a, "c = " );
 strcpy ( c, STR_EMPTY ); // limpar a cadeia de caracteres
 IO_printf ( "%s\n", IO_concat ( a, IO_toString_c ( z ) ) );
 IO_println ( IO_concat ( "x = ", IO_toString_d ( x ) ) );
 IO_println ( IO_concat ( "w = ", IO_toString_b ( w ) ) );
 strcpy ( b, STR_EMPTY );
 IO_print ( "y = " );
 IO_print ( IO_concat ( b, IO_toString_f ( y ) ) );
 IO_print ( "\n" );
 z = IO_readchar ( "char = " );
 IO_println ( IO_concat ( a, IO_toString_c ( z ) ) );
 y = IO_readdouble ( "double = " );
 IO_println ( IO_concat ( a, IO_toString_f ( y ) ) );
 x = IO_readint ( "int = " );
 IO_println ( IO_concat ( a, IO_toString_d ( x ) ) );
 w = IO_readbool ( "bool = " );
 IO_println ( IO_concat ( a, IO_toString_b ( w ) ) );
 b = IO_readstring ( "chars = " );
 IO_println ( IO_concat ( a, b ) );
 b = IO_readln ( "line = " );
 IO_println ( IO_concat ( a, b ) );

// encerrar
 IO_pause ( "Apertar ENTER para terminar" );
// chamar metodo para pausar
 return ( 0 ); // voltar ao SO (sem erros)
} // fim main( )

/*
---------------------------------------------- documentacao complementar
---------------------------------------------- notas / observacoes / comentarios
---------------------------------------------- previsao de testes
---------------------------------------------- historico
Versao Data Modificacao
 0.1 __/__ esboco
---------------------------------------------- testes
Versao Teste
 0.1 01. ( OK ) identificacao de programa
*/