const num = Number(prompt('Digite um número'));

function returnValue(num01) {
    if(num01 >= 1){
        document.getElementById('info').innerHTML = `1`
        return 1
    }
        document.getElementById('info').innerHTML = `0`
        return 0
    }

    console.log(returnValue(num));
