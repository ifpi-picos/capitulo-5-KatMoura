const a = parseFloat(prompt('Digite um número: '))
const b = parseFloat(prompt('Digite outro número: '))

if(a % b === 0 || b % a === 0){
    console.log('Pelo menos um dos números é múltiplo do outro')
} else {
    console.log('Nenhum dos números é múltiplo do outro')
}