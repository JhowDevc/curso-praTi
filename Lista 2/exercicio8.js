const filmes = [
    { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', anoLancamento: 1972 },
    { titulo: 'A Lista de Schindler', diretor: 'Steven Spielberg', anoLancamento: 1993 },
    { titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', anoLancamento: 1994 }
  ];
  
  const titulos = [];
  
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);
  