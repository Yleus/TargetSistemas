// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const objs = require('./dados.json');

const jsonData = JSON.stringify(objs);

const objData = JSON.parse(jsonData);



const array = [];
let soma = 0;

objData.map((data) => {

    if(data.valor !== 0){
        array.push(data.valor);
        soma = soma + data.valor;
    }   

    return soma;

});


const min = Math.min(...array);
const max = Math.max(...array);



objData.map((data) => {

    if(min === data.valor){
        console.log(`O valor mínimo de faturamento no mês desta distribuidora foi de ${min} no dia ${data.dia}.`);
    }   

});

objData.map((data) => {

    if(max === data.valor){
        console.log(`O valor máximo de faturamento diário no mês desta distribuidora foi de ${max} no dia ${data.dia}.`);;
    }   

});

let media = soma / array.length;


let dias = 0;

objData.map((data) => {

    if(data.valor > media){
        dias++;
    }   
    
});

console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ${dias} dias.`);
