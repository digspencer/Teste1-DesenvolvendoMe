// 1) Faça uma função que receba uma string e retorne verdadeiro caso ela seja palíndromo,
//do contrário ela deve retornar falso. (palíndromos são palavras ou frases que podem ser
// lidas da esquerda para a direita ou da direita para a esquerda.)

const ehPalindromo = (text) => {
    const palindromo = text.split('')
    .reverse()
    .join('');

    if (palindromo === text) {
        console.log("A palavra " + text + " é Palíndromo");
    } else {
        console.log("A palavra " + text + " não é Palíndromo");
    }
}

ehPalindromo("asa");