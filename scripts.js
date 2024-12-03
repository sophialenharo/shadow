function search() {
    const searchQuery = document.getElementById('pesquisa').value;
    alert(`Você pesquisou por: ${searchQuery}`);
}

function showCalculator() {
    document.getElementById('tools-container').innerHTML = `
        <h3>Calculadora de Visto</h3>
        <p>Insira os detalhes para estimar custos e tempo.</p>
        <!-- Implementar a lógica da calculadora aqui -->
    `;
}

function showChecklist() {
    document.getElementById('tools-container').innerHTML = `
        <h3>Checklist de Documentos</h3>
        <p>Selecione os documentos necessários.</p>
        <!-- Implementar a lógica do checklist aqui -->
    `;
}