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
