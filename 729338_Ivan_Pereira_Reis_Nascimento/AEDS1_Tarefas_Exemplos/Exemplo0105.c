/*
 Exemplo0105 - v0.0. - __ / __ / _____
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
/*
 Funcao principal.
 @return codigo de encerramento
 @param argc - quantidade de parametros na linha de comandos
 @param argv - arranjo com o grupo de parametros na linha de comandos
*/
int main ( int argc, char* argv [ ] )
{
// definir dado
 char x [80] = "abc"; // definir variavel com valor inicial
                                
// identificar
 printf ( "%s\n", "Exemplo0105 - Programa = v0.5" );
 printf ( "%s\n", "Autor: Ivan Pereira Reis Nascimento" );
 printf ( "\n" ); // mudar de linha
// mostrar valor inicial
 printf ( "%s%s\n", "x = ", x );
// OBS.: O formato para int -> %d (ou %i)
// ler do teclado
 printf ( "Entrar com uma cadeia de caracteres: " );
 scanf ( "%s", x );
// OBS.: Nao devera' ser usado o endereco dessa vez !
// O tamanho do valor NAO devera' ultrapassar 80 símbolos.
 getchar ( ); // OBS.: Limpar a entrada de dados
// mostrar valor lido
 printf ( "%s%s\n", "x = ", x );
// encerrar
 printf ( "\n\nApertar ENTER para terminar." );
 getchar( ); // aguardar por ENTER
 return ( 0 ); // voltar ao SO (sem erros)
} // fim main( )
/*
---------------------------------------------- documentacao complementar
---------------------------------------------- notas / observacoes / comentarios
Observacoes: Na previsao de teste, no teste "b" o programa no momento de
mostrar o resultado so' mostrou a letra "d". Me pergunto se esta' funcionando corretamente.
---------------------------------------------- previsao de testes
a.) def
b.) d e f
c.) d_e_f
---------------------------------------------- historico
Versao     Data          Modificacao
 0.1    30/03/2022         esboco
 0.2    30/03/2022   mudanca de versao
---------------------------------------------- testes
Versao Teste
0.1 01. ( OK ) identificacao de programa leitura e exibicao de inteiro
0.2 01. ( OK ) identificacao de programa
*/