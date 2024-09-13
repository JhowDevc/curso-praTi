const carrinho = {
    itens: [
      { nome: 'Livro', quantidade: 2, precoUnitario: 40 },
      { nome: 'Caneca', quantidade: 4, precoUnitario: 15 },
      { nome: 'Caderno', quantidade: 3, precoUnitario: 25 }
    ]
  };
  
  let valorTotal = 0;
  
  carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Valor total do carrinho: R$${valorTotal}`);
  