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
    else{
        document.getElementById("resultado").innerHTML = `O menor número é ${num2}`

    }

}

function exe4(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    //processamento

    if (num1 > num2) {
        document.getElementById("resultado").innerHTML = `O maior número é ${num1}`

    }
    else{
        document.getElementById("resultado").innerHTML = `O maior número é ${num2}`

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


}
