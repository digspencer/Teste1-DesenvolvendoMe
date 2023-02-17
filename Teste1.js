// 1) Faça uma função que receba uma string e retorne verdadeiro caso ela seja palíndromo,
//do contrário ela deve retornar falso. (palíndromos são palavras ou frases que podem ser
// lidas da esquerda para a direita ou da direita para a esquerda.)

let palavras = ["asa", "ovo", "banana", "pão", "amor", "carro", "ababa"];

function SePalindromo(palavras) {
    //Verifica Letra por Letra
    var totalDeLetras = palavras.length;
    var letrasAconferir = Math.floor (totalDeLetras / 2);
    for (var i = 0; i < letrasAconferir; i++){
        var letras = palavras[i];
        var indice = i;
        var compararIndice = totalDeLetras - 1 - indice;
        var compararLetras = palavras[compararIndice];
        if (letras =! compararLetras){
            return false;
        }
    }

    return true;
}

    palavras.forEach((palavras, ind) => {
        if (SePalindromo(palavras)) {
            console.log("A Palavra", palavras, "é Palíndrono");
        } else {
            console.log("A Palavra", palavras, "não é Palíndrono");
        }
    })