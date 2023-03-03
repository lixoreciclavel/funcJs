const nota01 = Number(prompt('Digite sua 1º nota: '));
const nota02 = Number(prompt('Digite sua 2º nota: '));
const nota03 = Number(prompt('Digite sua 3º nota: '));
const letra = prompt('Digite uma letra (A para média aritmética // P para média ponderada): ');

if(letra == "A"){
    mediaArit = (nota01 + nota02 + nota03) / 3
    document.getElementById('info9').innerHTML = `Sua média aritmética é: ${mediaArit}.`
} 
if(letra == "P"){
    mediaPond = (nota01 * 5) + (nota02 * 3) + (nota03 * 2) / 5 + 3 + 2
    document.getElementById('info9').innerHTML = `Sua média Ponderada é: ${mediaPond}.`
}