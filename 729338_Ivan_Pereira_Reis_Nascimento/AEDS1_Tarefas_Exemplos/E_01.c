// 999999_AED1

#include <stdio.h>
#include <stdlib.h>

int main ( void )
{
 // dados e resultados
    float valorP, Total;
    int   Viagens, Dias;   

 // identificar
    printf  ( "\n729338_AED1\n\n" );

 // acoes
  
    // 1.intrucoes
      printf  ( "O programa abaixo mostrara o total \"DISPENDIDO\" de \"TRANSPORTE\"\n " );

    // 2. obter o valor da passagem
      printf  ( "\nPrimeiramente apresente ao programa o \"VALOR\" da passagem \"ATUALMENTE\" :\n  R$" );
      scanf   ( "%f", &valorP );

    // 3. obter a quantidade de viagens
      printf  ( "\nSegundamente apresente ao programa quantas viagens o individuo realiza \"POR DIA\" :\n   " );
      scanf   ( "%d", &Viagens );

    // 4. obter a quantidade de dias
      printf  ( "\nTerceiramente apresente ao programa \"QUANTOS DIAS\" o individuo precisa realizar esse processo \"POR MES\" :\n   " );
      scanf   ( "%d", &Dias );

    // 5. calcular o total a ser dispendido
      Total = Dias * Viagens;
      Total = Total * valorP;

    // 6. mostrar  o total calculado
      printf  ( "\n\nO Total a ser \"DISPENDIDO\" :  R$%0.2f\n", Total );

 // encerrar
    printf  ( "\nApertar ENTER para terminar.\n" );
    getchar ( );
    return  (0);
}
/*
    Comentarios e testes:

    ---------------------------------------------- historico

    Versao            Data             Modificacao
     0.1        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.2        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.3        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.4        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.5        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.6        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.7        _30_/_03_/_2022_          esboco

    Versao            Data             Modificacao
     0.8        _30_/_03_/_2022_          esboco            

---------------------------------------------- testes

    Versao      Teste
     0.1         01. ( OK ) identificar
     0.2         01. ( OK ) intrucoes
     0.3         01. ( OK ) obter o valor da passagem
     0.4         01. ( OK ) obter a quantidade de viagens
     0.5         01. ( OK ) obter a quantidade de dias
     0.6         01. ( OK ) calcular o total a ser dispendido
     0.7         01. ( OK ) mostrar  o total calculado
     0.8         01. ( OK ) encerrar

*/
