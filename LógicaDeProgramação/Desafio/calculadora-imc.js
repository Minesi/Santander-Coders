console.log("=== CALCULADORA IMC ====")
function calcular() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    let imc = Number(peso/(altura*altura)).toFixed(2);
    let faixa = "Informe o peso e a altura!!!";
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
     if (!isNaN(imc)) {
        // document.querySelector("#imc").innerText = imc;
        document.querySelector("#result").innerText = `Seu IMC é de ${imc} e sua classificação é ${faixa}`;
     }   else{
        document.querySelector("#result").innerText = `${faixa}`;
     }
  
}


