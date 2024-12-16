const numero = parseInt(prompt('Digite um número: '))

function calcular_fatorial(n){
    if(n < 0){
        return 'Fatorial não definido para números negativos.'
    }
    let fatorial = 1
    for (let i = 1; i <= n; i++){
        fatorial *= i
    }
    return fatorial
}
const resultado = calcular_fatorial(numero)
console.log(`O fatorial de ${numero} é ${resultado}`)