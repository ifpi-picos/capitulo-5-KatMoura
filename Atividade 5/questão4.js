const ano_nascimento = parseInt(prompt('Digite o seu ano de nascimento: '))
const ano_atual = new Date().getFullYear()
let idade = ano_atual - ano_nascimento

if(idade >= 18){
    console.log('Você já é maior de idade!')
} else{
    console.log('Você é menor de idade!')
}
