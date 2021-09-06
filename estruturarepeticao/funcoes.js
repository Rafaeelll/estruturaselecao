function exe0(){
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
function exe6(){
  contador = 1
  let valor
  soma_v = 0
  soma_p = 0
  let codigo

  while(contador<=15){
    valor = Number(prompt(`Informe o valor total do produto ${contador}:`))
    //converter para maiusculo
    codigo = prompt("Informe V para compra à vista e P para compra à prazo").toUpperCase()
    switch(codigo){
            case 'V': soma_v += valor
                        break
            case 'P': soma_p += valor
                        break
            default: alert(`Forma de pagamento inválido`)
        }

    contador++
  }
  alert(`Total à vista ${soma_v.toFixed(2)} Total à prazo ${soma_p.toFixed(2)} Total geral ${(soma_v+soma_p).toFixed(2)}`)
  alert(`Primeira parcela do valor total à prazo ${(soma_p/3).toFixed(2)}`)

}
function exe23(){
    let opcao
    do{
        opcao = Number(prompt("Digite \n1.Novo salário \n2.férias \n3.Décimo terceiro \n4.Sair"))
        switch(opcao){
            case 1: let salario = Number(prompt("Informe o salário"))
                    let novosalario
                    if (salario<210){
                        novosalario = salario + (15 * salario) /100
                        
                    }
                    else if (salario <= 600) {
                        novosalario = salario + (10 * salario) /100
                    }
                    else{
                        novosalario = salario + (5 * salario) /100

                    }
                    alert(`O novo salario é de ${novosalario}`)
                    break
            case 2: salario = Number(prompt("Informe o salário"))
                    alert(`As férias serão ${salario + salario/3}`)
                    break
            case 3: salario = Number(prompt("Informe o salário"))
                    let meses = Number(prompt(`Informe quantos meses foram trabalhados`))
                        alert(`Décimo terceiro ${(salario * meses) / 12}`)
                    break
            case 4: alert(`O programa será encerrado`)
                    break
            default: alert("Opção inválida")

        }

    }
    while (opcao !=4)
}
function exe4(){
    let opcao
    let saida = 0
    let saida1 = 0
    let saida2 = 0
    let saida3 = 0
    let saida5 = 0
    let saida6 = 0
    let saida7 = 0
    let saida8 = 0
    let saida9 = 0
    let saida10 = 0
    do{
        opcao = Number(prompt("Digite uma das opções abaixo: \n1.Nova multiplicação \n2.Sair"))
        switch(opcao){
            case 1: let num = Number(prompt("Informe o número: "))

                    saida = num * 0
                    saida1 = num * 1
                    saida2 = num * 2
                    saida3 = num * 3
                    saida4 = num * 4
                    saida5 = num * 5
                    saida6 = num * 6
                    saida7 = num * 7
                    saida8 = num * 8
                    saida9 = num * 9
                    saida10 = num * 10
                    alert(`O resultado da tabuada é: \n${saida} \n${saida1} \n${saida2} \n${saida3} \n${saida4} \n${saida5} \n${saida6} \n${saida7} \n${saida8} \n${saida9} \n${saida10}`)
                    break
            case 2: alert(`O programa será encerrado`)
                    break
            default: alert("Opção inválida")

        }
    }
    while(opcao!=2)
}

function exe5(){
    let opcao
    let saida = 0
    let saida1 = 0
    let saida2 = 0
    let saida3 = 0
    let saida5 = 0
    let saida6 = 0
    let saida7 = 0
    let saida8 = 0
    let saida9 = 0
    let saida10 = 0
    do{
        opcao = Number(prompt("Digite as opções abaixo: \n1.Nova multiplicação \n2.Sair"))
        switch(opcao){
            case 1: let num = Number(prompt("Informe o número: "))
                    if(num<=10){
                        saida = num * 0
                        saida1 = num * 1
                        saida2 = num * 2
                        saida3 = num * 3
                        saida4 = num * 4
                        saida5 = num * 5
                        saida6 = num * 6
                        saida7 = num * 7
                        saida8 = num * 8
                        saida9 = num * 9
                        saida10 = num * 10
                        alert(`O resultado da tabuada é: \n${saida} \n${saida1} \n${saida2} \n${saida3} \n${saida4} \n${saida5} \n${saida6} \n${saida7} \n${saida8} \n${saida9} \n${saida10}`)

                    }

                    else{
                        alert ("Digite outro numero! \nTabuada somente de 1 ate 10.")
                    }
                    break
            case 2: alert(`O programa será encerrado`)
                    break
            default: alert("Opção inválida")

        }
    }
    while(opcao!=2)
}
function exe7(){
    let contador = 1
    let somap = 0
    let somaalt = 0
    let soma50 = 0
    let media = 0
    let porc = 0
    let soma10_20 =0
    let somap40 =0
    let alt
    let idade 
    let peso
    while (contador<=5) {
        idade = Number(prompt(`Informe a idade ${contador}:`))
        alt = Number(prompt(`Informe a altura  ${contador}:`))
        peso = Number(prompt(`Informe o peso ${contador}:`))

        if (idade>50){
            soma50++
        
        }
        else if ((idade >=10) && (idade<=20)){
            soma10_20++
            media =  soma10_20 / alt
      
        }
        else if(peso<40){
            somap40++
            porc = (somap40 / peso) * 100
        
        }
        contador++
    }
alert(`A quantidade de pessoas com idade superior a 50 anos: ${soma50} \nMédia da altura das pessoas entre 10 e 20 anos: ${media} \nPorcentagem de pessoas com peso inferior a 40Kg: ${porc}`)


}
