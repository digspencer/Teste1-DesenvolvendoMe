/* TESTE 1 - Faça uma função que receba uma string e retorne verdadeiro caso ela seja palíndromo,
do contrário ela deve retornar falso. (palíndromos são palavras ou frases que podem ser
lidas da esquerda para a direita ou da direita para a esquerda.) */

function palindromo(text){
    let sePalindormo = text.split('')
        .reverse()
        .join('');

        if ( sePalindormo === text){
            console.log(text + " é Palindromo");
        } else {
            console.log(text + " não é Palindromo");
        }
}

palindromo("asa");

/* TESTE 1.2 - Faça uma função que receba uma string contendo um CPF e verifique se ele está
formatado de acordo com a máscara 999.999.999-99. A função deve usar regex para fazer
a validação da máscara e deve retornar verdadeiro ou falso.
cpf = “461.636.517-23” */

function validarCPF(cpf) {
    const validar = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return validar;
}

console.log(validarCPF("46163651723")); 

/* TESTE 1.3 - O fatorial de um número n!, é definido como o produto de todos os números inteiros de 1
a n. Por exemplo: 5! é 5 * 4 * 3 * 2 * 1 = 120
A maioria das implementações de cálculo de fatoriais usam uma função recursiva para
determinar o valor fatorial(n). No entanto, a maioria dos sistemas não consegue lidar com
pilhas de recursividade maiores que 2000.
Implemente uma função para calcular o fatorial de números arbitrariamente grandes, sem
utilizar recursividade.
Regras
● n < 0 deve retornar nil
● n = 0 deve retornar 1
● n > 0 deve retornar n! */