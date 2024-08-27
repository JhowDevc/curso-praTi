let soma = 0;

for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt("Digite um número:"));
    soma += numero;
}

console.log("Soma total: " + soma);
