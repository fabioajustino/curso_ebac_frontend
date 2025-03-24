const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');

function validarNumeros() {
    // Pegando os valores e convertendo para número
    let valor1 = Number(num1.value);
    let valor2 = Number(num2.value);

    // Comparação
    valor2 > valor1 ? alert('Formulário válido') : alert('Formulário inválido');
}

// Chamar a função quando necessário, por exemplo, em um botão
document.getElementById('botaoValidar').addEventListener('click', validarNumeros);
