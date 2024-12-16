let numero1 = parseFloat(prompt('Digite um número: '))
let numero2 = parseFloat(prompt('Digite mais um número: '))
let numero3 = parseFloat(prompt('Digite outro número: '))

if(numero1 >= numero2 && numero1 >= numero3){
    console.log(`O número ${numero1} é o maior.`)
} else if(numero2 >= numero1 && numero2 >= numero3){
    console.log(`O número ${numero2} é o maior.`)
} else{
    console.log(`O número ${numero3} é o maior.`)
}
