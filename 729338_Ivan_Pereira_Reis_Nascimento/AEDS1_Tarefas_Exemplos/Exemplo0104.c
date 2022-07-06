/*
 Exemplo0104 - v0.0. - __ / __ / _____
 Author: Ivan Pereira Reis Nascimento
 
 Para compilar em terminal (janela de comandos):
 Linux : gcc -o exemplo0101 exemplo0101.c
 Windows: gcc -o exemplo0101 exemplo0101.c
 Para executar em terminal (janela de comandos):
 Linux : ./exemplo0101
 Windows: exemplo0101
*/
// dependencias
#include <stdio.h> // para as entradas e saidas
#include <stdbool.h> // para valores logicos
// Nota: Em alguns compiladores pode haver problemas
// com relacao a essa biblioteca, caso acontecer
// considerar o uso de definicoes alternativas
/*
 Funcao principal.
 @return codigo de encerramento
 @param argc - quantidade de parametros na linha de comandos
 @param argv - arranjo com o grupo de parametros na linha de comandos
*/
int main ( int argc, char* argv [ ] )
{
// definir dado
 bool x = false; // definir variavel com valor inicial
                 // OBS.:Definir a parte fracionaria e' util
 int y = 0;                
// identificar
 printf ( "%s\n", "Exemplo0104 - Programa = v0.4" );
 printf ( "%s\n", "Autor: Ivan Pereira Reis Nascimento" );
 printf ( "\n" ); // mudar de linha
// mostrar valor inicial
 printf ( "%s%d\n", "x = ", x );
// OBS.: O formato para int -> %d (ou %i)
// ler do teclado
 printf ( "Entrar com um valor logico: " );
 scanf ( "%d", &y );
// OBS.: Usar equivalente inteiro -> 0 = false
 getchar ( ); // OBS.: Limpar a entrada de dados
// garantir valor logico no intervalo [0:1]
 x = (y!=0);
// mostrar valor lido
 printf ( "%s%d\n", "x = ", x );
// encerrar
 printf ( "\n\nApertar ENTER para terminar." );
 getchar( ); // aguardar por ENTER
 return ( 0 ); // voltar ao SO (sem erros)
} // fim main( )
/*
---------------------------------------------- documentacao complementar
---------------------------------------------- notas / observacoes / comentarios
---------------------------------------------- previsao de testes
a.) 1
b.) 0
c.) true
---------------------------------------------- historico
Versao     Data          Modificacao
 0.1    30/03/2022         esboco
 0.2    30/03/2022   mudanca de versao
---------------------------------------------- testes
Versao Teste
0.1 01. ( OK ) identificacao de programa leitura e exibicao de inteiro
0.2 01. ( OK ) identificacao de programa
*/