function registrarDespesa(categoria) {
    const valor = parseFloat(document.getElementById('entradaValor').value);
    if (!isNaN(valor)) {
        const historicoLista = document.getElementById('historicoLista');
        const listItem = document.createElement('li');
        listItem.textContent = `${categoria}: R$ ${valor.toFixed(2)}`;
        historicoLista.appendChild(listItem);
        document.getElementById('entradaValor').value = ''; // Limpa o campo após o registro
    }
}