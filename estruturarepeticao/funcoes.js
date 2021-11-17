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
    let saida4 = 0
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
    let saida4 = 0
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
    let quant90 = 0
    let quant10_30 = 0
    let porc = 0
    let soma = 0
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

function exe10(){
    let cont = 1
    let num
    let somapares = 0
    let somaimp = 0
    while(cont<=10) {
        num = Number(prompt(`Digite o numero ${cont}:`))
        if(num % 2 == 0){
            somapares = somapares + num
            alert(`O número digitado é par`)
        }
        if (num % 2 != 0){
            somaimp = somaimp + num
            alert(`O número digitado é impar`)
        }

      cont++ 
    }
    alert(`A soma dos números pares é: ${somapares} \nA soma dos números impares é: ${somaimp}`)

}
function exe11(){

    let vlor
    let vlorTotal = 0
    let desc = 0
    let parce
    let vlorpar = 0

        vlor = Number(prompt(`Digite o valor do carro: `))
        parce = Number(prompt(`Digite a quantidades de parcelas: \n0-Para compra à vista \n6 Parcelas \n12 Parcelas \n18 Parcelas \n24 Parcelas \n30 Parcelas \n36 Parcelas \n42 Parcelas \n48 Parcelas \n54 Parcelas \n60 Parcelas`))
        switch(parce){
            case 0: parce; break
            case 6: parce; break
            case 12: parce; break
            case 18: parce; break
            case 24: parce; break
            case 30: parce; break
            case 36: parce; break
            case 42: parce; break
            case 48: parce; break
            case 54: parce; break
            case 60: parce; break
            default: alert("Quantidade de parcelas digitada é inválida")
        }
        if (parce == 0){
            vlorpar = 0
            desc = vlor * 0.20
        }
        if (parce == 6){
            vlorpar = vlor * 0.03
        }
        if (parce == 12){
            vlorpar = vlor * 0.06
        }
        if (parce == 18){
            vlorpar = vlor * 0.09
        }
        if (parce == 24){
            vlorpar = vlor * 0.12
        }
        if (parce == 30){
            vlorpar = vlor * 0.15
        }
        if (parce == 36){
            vlorpar = vlor * 0.18
        }
        if (parce == 42){
            vlorpar = vlor * 0.21
        }
        if (parce == 48){
            vlorpar = vlor * 0.24
        }
        if (parce == 54){
            vlorpar = vlor * 0.27
        }
        if (parce == 60){
            vlorpar = vlor * 0.30
        }
        vlorTotal = vlor + vlorpar - desc

alert(`O Preço final do carro adquirido foi: ${vlorTotal} \nA quantidade de parcelas é: ${parce}`)

}
function exe13(){
    let idade
    let peso 
    let cont = 1
    let soma1_10 = 0; let soma11_20 = 0; let soma21_30 = 0; let soma31acima = 0;
    let media1 = 0; let media2 = 0; let media3 = 0; let media4 = 0;

    while(cont<=15){
        idade = Number(prompt(`Informe a idade ${cont}: `))
        peso = Number(prompt(`Informe o peso: ${cont} `))

        if ((idade>=1) && (idade <=10)){
            soma1_10++
            media1 = media1 + peso
        }
        if ((idade>=11) && (idade <=20)){
            soma11_20++
            media2 = media2 + peso
        }

        if ((idade>=21) && (idade <=30)){
            soma21_30++
            media3 = media3 + peso
        }

        if (idade>31){
            soma31acima++
            media4 = media4 + peso
        }

      cont++  
    }
    alert(`A media de peso das pessoas com idade 1 ate 10 anos é: ${media1/soma1_10}\nA media de peso das pessoas com idade 11 ate 20 anos é: ${media2/soma11_20}\nA media de peso das pessoas com idade 21 ate 30 anos é: ${media3/soma21_30}\nA media de peso das pessoas com idade 31 anos ou mais é: ${media4/soma31acima}`)

}
function exe14(){
    let opniao
    let idade 
    let cont = 1
    let media_idade = 0
    let quant_reg = 0
    let porc_bom = 0
    let quant_otimo = 0
    let quant_bom = 0

    while(cont<=15){
        idade = Number(prompt(`Digite a idade do espectador ${cont}: `))
        opniao = Number(prompt(`Digite a opinião do espectador ${cont}, sendo que: \n1-Regular \n2-Bom \n3-Ótimo`))
        switch(opniao){
            case 1: quant_reg++; break
            case 2: quant_bom++; break
            case 3: quant_otimo++; break
            default: alert(`Opnião digitada é inválida`)
        }
        if ((idade>0) && (opniao == 3)){
            media_idade = media_idade + idade
        }
        if ((idade>0) && (opniao == 2)){
            porc_bom = quant_bom / 15 * 100
        }

        cont++
    }
    alert(`A Média das idades das pessoas que responderam ótimo é: ${media_idade/quant_otimo.toFixed(2)} \nA quantidade de pessoas que responderam regular é: ${quant_reg}\nA porcentagem das pessoas que respoderam bom: ${porc_bom.toFixed(2)} %`)
}
function exe16(){
    let idade 
    let media = 0
    let cont = 0

    do{
        idade = Number(prompt(`Escolha uma das opções abaixo: \nDigite sua idade: \nDigite 0 para sair. `))

        if (idade > 0){
            cont++
            media = media + idade
        }
    }
    while(idade!=0)
    alert(`A média da idade de todas pessoas é: ${media/cont.toFixed(2)} `)

}
function exe17(){
    let canal 
    let soma4 = 0; let soma5= 0; let soma7 = 0; let soma12 = 0; 
    let porc4 = 0; let porc5= 0; let porc7 = 0; let porc12 = 0
    let somatotal = 0

    do{
        canal = Number(prompt(`Digite o numero do canal de TV:\n4-Canal 4\n5-Canal 5\n7-Canal 7\n12-Canal 12\n0-Canal 0 para sair.`))
        switch(canal){
            case 4: soma4++; break
            case 5: soma5++; break
            case 7: soma7++; break
            case 12: soma12++; break
            case 0: alert(`A pesquisa de audiência sera encerrada`); break
            default: alert(`Opção de canal é inválida`)
        }
        somatotal = soma4 + soma5 + soma7 + soma12
        if(canal == 4){
            porc4 = soma4 / somatotal * 100
        }
        if(canal == 5){
            porc5 = soma5 / somatotal * 100
        }
        if(canal == 7){
            porc7 = soma7 / somatotal * 100
        }
        if(canal == 12){
            porc12 = soma12 / somatotal * 100
        }

    }
    while(canal!=0)
    alert(`A porcentagem de audiência do canal 4 é: ${porc4.toFixed(2)} % \nA porcentagem de audiência do canal 5 é: ${porc5.toFixed(2)} % \nA porcentagem de audiência do canal 7 é: ${porc7.toFixed(2)} % \nA porcentagem de audiência do canal 12 é: ${porc12.toFixed(2)} %`)

}
function exe18(){
    let idade 
    let sexo 
    let cont = 0
    let sal
    let media_sal = 0
    let maioridade = 0
    let menoridade = 0
    let cont_mul200 = 0
    let idade_menor_sal = 0
    let sexo_menor_sal

    do{
        idade = Number(prompt(`Digite a idade da pessoa pesquisada: \n\n\n\n\nDigite numero negativo para sair.`))
        sal = Number(prompt(`Digite o salário da pessoa pesquisada: `))
        sexo = prompt(`Digite o genêro da pessoa pesquisada: \nM-Masculino \nF-Feminino`).toUpperCase()
        switch(sexo){
            case 'M': sexo_menor_sal = sexo; break
            case 'F': sexo_menor_sal = sexo; break
            default: alert(`O Genêro digitado é inválido!`)
        }
        if (sal>0){
            cont++
            media_sal = media_sal + sal
        }
        if (idade>0){
            maioridade = maioridade + idade
        }
        else{
            menoridade = menoridade + idade
        }
        if ((sal>0) && (sal<=200)){
            cont_mul200++
        }
        if ((idade>0) && (sexo == 'M') && (sal>0)){
            idade_menor_sal = idade_menor_sal + idade
        }
        else{
            idade_menor_sal = idade_menor_sal + idade
        }
        if ((idade>0) && (sexo == 'M') && (sal>0)){
            sexo_menor_sal = sexo_menor_sal + sexo
        }
        else{
            sexo_menor_sal = sexo_menor_sal + sexo

        }
        if ((idade>0) && (sexo == 'F') && (sal>0)){
            idade_menor_sal = idade_menor_sal + idade
        }
        else{
            idade_menor_sal = sexo_menor_sal + sexo

        }
        if ((idade>0) && (sexo == 'F') && (sal>0)){
            sexo_menor_sal = sexo_menor_sal + sexo
        }
        else{
            sexo_menor_sal = sexo_menor_sal + sexo


        }

    }
    while(idade!=0)
    alert(`A média dos salários do grupo é: ${media_sal / cont.toFixed(2)} \nA maior idade do grupo é: ${maioridade} \nA menor idade do grupo é: ${menoridade} \nA quantidade de mulheres com salário ate R$ 200,00: ${cont_mul200} \n A idade ${idade_menor_sal} é a menor e o genero é ${sexo_menor_sal} tem a menor salário`)

}
