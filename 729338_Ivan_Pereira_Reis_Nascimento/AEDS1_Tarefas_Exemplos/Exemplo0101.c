/*
 Exemplo0101 - v0.0. - __ / __ / _____
 Author: ________________________
 
 Para compilar em terminal (janela de comandos):
 Linux : gcc -o exemplo0101 exemplo0101.c
 Windows: gcc -o exemplo0101 exemplo0101.c
 Para executar em terminal (janela de comandos):
 Linux : ./exemplo0101
 Windows: exemplo0101
*/
// dependencias
#include <stdio.h> // para as entradas e saidas
/*
 Funcao principal.
 @return codigo de encerramento
 @param argc - quantidade de parametros na linha de comandos
 @param argv - arranjo com o grupo de parametros na linha de comandos
*/
int main ( int argc, char* argv [ ] )
{
// definir dado
 int x = 0; // definir variavel com valor inicial
// identificar
 printf ( "%s\n", "Exemplo0101 - Programa = v0.1" );
 printf ( "%s\n", "Autor: __Ivan_Pereira_Reis_Nascimento__" );
 printf ( "\n" ); // mudar de linha
// mostrar valor inicial
 printf ( "%s%d\n", "x = ", x );
// OBS.: O formato para int -> %d (ou %i)
// ler do teclado
 printf ( "Entrar com um valor inteiro: " );
 scanf ( "%d", &x );
// OBS.: Necessario indicar o endereco -> &
 getchar ( ); // OBS.: Limpar a entrada de dados
// mostrar valor lido
 printf ( "%s%i\n", "x = ", x );
// encerrar
 printf ( "\n\nApertar ENTER para terminar." );
 getchar( ); // aguardar por ENTER
 return ( 0 ); // voltar ao SO (sem erros)
} // fim main( )
/*
---------------------------------------------- documentacao complementar
---------------------------------------------- notas / observacoes / comentarios
---------------------------------------------- previsao de testes
a.) 5
b.) -5
c.) 123456789
---------------------------------------------- historico
Versao Data Modificacao
 0.1 _30_/_03_/_2022_ esboco
---------------------------------------------- testes
Versao Teste
0.1 01. ( OK ) identificacao de programa
leitura e exibicao de inteiro
*/