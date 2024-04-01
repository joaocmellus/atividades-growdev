// Referências dos inputs
const inputs = {
    receitas: [
        document.getElementById('valor_base'),
        document.getElementById('valor_transporte'),
        document.getElementById('valor_alimentacao'),
    ],
    descontos: [
        document.getElementById('valor_automovel'),
        document.getElementById('faltas'),
    ]
};
const somaReceitas  = document.getElementById('valor_receita')
const somaDescontos = document.getElementById('valor_descontos')
const valorTotal    = document.getElementById('valor_total');

// 1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
// botão calcular efetuar os cálculos solicitados na página.

function calcularTotal() {
    const receitas = inputs.receitas.reduce((valor, input) => valor + Number(input.value) , 0);
    const descontos = inputs.descontos.reduce((valor, input) => valor + Number(input.value), 0);

    somaReceitas.value  = receitas;
    somaDescontos.value = descontos;
    valorTotal.value    = receitas - descontos;
}
document.getElementById('btn_calcular').addEventListener('click', calcularTotal);

// 2. Alterar o cálculo do botão calcular para que a cada vez que o
// usuário digitar um valor e sair do input o formulário seja
// automaticamente recalculado.

for (const key in inputs) {
    inputs[key].forEach(input => {
        input.addEventListener('change', calcularTotal);
    });
}