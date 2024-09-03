const fs = require('fs');
const path = require('path');

const dadosArquivo = fs.readFileSync(path.resolve(__dirname, 'dados.json'));
const faturamentoMensal = JSON.parse(dadosArquivo);


const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);


const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));


const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;


const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;


console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);