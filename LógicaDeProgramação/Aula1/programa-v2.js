console.log("\n=== MEU SEGUNDO PROGRAMA ===");

function converter() {
    // Entrada
    let nome = document.getElementById("nome").value;

    // Processamento
    nome = nome.toUpperCase();

    // Saida
    document.getElementById("resultado").textContent = nome;
}