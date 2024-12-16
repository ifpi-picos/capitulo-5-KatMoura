// Questãp 07:
function calcular_area_circulo(raio) {
    // Fórmula para calcular a área: A = π * r²
    return Math.PI * Math.pow(raio, 2)
}
let raio = prompt('Digite o raio: ')
/* 
Chamando a função para calcular a área
e armazenando o resultado em uma variável, limitando a duas casas decimais
*/
let area = calcular_area_circulo(raio).toFixed(2)
// Exibindo o resultado no console
console.log(`A área do círculo de raio ${raio} é: ${area}`)

