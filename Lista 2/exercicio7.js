const produtos = [
    { nome: 'Camiseta', preco: 50, desconto: 0 },
    { nome: 'Calça', preco: 100, desconto: 0 },
    { nome: 'Tênis', preco: 200, desconto: 0 }
  ];
  
  produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;
    produto.precoComDesconto = produto.preco - produto.desconto;
    console.log(`Produto: ${produto.nome}, Preço Original: R$${produto.preco}, Desconto: R$${produto.desconto.toFixed(2)}, Preço com Desconto: R$${produto.precoComDesconto.toFixed(2)}`);
  });
  