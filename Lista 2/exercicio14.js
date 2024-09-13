const empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: ['Amanda', 'Bruno']
      },
      {
        nome: 'Desenvolvimento',
        funcionarios: ['Carlos', 'Daniela', 'Eduardo']
      },
      {
        nome: 'Marketing',
        funcionarios: ['Fernanda', 'Gabriel']
      }
    ]
  };
  
  for (let i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];
    console.log(`Departamento: ${departamento.nome}`);
    for (let funcionario of departamento.funcionarios) {
      console.log(` - Funcionário: ${funcionario}`);
    }
  }
  