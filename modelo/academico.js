function exe1obj(){
    let vetor1 = []
    let vetor2 = []
    let opcao

    do {
        opcao = Number(prompt(`informe uma das opções abaixo: \n1- Cadastrar uma pessoa\n2- Cadastrar imóvel \n3- Calcular o valor total em imóvel de uma pessoa \n4- Imóvel mais caro \n5- sair `))
        switch(opcao){
            case 1: let objeto1 = {
                rg: Number(prompt(`Informe o RG: `)),
                cpf: Number(prompt(`Informe o CPF: `)),
                nome: String(prompt(`Informe o nome: `))

            }
            let achou1 = false
                for(let i=0;i<vetor1.length;i++){
                    if((vetor1[i].rg  == objeto1.rg) && (vetor1[i].cpf == objeto1.cpf) && (vetor1[i].nome == objeto1.nome)){
                        achou1 = true
                    }
                }
                if(achou1){
                    alert(`Digite outros dados. Essa pessoa já esta cadastrada!`)

                }
                else {
                    vetor1.push(objeto1)
                    alert(`Cliente cadastrado com sucesso!`)
                }
                    break
            case 2: let objeto2 = {
                codigo: Number(prompt(`Informe o código do produto: `)),
                endereco: prompt(`informe o endereço de entrega: `),
                tamanho: Number(prompt(`Informe o tamanho do imóvel: `)),
                valor: Number(prompt(`Informe o valor do imóvel`)), 
                rg: Number(prompt(`Informe o RG do titular da compra: `))
            }
            let achou22 = false
                for(let i=0;i<vetor1.length;i++){
                    if(vetor1[i].rg == objeto2.rg){
                        achou22 = true

                    }
                }
                if(!achou22){
                    alert(`Essa pessoa não esta cadastrada!`)
                }
                else{
                    vetor2.push(objeto2)
                        alert(`Venda cadastrada com sucesso.`)
                }
                    break
            case 3: let rginteresse = prompt(`Informe o RG do cliente:`)
                    let nomeinteresse = prompt(`Informe o nome do cliente:`)
                    let soma = 0
                    let achou3 = false
                    for(let i=0;i<vetor2.length;i++){
                        if((vetor2[i].rg == rginteresse) &&(vetor1[i].nome == nomeinteresse)){
                            soma = soma + vetor2[i].valor
                            alert(`O valor total em imóvel do cliente  RG: ${rginteresse} e nome ${nomeinteresse} é de R$${soma} reais.`)
                            achou3 = true
                        }

                    }
                    if (!achou3){
                        alert(`Não foi encontrada venda para o cliente com RG ${rginteresse}`)

                    }
                    break
            case 4: 
                    let cpf_maior = 0
                    let maior = 0
                    let achou5 = false
                    for(let i = 0; i < vetor2.length; i++){
                        if(vetor1[i].cpf != achou5){
                            achou5 = true
                        }
                    if (achou5){
                        if (vetor2[i].valor > maior){
                            maior = vetor2[i].valor
                            cpf_maior = vetor1[i].cpf
                            alert(`A maior venda foi de ${maior} no CPF ${cpf_maior}`)
                        }
                    }

                    else{
                        alert(`Não existe venda no CPF informado`)
                       
                        }
                    }
                    break
            case 5: alert(`O programa será finalizado`)
                    break
            default: alert(`Opção inválida`)

        }
    } 
    while (opcao != 5)
}

function exe2matriz(){
    let matriz = []
    let vetor = []
    let opcao

    do{
        opcao = Number(prompt(`Informe \n1. Cadastrar carros. \n2. Mostrar media \n3. Menor avaliação \n4. Menor média \n5- Sair`))
        switch(opcao){
            case 1: entradadados(matriz, vetor)
                    break
            case 2: let marcaInteresse = prompt(`Informe a marca de interesse: `)
                    let modeloInteresse = Number(prompt(`Informe o modelo de interesse: `))
                    calcularmediacarros(matriz, vetor, marcaInteresse, modeloInteresse)
                    break
                    
            case 3: mostarmenornota(matriz, vetor, modelo)
                    break
            case 4: mostarmenormedia(matriz, vetor)
                    break
            case 5: alert(`Programa será finalizado`)
                    break
            default: alert(`Opção inválida`)
        }

    }
    while(opcao != 5)

}
function entradadados(matriz, vetor){
    for(let i=0;i<4;i++){
        let objeto = {
            ano: String(prompt(`Informe o codigo do carro ${i+1}: `)),
            marca: String(prompt(`Informe a marca do carro ${i+1}: `)),
            modelo: String(prompt(`Informe o modelo do carro ${i+1}: `)),
            valor: Number(prompt(`Informe o valor do carro ${i+1}: `)),
            

        }
        vetor[i] = objeto
        matriz[i] = [] 
        for(let j=0;j<5;j++){
            matriz[i][j] = Number(prompt(`Informe a nota do carro:`))

        }
    }
}
function calcularmediacarros(matriz, vetor, marcaInteresse, modeloInteresse){
    let soma = 0
    let achou = false
    for(let i=0; i<4;i++){
        for(let j=0;j<5;j++){
            soma = soma + matriz[i][j]
        if ((vetor[i].marca == marcaInteresse) && (vetor[i].modelo == modeloInteresse)){
            alert(`A media do carro da marca ${marcaInteresse} e modelo ${modeloInteresse} é de ${soma/4}`)
            achou = true
        }
    }
}
    if (!achou){
        alert(`Não foi encontrada marca ${marcaInteresse} e modelo ${modeloInteresse}`)
    }

}
function mostrarmenornota(matriz, vetor, modelo){
    let menor = 10000
    for(let i=0; i<4;i++){

        


    }
}