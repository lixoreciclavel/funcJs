let info = document.getElementById("info10")


function calculadora(){
    let maiorNum = 0
    let menorNum = 0
    for(let i=0; i<5; i++){
        let number = Number(prompt(`Digite o °${i+1} número:`))
        info.innerHTML += `${number} `
        if(i == 0){
            maiorNum = number
            menorNum = number
        }
        else{
            if(number > maiorNum){
                maiorNum = number
            }
            else if(number < menorNum){
                menorNum = number
            }
        }
    }
    info.innerHTML += `<br>O maior número digitado é ${maiorNum}.`
    info.innerHTML += `<br>E o menor número digitado é ${menorNum}.`
}

calculadora()