let nota1 = parseFloat(prompt('Digite sua primeira nota: '))
let nota2 = parseFloat(prompt('Digite sua segunda nota: '))
let nota3 = parseFloat(prompt('Digite sua terceira nota: '))
const media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    console.log('Parabéns, você foi aprovado!!')
} else {
    console.log('Você foi reprovado!')
}