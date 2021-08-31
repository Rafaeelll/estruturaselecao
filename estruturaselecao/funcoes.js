function exe1(){
    //entrada de dados
    //vamos coverter o que o usuario digita, o que é um texto, para um numero - função number 
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota2").value)
    //processamento
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >=7){
        document.getElementById("resultado").innerHTML = `A media é ${media}, aluno esta aprovado`
    }    
    else {
        document.getElementById("resultado").innerHTML = `A media é ${media}, aluno esta reprovado`
  
    }

}

function exe2(){
    //entrada de dados
    //vamos coverter o que o usuario digita, o que é um texto, para um numero - função number 
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    //processamento
    let media = (nota1 + nota2) / 2

    if ((media >=0) && (media <=3)){
        resultado = `Aluno reprovado com media ${media}`
    }    
    else if ((media >=3) && (media <=7)){
        resultado = `Aluno em exame com media ${media}`

  
    }
    else if ((media >=7) && (media <=10)) {
        resultado = `Aluno aprovado com media ${media}`

  
    }
    else {
        resultado = "Notas informadas são invalidas"
  
    }
    // mostra resultados 
    document.getElementById("resultado").innerHTML = resultado

}

function exe3(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    //processamento

    if (num1 < num2) {
        document.getElementById("resultado").innerHTML = `O menor número é ${num1}`

    }
    else if (num2< num1) {
        document.getElementById("resultado").innerHTML = `O menor número é ${num2}`

    }
    else {
        document.getElementById("resultado").innerHTML = `Não existe numero menor`


    }

}

function exe4(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)

    //processamento
    if ((num1==num2) && (num2==num3)){
        document.getElementById("resultado").innerHTML = `Todos números são iguais`

    }

    else if ((num1 > num2) && (num1 > num3)) {
        document.getElementById("resultado").innerHTML = `O maior número é ${num1}`

    }
    else if (num2> num3){
        document.getElementById("resultado").innerHTML = `O maior número é ${num2}`

    }
    else {
        document.getElementById("resultado").innerHTML = `O maior número é ${num3}`

    } 
    

}

function exe5(){
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    let opcao = Number(document.getElementById("opcao").value)
    //calculation

    if (opcao==1){
    media = (number1 + number2) / 2
    document.getElementById("resultado").innerHTML = `A média é ${media}`

    }
    else if ((opcao ==2) && (number1>number2)){
        diferenca = number1 - number2
        document.getElementById("resultado").innerHTML = `A Diferença do maior pelo menor é ${diferenca}`

    }
    else if ((opcao ==2) && (number2>number1)){
        diferenca = number2 - number1
        document.getElementById("resultado").innerHTML = `A Diferença do maior pelo menor é ${diferenca}`
    }
    else if (opcao ==3){
        produto = number1 * number2
        document.getElementById("resultado").innerHTML = `O produto entre números digitados é ${produto}`
        
    }
    else if (opcao==4){
        divisao = number1 / number2
        document.getElementById("resultado").innerHTML = `A Divisão do primeiro numero pelo segundo é ${divisao}`


    }
    else{
        document.getElementById("resultado").innerHTML = `Opção selecionada é invalida`

    }

}

function exe5modo2(){
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    let opcao = Number(document.getElementById("opcao").value)
    //process
    let resultado
    switch (opcao) {
        case 1: resultado = (number1+number2) / 2
            break
        case 2: if (number1>=number2){
                   resultado = number1 - number2
                }
                else {
                    resultado= number2 - number1
                }
            break
        case 3: resultado = (number1*number2)
            break
        case 4: if (number2 != 0){
                    resultado = number1/number2

                }
                else {
                    resultado = "Divisão por zero!"
                }
            break
        default: resultado = "Opção Inválida"
            
    }
    document.getElementById("resultado").innerHTML = resultado


}

function exe6() {
    let number1 = Number(document.getElementById("number1").value)
    let number2 = Number(document.getElementById("number2").value)
    let opcao = Number(document.getElementById("opcao").value)
    //processamento
    let resultado
    switch (opcao) {
        case 1: resultado = `O valor é ${Math.pow(nro1)} e ${Math.cbrt(nro2)}` 
        document.getElementById("resultado").innerHTML = `O valor é  ${Math.pow(number1, number2)}`
            break

        case 2: resultado = `O valor é ${Math.sbrt(nro1)} e ${Math.sbrt(nro2)}`
            break

        case 3: resultado = `O valor é ${Math.cbrt(nro1)} e ${Math.cbrt(nro2)}`
            break

        default: resultado = "Valor Inválido"
            
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe7(){
    // entrada de dados
    let sal = Number(document.getElementById("sal").value)
    let aumento = 0
   if (sal < 500){
       aumento = (sal * 30) / 100
    }
   if (aumento == 0){
    document.getElementById("resultado").innerHTML = `Não houve aumento`
}
    else {
    document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado: ${sal + aumento}`
    }
} 

function exe8(){
    // entrada de dados
    let salr = Number(document.getElementById("salr").value)
    let aumento = 0

   if ((salr >=1) && (salr<=300)){
       aumento = (salr * 35) / 100
       document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado: ${salr + aumento}`

    }

    else if (salr > 300) {
        aumento = (salr * 15) / 100
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado: ${salr + aumento}`

    }

    else {
        document.getElementById("resultado").innerHTML = `Não houve aumento`

    }
} 

function exe9(){
    let saldo_m = Number(document.getElementById("saldo_m").value)
    valor_c = 0
    if (saldo_m > 400){
        valor_c = (saldo_m * 30) / 100
        document.getElementById("resultado").innerHTML = `O valor do credito é: ${saldo_m + valor_c}`

    }
    else if ((saldo_m <= 400) && (saldo_m >= 300)){
        valor_c = (saldo_m * 25) / 100
        document.getElementById("resultado").innerHTML = `O valor do credito é: ${saldo_m + valor_c}`

    }

    else if ((saldo_m <= 300) && (saldo_m >= 200)){
        valor_c = (saldo_m * 20) / 100
        document.getElementById("resultado").innerHTML = `O valor do credito é: ${saldo_m + valor_c}`

    }
    else if ((saldo_m > 0) && (saldo_m <= 200)){
        valor_c = (saldo_m * 10) / 100
        document.getElementById("resultado").innerHTML = `O valor do credito é: ${saldo_m + valor_c}`

    }
    else {
        document.getElementById("resultado").innerHTML = `O valor do credito é inválido`

    }
}

function exe10(){
    let custo_f = Number(document.getElementById("custo_f").value)
    porc_d = 0
    preco_c = 0

    if ((custo_f > 0) && (custo_f <= 12000)){
        porc_d = (custo_f * 0.05) 
        document.getElementById("resultado").innerHTML = `O Preço do consumidor é: ${custo_f + porc_d}`
    }
    else if ((custo_f >= 12000) && (custo_f <= 25000)){
        preco_c = (custo_f * 0.10) + (custo_f * 0.15)
        document.getElementById("resultado").innerHTML = `O Preço do consumidor é: ${custo_f + preco_c}`
    }
    else if (custo_f > 25000){
        preco_c = (custo_f * 0.15) + (custo_f * 0.20)
        document.getElementById("resultado").innerHTML = `O Preço do consumidor é: ${custo_f + preco_c}`
    }
    else {
        document.getElementById("resultado").innerHTML = `O valor do preço do consumidor é inválido`


    }
    

}

function exe11(){
    let salr_a = Number(document.getElementById("salr_a").value)
    per_aum = 0
    per_aum2 = 0
    per_aum3 = 0

    if ((salr_a > 0) && (salr_a <= 300)) {
        per_aum = (salr_a * 0.15)
        document.getElementById("resultado").innerHTML = `O valor do aumento ${per_aum}, e o novo salario é ${salr_a + per_aum}`

    }
    else if ((salr_a >= 300) && (salr_a <= 600)) {
        per_aum2 = (salr_a * 0.10)
        document.getElementById("resultado").innerHTML = `O valor do aumento ${per_aum2}, e o novo salario é ${salr_a + per_aum2}`   
    }
    else if ((salr_a >= 600) && (salr_a <= 900)) {
        per_aum3 = (salr_a * 0.10)
        document.getElementById("resultado").innerHTML = `O valor do aumento ${per_aum3}, e o novo salario é ${salr_a + per_aum3}`   
    }
    else if (salr_a > 900) {
        document.getElementById("resultado").innerHTML = `O valor do aumento é = 0, e o novo salario é ${salr_a}`   
    }
    else {
        document.getElementById("resultado").innerHTML = `Salário não definido!`   

    }


}