console.log("=== IMC ===")

const calcularImc = () => {
    console.log("Calculando...")
    // Entrada
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    console.log(peso, altura);

    // Processamento
    let imc = Number(peso/(altura*altura)).toFixed(2);
    console.log(imc, typeof imc);

    let faixa = null;

    if (imc < 18.5) {
        faixa = "abaixo do peso"
    }else if (imc <= 24.9) {
        faixa = "Peso Normal"
    }else if (imc <= 29.9) {
        faixa = "Sobrepeso"
    }else if(imc <= 34.9) {
        faixa = "Obesidade classe I"
    }else if(imc <= 39.9) {
        faixa = "Obesidade classe II"
    }else if(imc >= 40) {
        faixa = "Obesidade classe III"
    }
    // Saída
    document.querySelector("#result").innerText = `Seu IMC é de ${imc} e sua classificação é ${faixa}`;
};

