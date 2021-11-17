function principal(){
    let matriz = []
    let vetor = []
    entradadados(vetor, matriz)
    calcularmediaalunos(vetor, matriz)
    calculamediabimestral(matriz)
}
function entradadados(vetor, matriz){
    for(let i=0;i<4;i++){
        let objeto = {
            ra: Number(prompt(`Informe o RA do aluno: `)),
            nome: String(prompt(`Informe o nome do aluno: `)),
            media: 0
        }
        vetor[i] = objeto
        matriz[i] = [] //declarar vetor dentro da matriz
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe a nota do bimestre ${j+1}:`))
        }
    }
}
function calcularmediaalunos(vetor, matriz){
    let soma = 0
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(matriz[i][j] > 0){
                soma = soma + matriz[i][j]
            }
        }
        alert(`A média do aluno ${vetor[i].nome} é ${soma/4}`)
        vetor[i].media = soma / 4
    }
}
function calculamediabimestral(matriz){
    for(let j=0;j<4;j++){
        let soma =0
        for(let i=0;i<4;i++){
            soma = soma + matriz[i][j]
        }
        alert(`A média do bimestre ${j+1} é ${soma/4}`)
    }
}

function principalcarros(){
    let matriz = []
    let vetor = []
    entradadados(matriz, vetor)
    calcularTotalVendas(matriz, vetor)
}
function entradadados(matriz, vetor){
    for(let i=0;i<4;i++){
        let objeto = {
            codigo: String(prompt(`Informe o codigo do carro: `)),
            marca: String(prompt(`Informe a marca do carro: `)),
            modelo: String(prompt(`Informe o modelo do carro: `)),
            totvendas: 0

        }
        vetor[i] = objeto
        matriz[i] = [] //declarar vetor dentro da matriz
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe a quantidade de vendas no trimestre ${j+1}:`))

        }

    }
}
function calcularTotalVendas(matriz, vetor){
    for(let i=0;i<4;i++){
        let soma = 0
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j]

        }
        alert(`O total de vendas do carro ${vetor[i].codigo} é ${soma}`)
        vetor[i].totVendas = soma
    }
}