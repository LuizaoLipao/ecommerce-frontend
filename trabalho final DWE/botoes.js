function mudarBotao(botaoSelecionado) {
    // Esconder todos os botões
    document.querySelectorAll('.botao').forEach(button => {
        button.classList.add('hidden');
    });

    // Mostrar o botão selecionado
    if (botaoSelecionado === 'mais') {
        document.getElementById('botao-mais').classList.remove('hidden');
    } else if (botaoSelecionado === 'menos') {
        document.getElementById('botao-menos').classList.remove('hidden');
    } else if (botaoSelecionado === 'nome') {
        document.getElementById('botao-nome').classList.remove('hidden');
    }
}