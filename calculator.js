// Captura o evento de clique no botão de calcular
/*document.getElementById("calcular-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o envio do formulário
    // Obtém os valores dos inputs de idade e peso
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
  
    // Verifica se os valores inseridos são válidos
    if (!isNaN(idade) && !isNaN(peso)) {
      let idadeHumana;
  
      // Verifica o porte do pet baseado no peso
      if (peso < 9) {
        idadeHumana = calcularIdadeHumana(idade, "pequeno");
      } else if (peso >= 9 && peso <= 23) {
        idadeHumana = calcularIdadeHumana(idade, "medio");
      } else if (peso > 23 && peso <= 40) {
        idadeHumana = calcularIdadeHumana(idade, "grande");
      } else {
        idadeHumana = calcularIdadeHumana(idade, "gigante");
      }
  
      // Exibe o resultado da idade em anos humanos
      document.getElementById('resultado').textContent = `A idade do seu pet em anos humanos é ${idadeHumana}.`;
    } else {
      alert("Por favor, insira valores válidos para idade e peso.");
    }
  });
  
  // Função para calcular a idade humana com base no porte
  function calcularIdadeHumana(idade, porte) {
    const tabelaIdade = {
      pequeno: [36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
      medio: [37, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87, 92, 96, 101, 105],
      grande: [40, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 99, 104, 109, 115, 120],
      gigante: [42, 49, 56, 64, 71, 78, 86, 93, 101, 108, 115, 123]
    };
  
    // Verifica se a idade está dentro do intervalo de 5 a 20
    if (idade >= 5 && idade <= 20) {
      return tabelaIdade[porte][idade - 5];
    } else {
      return "Idade fora do intervalo disponível";
    }
  }
  
  