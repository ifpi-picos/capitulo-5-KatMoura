function exibir() {
    return prompt(
        'Seja bem-vindo!\n' +
        '1 - Pizza\n' +
        '2 - Hambúrguer\n' +
        '3 - Salada\n' +
        '4- Macarrão\n' +
        'Escolha uma opção: '
    )
}

function opcao(descrição) {
    let mensagem;
    switch (descrição) {
        case '1':
            mensagem = 'Descrição: Massa fina recheada com molho de tomate, queijo, pepperoni e óregano.\nValor: R$ 35,00'
            break;
        case '2':
            mensagem = 'Descrição: Pão brioche, carne artesanal, bacon, queijo, alface, tomate e maionese temperada.\nValor: R$ 15,00'
            break;
        case '3':
            mensagem = 'Descrição: Frango cortado em cubos, alface, tomate cereja, pepino e cenoura.\nValor: R$ 10,00'
            break;
        case '4':
            mensagem = 'Descrição: Macarronada ao molho de tomate, almôndegas e queijo ralado.\nValor: R$ 25,00'
            break;
        default:
            mensagem = 'Escolha uma opção válida, por favor!'
    }
    return mensagem
}


const opcao_escolhida = exibir()
const resultado = opcao(opcao_escolhida)

console.log(resultado)