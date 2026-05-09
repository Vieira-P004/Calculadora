const botaos = document.querySelectorAll("button");
const campoEntrada = document.getElementById("resultado");


for (let i = 0; i < botaos.length; i++) {
    botaos[i].addEventListener("click", () => {
        const botaoValor = botaos[i].textContent //pegando valor do botao

        if (botaoValor === "C") {
            limparTela()
        } else if (botaoValor === "=") {
            calcularResultado()
        } else {
            aparecerValor(botaoValor);
        }
    })
}

function limparTela() {
    campoEntrada.value = "";
}

function calcularResultado() {
    campoEntrada.value = eval(campoEntrada.value); //reconhece o operador
}

function aparecerValor(botaoValor) {
    campoEntrada.value += botaoValor;
}

