const lado1 = parseFloat(prompt('Digite o valor de um lado do triângulo: '))
const lado2 = parseFloat(prompt('Digite o valor do outro lado do triângulo: '))
const lado3 = parseFloat(prompt('Digite o valor do outro lado do triângulo: '))

if(lado1 + lado2 > lado3 && lado2 + lado3 > lado1 &&  lado1 + lado3 > lado2){
    if(lado1 === lado2 && lado2 === lado3){
        console.log('É um triângulo equilátero')
    } else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        console.log('É um triângulo isósceles')
    } else{
        console.log('É um triângulo escaleno')
    }
}else{
    console.log('Por favor digite uma opção válida.')
}
