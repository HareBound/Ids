// Valor que você deseja verificar no arquivo
const valorDesejado = randomId;

// Função para verificar se o valor existe no arquivo
function verificarValorNoArquivo() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'ids.txt', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const fileContent = xhr.responseText;
      // Verifique se o valor desejado existe no conteúdo do arquivo
      const existeValor = fileContent.includes(valorDesejado);

      if (existeValor) {
        window.alert(`O valor '${valorDesejado}' existe no arquivo.`);
      } else {
        window.alert(`O valor '${valorDesejado}' não foi encontrado no arquivo.`);
      }
    }
  };

  xhr.send();
}

// Chame a função para iniciar a verificação
verificarValorNoArquivo();
