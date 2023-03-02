// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
const number = 144;

function calc(number){

    let x = 1;
    let fibonacci = 0;
    
    
    if(number === 0 || number === 1){
        console.log("O número digitado pertence a sequência de Fibonacci.");  
    };

    while(x < number) {            
        
        fibonacci = fibonacci + x;        
        x = x + fibonacci;             
        
        if(fibonacci === number || x === number){
            console.log("O número digitado pertence a sequência de Fibonacci.");  
        };       
        
    };

    if(x !== number && fibonacci !== number){
        console.log("O número digitado não pertence a sequência de Fibonacci."); 
    };   
   
    
}
    
    calc(number);