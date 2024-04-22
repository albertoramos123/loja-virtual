// Função para calcular o preço total com base na quantidade selecionada
function calcularPrecoTotal() {
    // Obtenha o preço unitário e a quantidade selecionada
    var precoUnitario = 650.00; // Exemplo: substitua pelo preço real
    var quantidade = parseInt(document.getElementById('quantidade').value);
    // Calcule o preço total e atualize o elemento de exibição
    var precoTotal = precoUnitario * quantidade;
    document.getElementById('preco').textContent = precoTotal.toFixed(2);
}

// Função chamada ao adicionar ao carrinho
function adicionarAoCarrinho() {
    // Aqui você pode implementar a lógica para adicionar ao carrinho
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var opcaoSelecionada = document.getElementById('opcao').value;
    // Exemplo de mensagem de sucesso
    alert("Produto adicionado ao carrinho: " + quantidade + " x " + opcaoSelecionada);
}

// Ouça os eventos de alteração na quantidade para atualizar o preço total
document.getElementById('quantidade').addEventListener('change', calcularPrecoTotal);
