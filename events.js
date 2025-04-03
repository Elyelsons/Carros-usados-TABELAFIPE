document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("vehicleForm").addEventListener("submit", function (event) {
        event.preventDefault();
        fetchFipeValue();
    });
});

function fetchFipeValue() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    
    if (!brand || !model || !year) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    // Simulando a obtenção do preço da Tabela FIPE
    const precoFipe = Math.floor(Math.random() * (80000 - 20000) + 20000);
    document.getElementById("result").innerText = `Valor estimado pela Tabela FIPE: R$ ${precoFipe.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
}
