const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia'
  };
  
  let editoraExiste = false;
  
  for (let propriedade in livro) {
    if (propriedade === 'editora') {
      editoraExiste = true;
      break;
    }
  }
  
  if (!editoraExiste) {
    livro.editora = 'Companhia das Letras';
  }
  
  console.log(livro);
  