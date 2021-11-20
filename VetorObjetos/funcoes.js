function exe1(){
    let vetor = []
    let pares = []
    let imp = []
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Digite o número ${i+1}:`))
    }

    for(let i=0;i<6;i++){
        if(vetor[i] % 2 == 0){
            pares.push(vetor[i])
        }
        else{
            imp.push(vetor[i])

        }
    }
    
    alert(`Todos os números pares: ${pares} \nA quantidade de números pares: ${pares.length} \nTodos números impares: ${imp}\nA quantidade de números impares: ${imp.length}`)

}

function exe2(){
    let vetor = []
    let mult2 = []
    let mult3 = []
    let mult2_3 = []

    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Digite o número ${i+1}:`))
    }

    for(let i=0;i<7;i++){
        if(vetor[i] % 2 == 0){
            mult2.push(vetor[i])
        }
        if(vetor[i] % 3 == 0){
            mult3.push(vetor[i])
        }
        if((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
            mult2_3.push(vetor[i])
        }
        
    }
    alert(`Todos os números múltiplos de 2: ${mult2} \nTodos os números múltiplos de 3: ${mult3} \nTodos os números múltiplos de 2 e 3: ${mult2_3}`)

}
function exe3(){
    let vetor = new Array (10)
    for(let i =0; i<10;i++){
        let objeto = {
            codigo: Number(`Informe o código do produto ${i+1}: `),
            estoque: Number(prompt(`Informe o estoque do produto ${i+1}: `))
        }
        vetor[i] = objeto
    }
    let cliente = Number(prompt(`Informe o codigo do cliente: `))
    do{
        let codcompra = Number(prompt(`Informe o codigo do produto para compra: `))
        //verifica se o codigo
        let achou = false //ele é falso quando não encontrou o produto, e true qundo encontrou
        for(let i = 0; i<10;i++){
            if (codcompra == vetor[i].codigo){
                achou = true
            }
            //atualiza estoque 
            let quantcompra = Number(prompt(`Informe a quantidade da compra: `))
            if (vetor[i].estoque - quantcompra >= 0){
                vetor[i].estoque = vetor[i].estoque - quantcompra
            }
            else{
                alert(`Quantidade em estoque é insuficiente`)
            }
            if (!achou){ // não encontrou
                alert(`Produto não comprado para venda`)
            }
    
        }


        cliente = Number(prompt(`Informe o codigo do cliente: \nDigite 0 para encerrar `))

    }

    while(cliente != 0)
    for(let i=0;i<10;i++){
        alert(` Código do produto ${vetor[i].codigo} e tem estoque ${vetor[i].estoque}`)
    }
}

function exe4() {

    // let vetor = [] // vetor com tamanho dinâmico
    let vetor = new Array(15) // vetor com tamanho estático - fixado
    let vetorR = []

    for(let i=0;i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}: `))
    }
    // construi o vetor resultante
    for(let i=0; i<15;i++){
        if(vetor[i] == 30){
            vetorR.push(i)
        }
    }
    alert(`As posições contendo elementos igual a 30 é ${vetorR}:`)

}
function exe5(){
    let vetorlog = new Array(15)
    let vetorling = new Array(10)
    let interseccao = []

    for(let i=0;i<15;i++){
        vetorlog = Number(prompt(`Informe o número do aluno ${i+1} que faz curso de lógica: `))
    }
    for(let i=0;i<10;i++){
        vetorling = Number(prompt(`Informe o número do aluno ${i+1} que faz curso de linguagem de progamação: `))
    }
    // intersecção
    for(let i=0; i<15; i++){ // percorre o vetor de lógica
        for(let j = 0; i<10;i++){ // percorre o vetor de linguagem de programação
            if (vetorlog[i] == vetorling[j]){
                interseccao.push(vetorlog[i])
            }

        }
    }
    alert(`Alunos que fazem ambas as disciplinas: ${interseccao}`)

}
function exe6(){
    let vetor = new Array (10)
    for(let i =0; i<10; i++){
        let objeto = {
            nome_vende: prompt(`Informe o nome do vendedor ${i+1}: `),
            vendas: Number(prompt(`Informe o total de vendas ${i+1}: `)),
            comissao: Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
        }
        vetor[i] = objeto
    }
    let totalvendas = 0
    let valorreceber = 0
    let maior = 0
    let menor = 10000
    let nomemaior = ""
    let nomemenor = ""
    for(let i=0; i<10; i++){
        valorreceber = (vetor[i].vendas * vetor[i].comissao) / 100
        if (valorreceber > maior){
            maior = valorreceber
            nomemaior = vetor[i].nome_vende
        }
        if (valorreceber < menor){
            menor = valorreceber
            nomemenor = vetor[i].nome_vende
        }
        alert(`O nome do vendedor ${i+1} é ${vetor[i].nome_vende} e o valor de comissão a receber é ${valorreceber} `)
        alert(`O valor total de vendas é ${totalvendas + vetor[i].vendas}`)

    }
    alert(`O maior valor a receber é ${maior} do vendedor ${nomemaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomemenor}`)

}
function exe7(){
    let vetor = new Array (10)
    let positivo = []
    let somanegativo = 0
    let somapositivo = 0

    for(let i = 0; i<10; i++){
        vetor[i] = Number(prompt(`Digite o número ${i+1}: `))
    }
    for(let i = 0; i<10; i++){
        if(vetor[i] > 0){
            positivo.push(vetor[i])
            somapositivo = somapositivo + positivo[i]
            
        }
        else{
            somanegativo++
        }
    }
    alert(`A quantidade de números negativos são: ${somanegativo} \nA soma dos números positivos é: ${somapositivo}`)
}
function exe8(){
    let vetor = new Array(7)
    
    for(let i=0;i<7;i++){
        let objeto = {
            nome: String(prompt(`Informe o nome do aluno(a) ${i+1}: `)),
            mediafinal: Number(prompt(`Informe o média final do aluno(a) ${i+1}: `))
        }
        vetor[i] = objeto
    }
    let maiormedia = vetor[0].mediafinal
    let nome_maiorM = vetor[0].nome
    for(let i=0;i<7;i++){
        if(vetor[i].mediafinal > maiormedia){
            maiormedia = vetor[i].mediafinal
            nome_maiorM = vetor[i].nome
        }
        if(vetor[i].mediafinal < 7){
            alert(`Aluno(a) ${vetor[i].nome} esta de exame.\nPara ser aprovado, o aluno(a) precisa tirar ${10-vetor[i].mediafinal}`)
        }

    }
    alert(`O aluno(a) ${nome_maiorM} teve a maior média final de ${maiormedia} `)

}
function exe9(){
    let vetor = new Array(10)
     // leitura de dados
     for(let i=0;i<10;i++){
         let objeto = {
             nome: prompt(`Informe o nome do produto ${i+1}`),
             codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
             preco:  Number(prompt(`Informe o preço do produto ${i+1}`))
         }
         vetor[i] = objeto
     }
 
     for(let i=0;i<10;i++){
         if ((vetor[i].codigo % 2 == 0) && (vetor[i].preco > 1000)) {
             vetor[i].novo = vetor[i].preco + (vetor[i].preco*20/100)
         }
         else if (vetor[i].codigo % 2 == 0){
             vetor[i].novo = vetor[i].preco + (vetor[i].preco*15/100)
         }
         else if (vetor[i].preco > 1000){
             vetor[i].novo = vetor[i].preco + (vetor[i].preco*10/100)
         }
         else {
             vetor[i].novo = -1 // indica que não teve aumento
         }
     }
     for(let i=0;i<10;i++){
         if (vetor[i].novo != -1) {
             alert(`Produto ${vetor[i].nome} com código ${vetor[i].codigo} tinha preço ${vetor[i].preco} e terá novo preço ${vetor[i].novo}`)
         }
     }
    
 }   
function exe1obj(){
    let vetvende = []
    let vetvendas = []
    let objeto1
    let objeto2
    let opcao

    do{
        opcao = Number(prompt(`Digite uma das opções abaixo: \n1. Cadastrar Vendedor. \n2. Cadastrar Venda. \n3. Consultar vendas de um funcionário em determinado mês.\n4. Consultar total das vendas de determinado vendedor.\n5. Mostrar o número do vendedor que mais vendeu em determinado mês. \n6. Mostar o número do mês com mais venda.\n7. Sair.`))
        switch(opcao){
            case 1: 
                objeto1 = {
                    nome: String (prompt(`Informe o nome do vendedor:`)),
                    codigo: String (prompt(`Informe o código do vendedor:`))
                }
                let achou1 = false
                for(let i=0;i<vetvende.length;i++){
                    if(vetvende[i].codigo  == objeto1.codigo){
                        achou1 = true
                    }
                }
                if(achou1){
                    alert(`Digite outro código. Esse código já esta cadastrado!`)

                }
                else {
                    vetvende.push(objeto1)
                    alert(`Vendedor cadastrado com sucesso.`)
                }
                    break
            case 2:
                objeto2 = {
                    vendedor: String (prompt(`Informe o código do vendedor: `)),
                    mes: Number(prompt(`Digite o número do mês em que o vendedor vendeu: `)),
                    valor: Number(prompt(`Digite o valor da venda do vendedor no mês: `))

                }
                let achou22 = false
                for(let i=0;i<vetvende.length;i++){
                    if(vetvende[i].codigo == objeto2.vendedor){
                        achou22 = true

                    }
                }
                if(!achou22){
                    alert(`Vendedor não existe`)
                }
                else{
                    let achou2 = false
                    for(let i=0;i<vetvendas.length;i++){
                        if((vetvendas[i].vendedor == objeto2.vendedor) && (vetvendas[i].mes == objeto2.mes)){
                            achou2 = true
                        }
                        if((vetvendas[i].vendedor == objeto2.vendedor) && (vetvendas[i].mes == objeto2.mes)){
                            achou2 = true
                        }
                    }
                    if(achou2){
                    alert(`Já existe uma venda deste vendedor neste mês`)
                    }
                    else {
                        vetvendas.push(objeto2)
                        alert(`Venda cadastrada com sucesso.`)
                    }
                }
                    break
            case 3: let codigointere = prompt(`Informe o código do vendedor:`)
                    let mesintere = Number(prompt(`informe o mês de interesse:`))
                    let achou3 = false
                    for(let i=0;i<vetvendas.length;i++){
                        if((vetvendas[i].vendedor == codigointere) && (vetvendas[i].mes == mesintere)){
                            alert(`O valor das vendas no mês ${mesintere} do funcionário ${codigointere} é de ${vetvendas[i].valor}`)
                            achou3 = true
                        }

                    }
                    if (!achou3){
                        alert(`Não foi encontrada venda para o vendedor ${codigointere} no mês ${mesintere}`)

                    }
                    break
            case 4: let codigointere2 = prompt(`Informe o código do vendedor: `)
                    let achou4 = false
                    let soma = 0
                    for(let i=0;i<vetvendas.length;i++){
                        if(vetvendas[i].vendedor == codigointere2){
                            soma = soma + vetvendas[i].valor
                            achou4 = true
                        }

                    }
                    if (!achou4){
                        alert(`Não foi encontrada venda para o vendedor ${codigointere2}`)

                    }
                    else {
                        alert(`O total de vendas do vendedor ${codigointere2} é ${soma}`)
                    }
                    break
            case 5: let mesintere2 = Number(prompt(`Digite o número do mês de interesse:`)) 
                    let maiorvenda = 0
                    let cod_maior = ""
                    let achou5 = false
                    for(let i=0;i<vetvendas.length;i++){
                        if(vetvendas[i].mes == mesintere2){
                            achou5 = true
                            if(vetvendas[i].valor > maiorvenda){
                                maiorvenda = vetvendas[i].valor
                                cod_maior = vetvendas[i].vendedor
                            }

                        }
                    }
                    if(achou5){
                        alert(`A maior venda do mês ${mesintere2} foi de ${cod_maior}, no valor de ${maiorvenda}.`)
                    }
                    else{
                        alert(`Não existe venda no mês informado.`)
                    }
                    break
            case 6: let vendasmes = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for(let i=0;i<vetvendas.length;i++){
                        let posicao = vetvendas[i].mes - 1
                        vendasmes = vendasmes[posicao] + vetvendas[i].valor
                    }
                    let maiorvendames = 0
                    let maiormes = 0
                    for(let i=0;i<vendasmes.length;i++){
                        if(vendasmes[i]>maiorvendames){
                            maiorvendames = vendasmes
                            maiormes = i + 1
                        }
                    }
                    alert(`O mês ${maiormes} teve a maior venda de ${maiorvendames}`)
                    break
            case 7: alert(`Programa será finalizado`)
                    break
            
            default: alert(`Opção inválida`)  
        }
    }
    while(opcao != 7)

} 
function exe1obj2(){
    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt("Informe \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Mostra venda a partir de vendedor e mês \n4. Mostra total vendas a partir de um vendedor \n5. Maior Venda de um mês \n6. Mês com maior venda \n7. Sair"))
        switch(opcao){
            case 1: let objeto1 = {
                        codigo: prompt(`Informe o código do vendedor`),
                        nome: prompt(`Informe o nome do vendedor`)    
                    }
                    // vamos percorrer vetor para encontrar código já existente
                    let achou1 = false // se não encontrar, recebe false, caso encontre, recebe true
                    // vetVendedores.length -> qtde de elementos no vetor
                    for(let i=0;i<vetVendedores.length;i++){
                        if (vetVendedores[i].codigo == objeto1.codigo){
                            achou1 = true // encontramos um vendedor com este código
                        }
                    }
                    if (achou1) {
                        alert(`Já existe um vendedor com este código`)
                    }
                    else {
                        vetVendedores.push(objeto1) // adiciona o vendedor no vetor
                        alert(`Vendedor cadastrado com sucesso`)
                    }
                    break
            case 2: let objeto2 = {
                        vendedor: prompt(`Informe o código do vendedor`),
                        mes: Number(prompt(`Informe o mês da venda`)),
                        valor: Number(prompt(`Informe o valor da venda`))
                    }
                    let achou22 = false // verifica se o vendedor existe
                    for(let i=0;i<vetVendedores.length;i++){
                        if (vetVendedores[i].codigo == objeto2.vendedor){
                            achou22 = true // existe
                        }
                    }
                    if (!achou22){
                        alert(`Vendedor não existe`)
                    }
                    else {
                        let achou2 = false
                        for(let i=0;i<vetVendas.length;i++){
                            if ((vetVendas[i].vendedor == objeto2.vendedor) && (vetVendas[i].mes == objeto2.mes)){
                                achou2 = true
                            }
                        }
                        if (achou2){
                            alert(`Já existe uma venda deste vendedor neste mês`)
                        }
                        else {
                            vetVendas.push(objeto2)
                            alert(`Venda cadastrada com sucesso`)
                        }
                    }
                    break
            case 3: let codigoInteresse = prompt(`Informe código do vendedor`)
                    let mesInteresse = Number(prompt(`Informe mês de interesse`))
                    let achou3 = false
                    for(let i=0;i<vetVendas.length;i++){
                        if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)){
                            alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de ${vetVendas[i].valor}`)
                            achou3 = true
                        }
                    }
                    if (!achou3){
                        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse} no mês ${mesInteresse}`)
                    }
                    break
            case 4: 
                    let codigoInteresse2 = prompt(`Informe código do vendedor`)
                    let achou4 = false
                    let soma = 0
                    for(let i=0;i<vetVendas.length;i++){
                        if ((vetVendas[i].vendedor == codigoInteresse2)){
                            soma = soma + vetVendas[i].valor
                            achou4 = true
                        }
                    }
                    if (!achou4){
                        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse2}`)
                    }
                    else {
                        alert(`O total de vendas do vendedor ${codigoInteresse2} é ${soma}`)
                    }
                    break
            case 5: let mesInteresse2 = Number(prompt(`Informe o mês de interesse`))
                    let maiorVenda = 0
                    let quemVendeu = ""
                    let achou5 = false
                    for(let i=0;i<vetVendas.length;i++){
                        if (vetVendas[i].mes == mesInteresse2){
                            achou5 = true
                            if (vetVendas[i].valor > maiorVenda){
                                maiorVenda = vetVendas[i].valor
                                quemVendeu = vetVendas[i].vendedor
                            }
                        }
                    }
                    if (achou5){
                        alert(`O maior venda no mês ${mesInteresse2} foi de ${quemVendeu} no valor de ${maiorVenda}`)
                    }
                    else {
                        alert(`Não existe venda no mês informado`)
                    }
                    break
            case 6:
                    let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0] // zero neutraliza a soma
                    for(let i=0;i<vetVendas.length;i++){
                        let posicao = vetVendas[i].mes - 1 // posição é no mês da venda - 1
                        vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
                    }
                    // procurar o mês com maior venda
                    let maiorVendames = 0
                    let maiorMes = 0
                    for(let i=0;i<vendasMes.length;i++){
                        if (vendasMes[i] > maiorVendames){
                            maiorVendames = vendasMes
                            maiorMes = i + 1
                        }
                    }
                    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVendames}`)
                    break
            case 7: alert("Finalizando o programa")
                    break
            default: alert("Opção inválida")
        }
    }
    while (opcao != 7)
}
function exe2obj(){
    let vetor = new Array(4) 

    for(let i=0;i<4;i++){
        let objeto = {
            sal: Number(prompt(`Informe o salário do ${i+1}° habitante`)),
            idade: Number(prompt(`Informe a idade do ${i+1}° habitante`)),
            filho: Number(prompt(`Informe a quantidade de filho(s) ${i+1}° habitante`)),
            genero: prompt(`Informe o genêro do ${i+1}° habitante:\nM-Masculino\nF-Feminino`).toUpperCase()
             
        }
        vetor[i] = objeto
    }
        let soma = 0
    for(let i=0;i<4;i++){
        if (vetor[i].sal > 0){
            soma = soma + vetor[i].sal
        }
    }
        let soma_filho = 0
    for(let i=0;i<4;i++){
        if(vetor[i].filho > 0){
            soma_filho = soma_filho + vetor[i].filho
        }
    }
    let maiorsal = 0
    for(let i=0;i<4;i++){
        if(vetor[i].sal > maiorsal){
            maiorsal = vetor[i].sal
        }
    }
    let cont1000 = 0
    let soma_m = 0
    for(let i=0;i<4;i++){
        switch(vetor[i].genero){
            case 'F': soma_m++; break
            case 'M': vetor[i].genero; break
            default: alert(`Opção inválida`)
        }
        if((vetor[i].sal > 1000) && (vetor[i].genero == "F")){
            cont1000 = soma_m
        }
    }
    alert(`A média salarial dos habitantes é: ${soma/4}\nA média de filhos dos habitantes é: ${soma_filho/4}\nA maior salário de entre todos os habitantes é: ${maiorsal}\nPercentual de mulheres com salario > R$1000,00 reias: ${cont1000 / 4 * 100}%`)

}
function exe3obj(){
    let vetor = new Array(4)
    for(let i=0;i<4;i++){
        let objeto = {
            genero: prompt(`Informe o genêro do ${i+1}° habitante:\nM-Masculino\nF-Feminino`).toUpperCase(),
            alt: Number(prompt(`Informe a altura do ${i+1}° habitante:`)),
            idade: Number(prompt(`Informe a idade do ${i+1}° habitante:`)),
            eyecolor: prompt(`Informe a cor dos olhos do ${i+1}° habitante:\nA-Azul\nC-Castanho\nV-Verde`)

        }
        vetor[i] = objeto
    }
    let soma_cast = 0
    let cont_c = 0
    for(i=0;i<4;i++){
        switch(vetor[i].eyecolor){
            case 'A': vetor[i].eyecolor; break
            case 'C': vetor[i].eyecolor; break
            case 'V': vetor[i].eyecolor; break
            default: alert(`Opção inválida`)
        }
        if((vetor[i].idade > 0)&&(vetor[i].eyecolor == 'C')&&(vetor[i].alt > 1.60)){
            cont_c++
            soma_cast = soma_cast + vetor[i].idade
        }
    }
    let contv = 0
    let soma_m = 0
    for(i=0;i<4;i++){    
        switch(vetor[i].genero){
            case 'F': vetor[i].genero; break
            case 'M': soma_m++; break
            default: alert(`Opção inválida`)
        }
        if((vetor[i].genero == 'F')&&(vetor[i].idade > 20)&&(vetor[i].idade <= 45)&&(vetor[i].eyecolor == 'V')&&(vetor[i].alt < 1.70)){
            contv++
        }
    }
    let contm = 0
    for(i=0;i<4;i++){  
        if(vetor[i].genero == 'M'){
            contm = soma_m
        }
    }
    let maior = 0
    for(let i=0;i<4;i++){
        if (vetor[i].idade > maior){
            maior = vetor[i].idade
        }
    }
    alert(`Média de idade das pessoas com olhos castanhos e altura > 1.60 m = ${soma_cast/cont_c}\nMaior idade entre os habitantes = ${maior}
    \nQuantidade de indivídous com do sexo feminino com idade de 20 ate 45 e olhos verdes e altura < 1.70 m = ${contv}\nPorcentagem de homens = ${contm /4 * 100}% `)
}
function exe4obj(){
    let vetor = new Array (4)

    for(let i=0; i<4; i++){
        objeto = {
            idade: Number(prompt(`Informe a idade do ${i+1}° habitante:`)),
            genero: prompt(`Informe o genêro do ${i+1}° habitante:\nM-Masculino\nF-Feminino`).toUpperCase(),
            renda_fam: Number(prompt(`Informe a renda familiar do ${i+1}° habitante:`)),
            children: Number(prompt(`Informe a quantidade de filho(s) ${i+1}° habitante`))
        }
        vetor[i] = objeto
    }
    soma_sal = 0

    for(let i=0;i<4;i++){
        if(vetor[i].renda_fam > 0)
        soma_sal = soma_sal + vetor[i].renda_fam

    }
    let maior = 0
    let menor = 10000
    for(let i=0; i<4; i++){
        if (vetor[i].idade > maior){
            maior = vetor[i].idade
        }
        if (vetor[i].idade < menor){
            menor = vetor[i].idade
        }
    }
    cont_m = 0
    for(let i=0;i<4;i++){
        switch(vetor[i].genero){
            case 'F': vetor[i].genero; break
            case 'M': vetor[i].genero; break
        
        }
       if((vetor[i].children>2)&&(vetor[i].renda_fam<600)&&(vetor[i].genero == 'F')){
           cont_m++
       }
    }
    alert(`A média de salario entre os habitantes = ${soma_sal/4}\nA menor idade do grupo é ${menor}, e a maior é ${maior}
    \nMulheres com + de dois filhos e com renda < R$600,00 = ${cont_m}`)
}
