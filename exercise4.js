// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.


const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53


let somaEstados = sp + rj + mg + es + outros;

let percentualSp = (sp / somaEstados) * 100;
let percentualRj = (rj / somaEstados) * 100;
let percentualMg = (mg / somaEstados) * 100;
let percentualEs = (es / somaEstados) * 100;
let percentualOutros = (outros / somaEstados) * 100;

console.log(`Os percentuais de representação dos estados São Paulo, Rio de Janeiro, Minas Gerais, Espírito Santos e demais, do valor total mensal da distribuidora são, respectivamente ${percentualSp}, ${percentualRj}, ${percentualMg}, ${percentualEs}, ${percentualOutros}. `)