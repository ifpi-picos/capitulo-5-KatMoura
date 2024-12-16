const num = parseInt(prompt('Digite um número positivo: '))
let contador = 0
let num_par = 'Números pares ate o número ' + num + ': '

while (contador <= num){
    if(contador % 2 === 0){
        num_par += contador + ' '
    }contador++
}
console.log(num_par.trim())