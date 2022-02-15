function cadastrarvendedores(vetVendedores){
    let objeto = {
        codigo: prompt(`Informe o código do vendedor`),
        nome: prompt(`Informe o nome do vendedor`)    
    }
    // vamos percorrer vetor para encontrar código já existente
    let achou = false // se não encontrar, recebe false, caso encontre, recebe true
    // vetVendedores.length -> qtde de elementos no vetor
    for(let i=0;i<vetVendedores.length;i++){
        if (vetVendedores[i].codigo == objeto.codigo){
            achou = true // encontramos um vendedor com este código
        }
    }
    if (achou) {
        alert(`Já existe um vendedor com este código`)
    }
    else {
        vetVendedores.push(objeto) // adiciona o vendedor no vetor
        alert(`Vendedor cadastrado com sucesso`)
    }
}
function cadastravendas(vetVendedores, vetVendas){
    let objeto = {
        vendedor: prompt(`Informe o código do vendedor`),
        mes: Number(prompt(`Informe o mês da venda`)),
        valor: Number(prompt(`Informe o valor da venda`))
    }
    let achou = false // verifica se o vendedor existe
    for(let i=0;i<vetVendedores.length;i++){
        if (vetVendedores[i].codigo == objeto.vendedor){
            achou = true // existe
        }
    }
    if (!achou){
        alert(`Vendedor não existe`)
    }
    else {
        let achou = false
        for(let i=0;i<vetVendas.length;i++){
            if ((vetVendas[i].vendedor == objeto.vendedor) && (vetVendas[i].mes == objeto.mes)){
                achou = true
            }
        }
        if (achou){
            alert(`Já existe uma venda deste vendedor neste mês`)
        }
        else {
            vetVendas.push(objeto)
            alert(`Venda cadastrada com sucesso`)
        }
    }
}
function mostrarvendas(vetVendas, codigoInteresse, mesInteresse){
    let achou = false
    for(let i=0;i<vetVendas.length;i++){
        if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)){
            alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de ${vetVendas[i].valor}`)
            achou = true
        }
    }
    if (!achou){
        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse} no mês ${mesInteresse}`)
    }
}
function mostrartotalvendas(vetVendas, codInteresse){
    let achou4 = false
    let soma = 0
    for(let i=0;i<vetVendas.length;i++){
        if ((vetVendas[i].vendedor == codInteresse)){
            soma = soma + vetVendas[i].valor
            achou4 = true
        }
    }
    if (!achou4){
        alert(`Não foi encontrada venda para o vendedor ${codInteresse}`)
    }
    else {
        alert(`O total de vendas do vendedor ${codInteresse} é ${soma}`)
    }
}
function maiorvendameses(vetVendas, mesInteresse2){
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
}
function mostrarmaiorvendames(vetVendas){
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
            maiorVendames = vendasMes[i]
            maiorMes = i + 1
        }
    }
    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVendames}`)
}
function exe1obj(){
    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt("Informe \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Mostra venda a partir de vendedor e mês \n4. Mostra total vendas a partir de um vendedor \n5. Maior Venda de um mês \n6. Mês com maior venda \n7. Sair"))
        switch(opcao){
            case 1: cadastrarvendedores(vetVendedores)
                    break
            case 2: cadastravendas(vetVendedores, vetVendas)
                    break
            case 3: let codigoInteresse = prompt(`Informe código do vendedor`)
                    let mesInteresse = Number(prompt(`Informe mês de interesse`))
                    mostrarvendas(vetVendas, codigoInteresse, mesInteresse)
                    break
            case 4: let codInteresse = prompt(`Informe código do vendedor`)
                    mostrartotalvendas(vetVendas, codInteresse)
                    break                    
            case 5: let mesInteresse2 = Number(prompt(`Informe o mês de interesse`))
                    maiorvendameses(vetVendas, mesInteresse2)
                    break
            case 6: mostrarmaiorvendames(vetVendas)
                    break
            case 7: alert("Finalizando o programa")
                    break
            default: alert("Opção inválida")
        }
    }
    while (opcao != 7)
}
function mostrarpares(vetorx, vetorA){
    for(let i=0;i<30;i++){
        vetorx[i] = Number(prompt(`Digite o número ${i+1}:`))
    }

    for(let i=0;i<30;i++){
        if(vetorx[i] % 2 == 0){
            vetorA.push(vetorx[i])
        }
    } 
    alert(`Todos os números pares: ${vetorA}`)
}
function mostrarimp(vetorx, vetorB){
    for(let i=0;i<30;i++){
        vetorx[i] = Number(prompt(`Digite o número ${i+1}:`))
    }

    for(let i=0;i<30;i++){
        if(vetorx[i] % 2 != 0){
            vetorB.push(vetorx[i])
        }
    } 
    alert(`Todos os números impares: ${vetorB}`)
}
function exe2obj(){
    let vetorx = new Array(30)
    let vetorA = []
    let vetorB = []
    let opcao

    do{
        opcao = Number(prompt(`Informe \n1. Ver números pares\n2. Ver números impares\n3. Sair`))
        switch(opcao){
            case 1: mostrarpares(vetorx, vetorA)
                    break
            case 2: mostrarimp(vetorx, vetorB)
                    break
            case 3: alert(`Programa será finalizado`)
                    break
            default: alert("Opção inválida")
        }

    }
    while(opcao != 3)

}
function mostrarpares(vetorx, pares){
    for(let i=0;i<15;i++){
        vetorx[i] = Number(prompt(`Digite o número ${i+1}:`))
    }

    for(let i=0;i<15;i++){
        if(vetorx[i] % 2 == 0){
            pares.push(vetorx[i])
        }
    } 
    alert(`A quantidade de números pares são de ${pares.length}, cujo os números são: \n${pares}`)
}
function exe3obj(){
    let vetorx = new Array (15)
    let pares = []
    let opcao

    do{
        opcao = Number(prompt(`Informe \n1. Ver números pares e a quantidade. \n2. Sair.`))
        switch(opcao){
            case 1: mostrarpares(vetorx, pares)
                    break
            case 2: alert(`Programa será finalizado`)
                    break
            default: alert("Opção inválida")
        }

    }
    while(opcao != 2)

}
function mostrarsoma(vetorx){
    let soma = 0

    for(let i=0;i<5;i++){
        vetorx[i] = Number(prompt(`Digite o número ${i+1}:`))
    }
    for(let i=0;i<5;i++){
        if(vetorx[i]>0){
            soma = soma + vetorx[i]
        }

    alert(`A soma de todos os números digitados foi de: ${soma}`)
    }
}

function exe4obj(){
    let vetorx = new Array (5)
    let opcao

    do{
        opcao = Number(prompt(`Informe \n1. Soma dos números reais. \n2. Sair.`))
        switch(opcao){
            case 1: mostrarsoma(vetorx)
                    break
            case 2: alert(`Programa será finalizado`)
                    break
            default: alert("Opção inválida")
        }

    }
    while(opcao != 2)

}
function mostrarinterseccao(vet1, vet2, interseccao){
        // entrada de dados
        for(let i=0;i<10;i++){
            vet1[i] = Number(prompt(`Informe o número do primeiro vetor`))
        }
         // entrada de dados
         for(let i=0;i<10;i++){
            vet2[i] = Number(prompt(`Informe o número do segundo vetor`))
        }
    
        // intersecção
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                if (vet1[i] == vet2[j]){
                    interseccao.push(vet1[i])
                }
            } 
        }
        alert(`Os números com intersecção nos vetores são: ${interseccao}`)
    }
    
function exe7obj(){
    let vet1 = new Array(10)
    let vet2 = new Array(10)
    let interseccao = []
    let opcao
    do{
        opcao = Number(prompt(`Informe \n1. Mostrar interseccao. \n2. Sair.`))
        switch(opcao){
            case 1: mostrarinterseccao(vet1, vet2, interseccao)
                    break
            case 2: alert(`Programa será finalizado`)
                    break
            default: alert("Opção inválida")
        }

    }
    while(opcao != 2)

}
function mostrarpesquisa(vetor){
    for(let i=0;i<4;i++){
        let objeto = {
            sal: Number(prompt(`Informe o salário do ${i+1}° habitante`)),
            filho: Number(prompt(`Informe a quantidade de filho(s) ${i+1}° habitante`))            
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
    for(let i=0;i<4;i++){
        if((vetor[i].sal > cont1000) && (vetor[i].sal <= 350)){
            cont1000 = cont1000 + 1
        }
    }
    alert(`A média salarial dos habitantes é: ${soma/4}\nA média de filhos dos habitantes é: ${soma_filho/4}\nO maior salário entre todos os habitantes é: ${maiorsal}\nPercentual de habitantes com salario de ate R$350,00 reias: ${cont1000 / 4 * 100}% `)

}
function exe8obj(){
    let vetor = new Array(4)
    let opcao
    do{
        opcao = Number(prompt(`Informe \n1. Mostrar pesquisa. \n2. Sair.`))
        switch(opcao){
            case 1: mostrarpesquisa(vetor)
                    break
            case 2: alert(`Programa será finalizado`)
                    break
            default: alert("Opção inválida")
        }

    }
    while(opcao != 2)

}
function substituir(vetorA, negativo){
    for(let i=0;i<4;i++){
        let objeto = {
            number: Number(prompt(`Informe um número inteiro qualquer:`))

        }
        vetorA[i]= objeto
    }
    for(let i=0;i<4;i++){
        if(vetorA[i].number < 0){
            negativo.push(vetorA[i])
        }
    }
    alert(`Os números negativos informados foram ${negativo}`)
}
function exe4obj(){
    let negativo = []
    let vetorA = new Array(4)
    substituir(vetorA, negativo)

}

