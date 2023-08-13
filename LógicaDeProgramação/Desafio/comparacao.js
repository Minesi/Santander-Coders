console.log("\n=== COMPARADOR ===")

const calcular = function () {

    const n1 = (document.getElementById("n1").value || 0);
    const n2 = (document.getElementById("n2").value || 0);
    const operator = document.getElementById("operador").value;
    console.log(n1, operator, n2);

    let result;

    switch (operator) {
        case "maior":
            result = n1 > n2;

            break;
        case "menor":
            result = n1 < n2;

            break;

        case "maiorIgual":
            result = n1 >= n2;

            break;

        case "menorIgual":
            result = n1 <= n2;

            break;

        case "diferente":
            result = n1 != n2;

            break;

        case "igual":
            result = n1 == n2;

            break;
        default:
            break;
    }


    document.getElementById("result").value = result;
console.log(result)
};