const produto = {
    nome: 'Smartphone',
    preco: 1500,
    estoque: 30,
    desconto: 100,
    rating: 4.5
  };
  
  function filtrarPropriedades(obj, valorMinimo) {
    const novoObjeto = {};
    for (let chave in obj) {
      if (typeof obj[chave] === 'number' && obj[chave] > valorMinimo) {
        novoObjeto[chave] = obj[chave];
      }
    }
    return novoObjeto;
  }
  
  const filtrado = filtrarPropriedades(produto, 100);
  console.log(filtrado);
  