function formatarPlaca(placa) {
    // Remover espaços em branco e converter para maiúsculas
    placa = placa.replace(/\s+/g, '').toUpperCase();
    // Adicionar hífen após o terceiro caractere se não existir
    if (placa.length >= 3 && placa.charAt(3) !== '-') {
        placa = placa.slice(0, 3) + '-' + placa.slice(3);
    }
    return placa;
}

function formatarEContarPlacas(textarea, contadorId, contadorValorId) {
    const placas = textarea.value.split('\n').filter(placa => placa.trim() !== '');
    for (let i = 0; i < placas.length; i++) {
        placas[i] = formatarPlaca(placas[i]);
    }
    textarea.value = placas.join('\n');
    document.getElementById(contadorId).textContent = placas.length + ' placas informadas';
    document.getElementById(contadorValorId).textContent = placas.length;
}

function limparTextarea(id) {
    document.getElementById(id).value = '';
    formatarEContarPlacas(document.getElementById(id), id + 'Count', id + 'CountValue');
}

function compararPlacas() {
    const frotaAtualizadaTextarea = document.getElementById('frotaAtualizada');
    const frotaCadastradaTextarea = document.getElementById('frotaCadastrada');
    const frotaAtualDiv = document.getElementById('frotaAtual');
    const frotaCadastradaResultadoDiv = document.getElementById('frotaCadastradaResultado');
    const frotaIgualDiv = document.getElementById('frotaIgual');

    const placasAtualizadas = frotaAtualizadaTextarea.value.split('\n').filter(placa => placa.trim() !== '');
    const placasCadastradas = frotaCadastradaTextarea.value.split('\n').filter(placa => placa.trim() !== '');

    const placasNaAtualNaoCadastradas = placasAtualizadas.filter(placa => !placasCadastradas.includes(placa));
    const placasNaCadastradaNaoAtualizadas = placasCadastradas.filter(placa => !placasAtualizadas.includes(placa));
    const placasIguais = placasAtualizadas.filter(placa => placasCadastradas.includes(placa));

    frotaAtualDiv.innerHTML = placasNaAtualNaoCadastradas.join('<br>');
    frotaCadastradaResultadoDiv.innerHTML = placasNaCadastradaNaoAtualizadas.join('<br>');
    frotaIgualDiv.innerHTML = placasIguais.join('<br>');

    // Atualizar os contadores nas divs de resultados
    document.getElementById('frotaAtualCount').textContent = placasNaAtualNaoCadastradas.length + ' placas informadas';
    document.getElementById('frotaCadastradaCount').textContent = placasNaCadastradaNaoAtualizadas.length + ' placas informadas';
    document.getElementById('frotaIgualCount').textContent = placasIguais.length + ' placas informadas';
}
