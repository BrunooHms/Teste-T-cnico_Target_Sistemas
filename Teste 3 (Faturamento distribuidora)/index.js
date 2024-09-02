// Infelizmente não encontrei nenhum arquivo JSON no teste técnico, então simulei uma entrada para desenvolver o código.

const faturamentoMensal = [
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
];


const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);


const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));


const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;


const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;


console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);