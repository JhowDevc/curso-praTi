const pedidos = [
    { cliente: 'Alice', produto: 'Caneta', quantidade: 10 },
    { cliente: 'Bob', produto: 'Caderno', quantidade: 5 },
    { cliente: 'Alice', produto: 'Borracha', quantidade: 7 },
    { cliente: 'Carlos', produto: 'Caneta', quantidade: 3 },
    { cliente: 'Bob', produto: 'Lápis', quantidade: 12 }
  ];
  
  const quantidadePorCliente = {};
  
  pedidos.forEach(pedido => {
    if (quantidadePorCliente[pedido.cliente]) {
      quantidadePorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      quantidadePorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  console.log(quantidadePorCliente);
  