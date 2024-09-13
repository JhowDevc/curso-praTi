const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saída', valor: 200 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saída', valor: 150 },
    { tipo: 'entrada', valor: 700 }
  ];
  
  let saldo = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldo += transacao.valor;
    } else if (transacao.tipo === 'saída') {
      saldo -= transacao.valor;
    }
  });
  
  console.log(`Saldo Final: R$${saldo}`);
  