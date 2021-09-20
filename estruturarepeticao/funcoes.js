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
  let soma_v = 0
  let soma_p = 0
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
                    alert(`O resultado da tabuada é: \n${saida} \n${saida1} \n${saida2} \n${saida3} \n${saida4} \n${saida5} 
                    \n${saida6} \n${saida7} \n${saida8} \n${saida9} \n${saida10}`)
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
        opcao = Number(prompt("Digite uma das opções abaixo: \n1.Nova multiplicação \n2.Sair"))
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
                        alert(`O resultado da tabuada é: \n${saida} \n${saida1} \n${saida2} \n${saida3} \n${saida4} \n${saida5}
                        \n${saida6} \n${saida7} \n${saida8} \n${saida9} \n${saida10}`)

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
    let somaalt = 0
    let soma50 = 0
    let soma10_20 = 0
    let somap40 = 0
    let porce40 = 0
    let alt
    let idade 
    let peso
    while (contador <= 5) {
        idade = Number(prompt(`Informe a idade ${contador}:`))
        alt = Number(prompt(`Informe a altura ${contador}:`))
        peso = Number(prompt(`Informe o peso ${contador}:`))

        if (idade>0){
            alert(`A idade ${contador}: ${idade} anos`)
            
        }
        else {
            alert("Idade inválida!")
        }
        if (alt>0){
            alert(`A altura ${contador}: ${alt}`)
        }
        else{
            alert("Altura inválido!")
        }
        if (peso>0){
            alert(`O peso ${contador}: ${peso} Kg`)
        }
        else{
            alert("Peso inválida!")
        }

        if (idade>50){
            soma50++
        
        }
        else if ((idade >= 10) && (idade <= 20)){
            soma10_20++
            somaalt = somaalt + alt
        
        }
        if(peso < 40){
            somap40++ 
            porce40 = somap40 / 5 * 100
        }
        else{
           porce40 = 0 
        }
        
        contador++
    }
alert(`A quantidade de pessoas com idade superior a 50 anos: ${soma50} \nMédia da altura das pessoas entre 10 e 20 anos: ${somaalt/soma10_20}`)
alert(`Porcentagem de pessoas com peso inferior a 40Kg: ${porce40}`)
}
function exe8(){
    let contador = 1
    let soma_olh_az = 0
    let soma50_60 = 0
    let media_h_150 = 0
    let quant_h_150 = 0
    let quant_cr_cab_r = 0
    let somam40 = 0
    let porc40 = 0
    let porc_olh_a = 0
    let height
    let haircolor
    let eyecolor
    let age
    let weight
  
    while(contador<=6){
      age = Number(prompt(`Informe a idade ${contador}:`))
      weight = Number(prompt(`Informe o peso ${contador}:`))
      height = Number(prompt(`Informe a altura ${contador}:`)) 
      //converter para maiusculo
      eyecolor = prompt("Informe a cor dos olhos: \nA - para cor de olhos azuis \nP - para cor de olhos pretos \nV - para cor de olhos verdes \nC - para cor de olhos castanhos").toUpperCase()
      switch(eyecolor){
          case'A': soma_olh_az++; break
          case'P': eyecolor; break
          case'V': eyecolor; break
          case'C': eyecolor; break  
          default: alert(`Nenhuma das opções são válidas`)
       }
      haircolor = prompt("Informe a cor do cabelo: \nCP - para cor de cabelo preto \nCC - para cor de cabelo castanho \nL - para cor de cabelo louro \nR - para cor de cabelo ruivo").toUpperCase()
      switch(haircolor){
          case'CP': haircolor; break
          case'CC': haircolor; break
          case'L': haircolor; break
          case'R': haircolor; break
          default: alert(`Nenhuma das opções são válidas`)
      }
          if ((age > 50) && (height < 1.50)){
              soma50_60++
          }

          if (height < 1.50){
              quant_h_150++
              media_h_150 = media_h_150 + age
          }

          if (eyecolor == `A`){
              porc_olh_a = soma_olh_az / 6 * 100
          }
           
          if ((eyecolor != `A`) && (haircolor == `R`)){
              quant_cr_cab_r++
          }

          if (weight < 40){
              somam40++
              porc40 = somam40 / 6 * 100
          }
          
      contador++
    }

alert(`A quantidade de pessoas com idade superior a 50 anos e altura inferior a 1.50: ${soma50_60} 
    \nMédia das idades das pessoas com altura inferior a 1.50 m: ${media_h_150/quant_h_150} 
    \nQuantidade de pessoas ruivas que não possuem olhos azuis: ${quant_cr_cab_r}`)
alert(`Porcentagem de pessoas com peso inferior a 40Kg: ${porc40} 
    \nPorcentagem de pessoas com olhos azuis: ${porc_olh_a}`)

  }
function exe9(){
    let cont = 1
    let mediaidade = 0
    let soma = 0
    let quant90 = 0
    let quant10_30 = 0
    let porc = 0
    let quant190 = 0
    let peso
    let alt
    let idades
    while (cont <= 10) {
        idades = Number(prompt(`Informe a idade ${cont}:`))
        peso = Number(prompt(`Informe o peso ${cont}:`))
        alt = Number(prompt(`Informe a altura ${cont}:`))

        if(idades > 0){
            soma++
            mediaidade = mediaidade + idades
        }
        else{
            alert(`Idade inválida`)
        }
        if((peso > 90) && (alt < 1.50)){
            quant90++
        }

        if (alt > 1.90){
            quant190++
        }
        if ((idades >= 10) && (idades <= 30)){
            quant10_30++
            porc = quant10_30 / quant190 * 100
        }
      cont++  
    }
    alert(`A Média da idade das dez pessoas: ${mediaidade/soma}
    \nA quantidade de pessoas com peso superior a 90kg e altura inferior a 1,50 m: ${quant90}
    \nA porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90: ${porc}`)
   
}
function exe1(){
    let a
    let b 
    let c
    let d
    let aux = 0
    for(let cont2=1;cont2<=5;cont2++){
        console.log(cont2)
        a = Number(prompt(`Informe o valor de A:`))
        b = Number(prompt(`Informe o valor de B:`))
        c = Number(prompt(`Informe o valor de C:`))
        d = Number(prompt(`Informe o valor de D:`))
    for(let cont=1;cont<=3;cont++){
        console.log(cont)
        if (a > b){
            aux = a
            a = b
            b = aux
        }
        if(b > c){
            aux = b
            b = c
            c = aux
        }
        if(c > d){
            aux = c
            c = d
            d = aux
        }

    }
    alert(`Ordem Crescente ${a} ${b} ${c} ${d}`)
    alert(`Ordem Decrescente ${d} ${c} ${b} ${a}`)

    }

}
function exe2(){
    let quant = 120
    let lucro  
    let saida = ""
    let maiorlucro = 0
    let maiorquant = 0
    let maiorpreco = 0


    for(let preco=5.0; preco>= 1.0; preco = preco - 0.50){
        lucro = (preco*quant) - 200
        saida = saida + (`Preço: R$ ${preco} Quantidade: ${quant} despesas: R$ 200,00 lucro:R$ ${lucro}`) + "\n"
        quant = quant + 26 //preparar para o proximo calculo
        if (lucro > maiorlucro){
            maiorlucro = lucro
            maiorpreco = preco
            maiorquant = quant
        }
        alert(saida)
        alert(`Maior lucro: R$ ${maiorlucro} Maior qtde: ${maiorquant} Maior preço R$ ${maiorpreco}`)
    }
}

function exe21(){
    let totalv = 0
    let Candi1 = 0; let Candi2 = 0; let Cand3 = 0; let Candi4 = 0; let soman = 0; let somab = 0
    let opcao
    do{
        opcao = Number(prompt("Informe: \n1.Votar no Candi1 \n2.Votar no Candi2 \n3.Votar no Candi3 \n4.Votar noCandi4 \n5.Votar nulo \n6.Votar em branco \n0. Sair"))
        switch(opcao){
            case 1: Candi1++;  break
            case 2: Candi2++; break
            case 3: Cand3++;  break
            case 4: Candi4++; break
            case 5: soman++;  break
            case 6: somab++;  break
            case 0: alert(`Encerrando as votações`); break
            default: alert("Opção inválida")

        }

    }
    while(opcao!=0)
    totalv = Candi1 + Candi2+ Cand3+ Candi4 + soman + somab
    alert(`Candi1: ${Candi1} \nCandi2: ${Candi2} \nCandi3: ${Cand3} \nCandi4: ${Candi4} \nBranco: ${somab} \nNulo: ${soman}`)
    alert(`% Branco: ${somab/totalv*100} \n% Nulo: ${soman/totalv*100}`)

}
function exe15(){

    let sexo 
    let cont = 1
    let soma_m = 0
    let soma_f = 0
    let porc_h = 0
    let quan_f_s = 0
    let quan_h_n = 0
    let opcao
    let opcao_s = 0; let opcao_n = 0;

while(cont<=10){
    sexo = prompt("Informe o genêro: \nF-Feminino \nM-Masculino").toUpperCase()
    switch(sexo){
        case 'F': soma_f++; break
        case 'M': soma_m++; break
        default: alert(`Nenhuma das opções são válidas`)

    }
    opcao = prompt("Digite a resposta da pessoa entrevistada:\nS-Sim \nN-Não").toUpperCase()
    switch(opcao){
        case 'S': opcao_s++; break
        case 'N': opcao_n++; break
        default: alert(`Nenhuma das opções são válidas`)
    }
    if ((sexo == `F`) && (opcao == `S`)){
        quan_f_s++

    }
    if((sexo == `M`) && (opcao == `N`)){
        quan_h_n++
        porc_h = quan_h_n  / soma_m * 100

    }

  cont++
}
alert(`A quantidade de pessoas que responderam sim: ${opcao_s} 
    \nA quantidade de pessoas que responderam não: ${opcao_n} 
    \nQuantidade de mulheres que responderam sim: ${quan_f_s}`)
alert(`Porcentagem de homens que responderam não, entre todos os homens: ${porc_h}%`)

}


    