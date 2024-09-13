const vendas = [
    { produto: 'Notebook', quantidade: 5, valor: 3000 },
    { produto: 'Mouse', quantidade: 20, valor: 50 },
    { produto: 'Teclado', quantidade: 15, valor: 80 }
  ];
  
  let totalVendas = 0;
  
  vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total de vendas: R$${totalVendas}`);
  