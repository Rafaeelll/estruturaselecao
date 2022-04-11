function cadastraralunos(vetalunos){
    let objeto = {
        nome: prompt(`Informe o nome do aluno(a)`).toUpperCase(),
        ra: Number(prompt(`Informe o RA do aluno(a)`)),
        idade: Number(prompt(`Informe a idade do aluno(a)`)),
        sexo: prompt(`Informe o genêro do aluno(a), M-Masculino ou F-Feminino`).toUpperCase(),
        media: Number(prompt(`Informe a média do aluno(a)`))
    }

    let achou = false // se não encontrar, recebe false, caso encontre, recebe true
        // vetalunos.length -> qtde de elementos no vetor
    for(let i=0;i<vetalunos.length;i++){
        if (vetalunos[i].ra == objeto.ra){
            achou = true // encontramos um aluno com este RA
        }
    }
    if (achou) {
        alert(`Já existe um aluno com este RA`)
    }
    else {
        vetalunos.push(objeto) // adiciona o aluno no vetor
        alert(`Aluno cadastrado com sucesso`)
    }
}

function relatorioscrescente_nome(vetalunos, vetOrd){

    for(let posSel = 0; posSel < vetalunos.length - 1; posSel++) {
        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for(let i = posMenor + 1; i < vetalunos.length; i++) {
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if(vetalunos[posMenor].nome > vetalunos[i].nome) posMenor = i
        }

        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        // if(vetor[posSel] > vetor[posMenor]) {
        if(vetalunos[posSel].nome > vetalunos[posMenor].nome) {
            let vetor = [vetalunos[posSel].nome, vetalunos[posMenor].nome ] = [ vetalunos[posMenor].nome, vetalunos[posSel].nome ]
            vetOrd.push(vetor)

        }

    }
    alert(`Lista de alunos:\n ${vetOrd}`)

}
function relatoriosdecrescente_ra(vetalunos, vetOrd2){
    for(let posSel = 0; posSel < vetalunos.length - 1; posSel++) {
        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for(let i = posMenor + 1; i < vetalunos.length; i++) {
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if(vetalunos[posMenor].ra < vetalunos[i].ra) posMenor = i
        }

        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        // if(vetor[posSel] > vetor[posMenor]) {
        if(vetalunos[posSel].ra < vetalunos[posMenor].ra) {
            let vetor2 = [ vetalunos[posSel].ra, vetalunos[posMenor].ra ] = [ vetalunos[posMenor].ra, vetalunos[posSel].ra ]
            vetOrd2.push(vetor2)

        }

    }
    alert(`Lista de RA dos alunos:\n ${vetOrd2}`)

}
function relatorioscrescentenome_apr(vetalunos, vetOrd3){
    for(let posSel = 0; posSel < vetalunos.length - 1; posSel++) {
        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for(let i = posMenor + 1; i < vetalunos.length; i++) {
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if((vetalunos[posMenor].nome > vetalunos[i].nome) &&(vetalunos[i].media >= 6)) posMenor = i
        }

        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        // if(vetor[posSel] > vetor[posMenor]) {
        if((vetalunos[posSel].nome > vetalunos[posMenor].nome) &&(vetalunos[posSel].media >= 6) &&(vetalunos[posMenor].media >= 6)) {
            let vetor3 = [ vetalunos[posSel].nome, vetalunos[posMenor].nome ] = [ vetalunos[posMenor].nome, vetalunos[posSel].nome ]
            vetOrd3.push(vetor3)

        }

    }
    alert(`Alunos aprovados:\n ${vetOrd3}`)

}

function relatorio(){
    let opc 
    let vetalunos = []
    let vetOrd = []
    let vetOrd2 = []
    let vetOrd3 = []
    do{
        opc = Number(prompt("Digite uma das opções abaixo:\n1. Cadastrar mais alunos\n2. Relatório de Alunos em ordem crescente por Nome.\n3. Relatório de Alunos em ordem decrescente por RA.\n4. Relatório de Alunos em ordem crescente por Nome,apenas dos Aprovados.\n 5. Sair."))
        switch(opc){
            case 1: cadastraralunos(vetalunos)
                    break
            case 2: relatorioscrescente_nome(vetalunos, vetOrd)
                    break
            case 3: relatoriosdecrescente_ra(vetalunos, vetOrd2)
                    break
            case 4: relatorioscrescentenome_apr(vetalunos, vetOrd3)
                    break
            case 5: alert("O programa será finalizado")
                    break
            default: alert("Opção inválida")
        }

    }while (opc != 5)
}
