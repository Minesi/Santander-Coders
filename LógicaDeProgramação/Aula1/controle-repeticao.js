console.log("=== CONTROLE DE REPETICAO ===");

document.write("<h3>Números de 1 à 10 (um por linha)</h3>");


let num = 1;
let limit = 10;
while (num <= limit) {
    document.write(num, "<br>");
    num++;
}

document.write("<hr>");
document.write("<h3>Números de 50 à 1 (separado por espaço)</h3>");

num = 50;
limit = 1;
while (num >= limit) {
    document.write(num, " ");
    num--
}

document.write("<hr>");
document.write("<h3>Números Pares de 100 à 200 (separado por traço)</h3>");

num = 100;
limit = 200;
while (limit >= num) {
//     if (num != limit){
//     document.write(num + "-");
// } else {
//     document.write(num);
// }

// operador ternário
// (condition) ? true : false
document.write(num, num != limit ? "-" : "");



    num += 2;
}





