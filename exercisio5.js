// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;



function inverterString(textoDigitado){
    var textoInvertido = "";   

    for(var i = textoDigitado.length - 1; i >= 0; i--){
        textoInvertido = textoInvertido + textoDigitado[i];
    };
    return textoInvertido;    
    
};



console.log(inverterString("Processo Seletivo"));


