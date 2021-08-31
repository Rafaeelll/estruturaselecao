function exe0() {
    let contador = 1
    let soma = 0
    let preco

while(contador<=10){
    preco = Number(prompt(`Informe o preço do produto ${contador}:`))
    soma = soma + preco
    contador++


}
alert(`A média de preço dos produto é ${soma/10}`)

}
function exe3(){
    let contador = 1
    let soma = 0
    let soma1 = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    let idade

while(contador<=8){
    idade = Number(prompt(`Informe a idade ${contador}:`))
    if (idade <=15){
        soma++
    }
    else if (idade <=30){
        soma1++
    }
    else if (idade <=45){
        soma2++
    }
    else if (idade <=60){
        soma3++
    }
    else {
        soma4++
    }
    contador++
}
alert(`Faixa 1: ${soma} Faixa 2: ${soma1} Faixa 3: ${soma2} Faixa 4: ${soma3} Faixa 5: ${soma4}`) 
alert(`Percentual Faixa 1: ${soma/8*100} Faixa 5: ${soma4/8*100}`)


}
