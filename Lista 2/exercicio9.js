const clientes = [
    { nome: 'Laura', idade: 28, cidade: 'Curitiba' },
    { nome: 'Marcos', idade: 35, cidade: 'Porto Alegre' },
    { nome: 'Sofia', idade: 42, cidade: 'Recife' },
    { nome: 'Thiago', idade: 19, cidade: 'Fortaleza' }
  ];
  
  let contador = 0;
  
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);
  