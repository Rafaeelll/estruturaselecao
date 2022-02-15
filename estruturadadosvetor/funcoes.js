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
    let vetcod = []
    let vetestoque = []
    for(let i =0; i<10;i++){
        vetcod[i] = Number(prompt(`Digite o codigo do produto ${i+1}:`))
        vetestoque[i] = Number(prompt(`Digite o estoque do produto ${i+1}:`))

    }
    let cliente = Number(prompt(`Informe o codigo do cliente: `))
    do{
        let codcompra = Number(prompt(`Informe o codigo do produto para compra: `))
        //verifica se o codigo
        let achou = false //ele é falso quando não encontrou o produto, e true qundo encontrou
        for(let i = 0; i<10;i++){
            if (codcompra == vetcod[i]){
                achou = true
            }
            //atualiza estoque 
            let quantcompra = Number(prompt(`Informe a quantidade da compra: `))
            if (vetestoque[i] - quantcompra >= 0){
                vetestoque[i] = vetestoque[i] - quantcompra
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
    alert(`Estoque atualizado ${vetestoque}`)
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
        vetorlog[i] = Number(prompt(`Informe o número do aluno ${i+1} que faz curso de lógica: `))
    }
    for(let i=0;i<10;i++){
        vetorling[i] = Number(prompt(`Informe o número do aluno ${i+1} que faz curso de linguagem de progamação: `))
    }
    // intersecção
    for(let i=0; i<15; i++){ // percorre o vetor de lógica
        for(let j = 0; j<10; j++){ // percorre o vetor de linguagem de programação
            if (vetorlog[i] == vetorling[j]){
                interseccao.push(vetorlog[i])
            }

        }
    }
    
    alert(`Alunos que fazem ambas as disciplinas: ${interseccao}`)

}
function exe5modo2(){

    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    // entrada de dados
    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     // entrada de dados
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    // intersecção
    for(let i=0;i<15;i++){ // percorre o vetor de lógica
        for(let j=0;j<10;j++){// percorre o vetor de linguagem de programação
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}
function exe6(){
    let vendedor = []
    let vtotal_vendas = []
    let comissao = []
    for(let i =0; i<10; i++){
        vendedor[i] = prompt(`Digite o nome do vendedor ${i+1}: `)
        vtotal_vendas[i] = Number(prompt(`Informe o total de vendas do vendedor ${i+1}: `))
        comissao[i] = Number(prompt(`Informe o percentual de comissão do vendedor ${i+1}: `))

    }
    let totalvendas = 0
    let valorreceber = 0
    let maior = 0
    let menor = 10000
    let nomemaior = ""
    let nomemenor = ""
    for(let i=0; i<10; i++){
        valorreceber = (vtotal_vendas[i] * comissao[i]) / 100
        if (valorreceber > maior){
            maior = valorreceber
            nomemaior = vendedor[i]
        }
        if (valorreceber < menor){
            menor = valorreceber
            nomemenor = vendedor[i]
        }
        alert(`O nome do vendedor ${i+1} é ${vendedor[i]} e o valor de comissão a receber é ${valorreceber} `)
        alert(`O valor total de vendas é ${totalvendas + vtotal_vendas[i]}`)

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
    let aluno = new Array(7)
    let mediafinal = new Array (7)
    // assume que o primeiro aluno teve a maior média
    let maiormedia = mediafinal[0]
    let nome_maiorM = aluno[0]


    for(let i=0;i<7;i++){
        aluno[i] = prompt(`Digite o nome do aluno(a) ${i+1}:`)
        mediafinal[i] = Number(prompt(`Digite a média do aluno(a) ${i+1}: `))

    }
    for(let i=0;i<7;i++){
        if(mediafinal[i] > maiormedia){
            maiormedia = mediafinal[i]
            nome_maiorM = aluno[i]

        }
        alert(`O aluno(a) ${nome_maiorM} teve a maior média final de ${maiormedia} `)

        if(mediafinal[i] < 7){
            alert(`Aluno(a) ${aluno[i]} teve média final de ${mediafinal[i]}\nPara ser aprovado, o aluno(a) precisa tirar ${10-mediafinal[i]}`)
        }

    }
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
function exe10(){
    let vetor1 = Array(10)
    let vetor2 = Array(5)
    let par = []
    let somavet2 = []
    let somapares = 0
    let resultante1 = 0
    let resultante2 = []

    for(let i = 0; i < 10; i++){
        vetor1[i] = Number(prompt(`Digite o número ${i+1}: `))

    }
    for(let i = 0; i<5;i++){
        vetor2[i] = Number(prompt(`Digite outro número ${i+1}: `))

    }
    for(let i = 0; i < 10; i++){
        if(vetor1[i] % 2 == 0){
            par.push(vetor1[i])
            somapares = somapares + par[i]

        }

    }
    for(let i = 0; i<5;i++){
        if(vetor2[i] > 0){
            somavet2.push(vetor2[i])
            resultante1 = somapares + somavet2[i]

        }

    }
    for(let i = 0; i<10;i++){
        if(vetor1[i] % vetor2[i] == 0 ){
            resultante2.push(vetor1[i])

        }
    }
    alert(`O Valor resultante do primeiro vetor foi de ${resultante1}\nO Resultante do vetor 2 foi de: ${resultante2.length}`)

}   
function exe11(){
    let vetor1 = new Array(10)
    let par = []
    let imp = []

    for(let i=0;i<10;i++){
        vetor1[i] = Number(prompt(`Digite o número ${i+1}:`))
    }
    for(let i=0;i<10;i++){
        if(vetor1[i] % 2 == 0){
            par.push(vetor1[i])
        }
        else{
            imp.push(vetor1[i])
        }
    }
    alert(`O resultante do primeiro vetor é ${par}.\nO resultante do segundo vetor é ${imp}.`)
}
function exe13(){
    let vetornome = new Array(8)
    let vetornota = new Array(8)
    for(let i=0;i<4;i++){
        vetornome[i] = prompt(`Digite o nome do aluno(a) ${i+1}:`)
        vetornota[i] = Number(prompt(`Digite a nota do alunol(a) ${i+1}:`))
    }
    let soma = 0
    for(let i=0;i<8;i++){
        if(vetornota[i] > 0){
            soma = soma + vetornota[i]
            alert(`Relatorio de notas:\n${vetornome[i]} = ${vetornota[i]}`)
        }
    }
    alert(`A media da classe = ${soma/4}`)
}
function exe14(){
    vetornota1 = new Array(6)
    vetornota2 = new Array(6)
    vetoraluno = new Array (6)

    for(let i=0;i<6;i++){
        vetoraluno[i] = String(prompt(`Informe o nome do aluno ${i+1}:`))
        vetornota1[i] = Number(prompt(`Informe a nota 1 do aluno ${i+1}:`))
        vetornota2[i] = Number(prompt(`Informe a nota 2 do aluno ${i+1}:`))
    }
    let soma_nota = 0
    let media_aluno = 0
    let cont_aprovado = 0
    let cont_reprovado = 0
    let porc_aprovado = 0
    let porc_reprovado = 0
    let media_classe = 0
    let somatotal = 0
    let somamedia = 0
    
    for(let i=0;i<6;i++){
        if((vetornota1[i]>0) && (vetornota2[i]>0)){
            soma_nota = vetornota1[i] + vetornota2[i]
            media_aluno = soma_nota/2
            alert(`O aluno ${vetoraluno[i]} teve uma média de ${media_aluno}`)

        }
        if(media_aluno >=6){
            cont_aprovado++
            porc_aprovado = cont_aprovado / 6 * 100
            alert(`O aluno ${vetoraluno[i]} Teve media >=6 e esta aprovado`)

        }
        else{
            cont_reprovado++
            porc_reprovado = cont_reprovado / 6 * 100
            alert(`O aluno ${vetoraluno[i]} Teve media <6 e esta reprovado`)
        }
    }
    for(let i=0;i<6;i++){
        if((vetornota1[i]>0) && (vetornota2[i]>0)){
            somamedia = vetornota1[i] + vetornota2[i]
            somatotal = somamedia/2
            media_classe = media_classe + somatotal / 6
        }

    }
    alert(`A media de nota da classe é = ${media_classe.toFixed(2)}\nA porcentagem de alunos reprovados é = ${porc_reprovado.toFixed(2)}%\nA porcentagem de alunos aprovados é = ${porc_aprovado.toFixed(2)}%`)
}
function exe16(){
    vetorprod =new Array(5)
    vetorpreco = new Array(5)

    for(let i=0;i<5;i++){
        vetorprod[i] = String(prompt(`Digite o nome do produto ${i+1}:`))
        vetorpreco[i] = Number(prompt(`Digite o valor do produto ${i+1}: `))

    }
    let cont50 = 0
    let soma100 = 0
    let media100 = 0
    for(let i=0;i<5;i++){
        if((vetorpreco[i] > 0)&&(vetorpreco[i] < 50)){
            cont50++
        }
        if((vetorpreco[i] >= 50)&&(vetorpreco[i] < 100)){
            alert(`Os produtos ${vetorprod[i]} tem preços entre R$50,00 e R$100,00 `)
        }
        if(vetorpreco[i]>100){
            soma100++
            media100 = media100 + vetorpreco[i] / soma100
        }
    }
    alert(`A quantidade de produtos que tem valor inferior é = ${cont50}\n A media de preço dos produtos num valor acima de R$100,00 é = ${media100}`)

}