function calcularPrecoMacas(quantidade) {
    const preco = quantidade < 12 ? 0.30 : 0.25;
    const valorTotal = quantidade * preco;
    console.log("Valor total: R$ " + valorTotal.toFixed(2));
}

calcularPrecoMacas(10);  // Exemplo de uso
