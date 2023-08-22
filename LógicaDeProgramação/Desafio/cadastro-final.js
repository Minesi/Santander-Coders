console.log("=== CADASTRO FINAL ===");

const carrinho = [];

const cadastrar = () => {
    const codigo = document.querySelector("#codigo").value;
    const produto = document.querySelector("#produto").value;
    const quant = Number(document.querySelector("#quant").value);
    const preco = Number(document.querySelector("#preco").value);
    let total = preco * quant;
    const tbody = document.querySelector("tbody");
    const item = {
        codigo,
        produto,
        quant,
        preco,
        total,
    };
    if (codigo.length >= 6 && produto.length >= 2 && quant !=0 && preco != 0){
    carrinho.push(item);
    } else {
        alert("Prencha os campos do formulário!");
    }
   const trs = carrinho.map((item) => {
        return `<tr>
            <th>${item.codigo}</th>
            <th>${item.produto}</th>
            <th>${item.quant}</th>
            <th>R$${(item.preco).toFixed(2)}</th>
            <th>R$${(item.total).toFixed(2)}</th>
        </tr>`;
   })
   .join("");
   tbody.innerHTML = trs;
const inputs = Array.from(document.querySelectorAll("input"));
inputs.map((input) => {
    input.value = "";
    return input;
})
    .shift()
    .focus();
}