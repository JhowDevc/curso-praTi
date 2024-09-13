const alunos = [
    { nome: 'Daniel', nota1: 8, nota2: 7 },
    { nome: 'Elena', nota1: 9, nota2: 8.5 },
    { nome: 'Fernando', nota1: 6, nota2: 5.5 }
  ];
  
  for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
  }
  