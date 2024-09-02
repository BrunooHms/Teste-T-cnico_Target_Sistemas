function pertenceAFibonacci(num) {
    let a = 0;
    let b = 1;
    let temp;

    if (num === a || num === b) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}


let num = 21; 
let resultado = pertenceAFibonacci(num);
console.log(resultado);