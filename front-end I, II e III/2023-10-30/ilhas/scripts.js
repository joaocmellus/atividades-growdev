// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

// Exemplo de entrada:
// 72

// Exemplo de saída:
// GC$ 50,00 -> 1
// GC$ 10,00 -> 2
// GC$ 5,00  -> 0
// GC$ 1,00  -> 2

let iniciar = confirm('Deseja realizar um saque?')
while (iniciar) {
    const saque = Number(prompt('Insira o valor de saque:'));
    
    if (!Number.isInteger(saque) || saque <= 0) {
        alert('Número inserido inválido!');
        continue
    }
    let resto;

    const notas50 = parseInt(saque / 50);
    resto = saque % 50;
    
    const notas10 = parseInt(resto / 10);
    resto = resto % 10;
    
    const notas5 = parseInt(resto / 5);
    resto = resto % 5;
    
    const notas1 = resto;
    
    const resultado = `
    GC$ 50,00 -> ${notas50}
    GC$ 10,00 -> ${notas10}
    GC$ 5,00  -> ${notas5}
    GC$ 1,00  -> ${notas1}`;

    alert(`Resultado do saque de GC$${saque.toFixed(2)}:${resultado}`);

    iniciar = confirm('Deseja realizar mais um saque?');
}