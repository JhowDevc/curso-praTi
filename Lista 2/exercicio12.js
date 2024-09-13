const estoque = [
    { produto: 'Arroz', quantidade: 20, minimo: 15 },
    { produto: 'Feijão', quantidade: 10, minimo: 12 },
    { produto: 'Macarrão', quantidade: 5, minimo: 8 },
    { produto: 'Açúcar', quantidade: 30, minimo: 25 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
      console.log(`Produto: ${item.produto} atualizado para quantidade: ${item.quantidade}`);
    }
  });
  
  console.log('Estoque Atualizado:', estoque);
  