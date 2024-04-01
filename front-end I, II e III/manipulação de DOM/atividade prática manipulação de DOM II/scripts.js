document.querySelectorAll('.card').forEach(card => card.style.backgroundColor = '#E16E0E');

document.querySelectorAll('.titulo-card').forEach(title => {
    title.style.color = '#2B385B';
    title.innerText = 'Meu card';
});

document.querySelectorAll('.descricao-card').forEach(desc => {
    desc.style.color = '#fff';
    desc.style.margin = '30px 0';
    desc.innerText = "Descrição modificada pelo JavaScript";

});

const btnStyle = 'color: #fff; padding: 10px; border-radius: 10px; border: none; ';

document.querySelectorAll('.botao-editar').forEach(btn => {
    btn.setAttribute('style', btnStyle + 'background-color: green');
    btn.setAttribute('onclick', 'editarCard()');
});

document.querySelectorAll('.botao-apagar').forEach(btn => {
    btn.setAttribute('style', btnStyle + 'background-color: red');
    btn.setAttribute('onclick', 'apagarCard()');
});

function editarCard() {
    alert("Clicou em Editar!");
}

function apagarCard() {
    if (confirm("Você deseja excluir esse card?")) {
        alert('Confirmado!');
    }
    else {
        alert('Cancelou!');
    }
}