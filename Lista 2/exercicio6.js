const funcionarios = [
    { nome: 'Gustavo', cargo: 'Gerente', salario: 5000 },
    { nome: 'Helena', cargo: 'Desenvolvedora', salario: 4000 },
    { nome: 'Igor', cargo: 'Analista', salario: 3500 },
    { nome: 'Juliana', cargo: 'Assistente', salario: 2500 }
  ];
  
  const salarioMinimo = 3000;
  
  for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
  }
  