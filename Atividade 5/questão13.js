// const numero_aleatorio = Math.floor(Math.random() * 101)
// let tentativas = 10
// let acertou = true

// console.log(`Seja bem vindo! Você tem ${tentativas} tentativas. Boa sorte!`)

// while (tentativas > 0 && !acertou){
//     const palpite = parseInt(prompt('Digite um palpite: '))
//     if(palpite === numero_aleatorio){
//         acertou = true
//         console.log('Você acertou o número aleatório. Parabéns!')
//     } else if(palpite < numero_aleatorio){
//         console.log(`O número secreto é maior. Você tem ${tentativas} tentativas, tente novamente!`)
//     } else{
//         console.log(`O número secreto é maior, tente novamente. Você tem ${tentativas}`)
//     }
//     tentativas--
// }
// if(!acertou){
//     console.log(`Que pena, você não conseguiu acertar o número secreto. O número secreto era ${numero_aleatorio}`)
// }


const numero_aleatorio = Math.floor(Math.random() * 101);
let tentativas = 10;
let acertou = false;

console.log(`Seja bem-vindo! Você tem ${tentativas} tentativas. Boa sorte!`);

while (tentativas > 0 && !acertou) {
    const palpite = parseInt(prompt('Digite um palpite: '));
    if (palpite === numero_aleatorio) {
        acertou = true;
        console.log('Você acertou o número aleatório. Parabéns!');
    } else if (palpite < numero_aleatorio) {
        console.log(`O número secreto é maior. Você tem ${tentativas - 1} tentativas restantes, tente novamente!`);
    } else {
        console.log(`O número secreto é menor. Você tem ${tentativas - 1} tentativas restantes, tente novamente!`);
    }
    tentativas--;
}

if (!acertou) {
    console.log(`Que pena, você não conseguiu acertar o número secreto. O número secreto era ${numero_aleatorio}`);
}