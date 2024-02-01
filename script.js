// Objeto JSON que mapeia os intervalos de saldo para os níveis
const NivelMapping = {
  "Ferro": { "min": -Infinity, "max": 9 },
  "Bronze": { "min": 10, "max": 20 },
  "Prata": { "min": 21, "max": 50 },
  "Ouro": { "min": 51, "max": 80 },
  "Diamante": { "min": 81, "max": 90 },
  "Lendário": { "min": 91, "max": 100 },
  "Imortal": { "min": 101, "max": Infinity }
};

// Função para calcular o nível do jogador com base no saldo usando o objeto JSON
function determineNivel(balance) {
  for (const Nivel in NivelMapping) {
    const range = NivelMapping[Nivel];
    if (balance >= range.min && balance <= range.max) {
      return Nivel;
    }
  }
}

// Função para calcular o nível e exibir o resultado com animação na página
function calcularNivel() {
  let victories = parseInt(document.getElementById('victories').value);
  let defeats = parseInt(document.getElementById('defeats').value);
  
  let balance = victories - defeats;
  let level = determineNivel(balance);

  let resultElement = document.getElementById('result');
  resultElement.textContent = `O herói tem um saldo de ${balance} e está no nível ${level}.`;
  resultElement.classList.add('mostrando');

  setTimeout(function() {
    resultElement.classList.remove('mostrando');
  }, 3000); // Tempo em milissegundos antes de esconder a mensagem (3 segundos neste exemplo)
}


