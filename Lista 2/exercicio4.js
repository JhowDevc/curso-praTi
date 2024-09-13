const pessoas = [
    { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
    { nome: 'Bruno', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Carla', idade: 22, cidade: 'Belo Horizonte' }
  ];
  
  for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  