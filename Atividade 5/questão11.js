const numero = parseInt(prompt('Digite um número positivo: '))
let contador = 0
let numero_impar = 'Números ímpares até o número ' + numero + ': '

for(let i = 1; i <= numero; i++){
    if(i % 2 !== 0){
        numero_impar += i + ' '
    }
}
console.log(numero_impar.trim())