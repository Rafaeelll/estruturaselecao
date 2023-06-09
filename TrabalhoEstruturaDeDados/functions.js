let vetor = []
let vetorAprovados = []
function cadastraralunos(vetalunos){
    let objeto = {}
        objeto.nome = prompt(`Informe o nome do aluno(a)`).toUpperCase(),
        objeto.ra = Number(prompt(`Informe o RA do aluno(a)`)),
        objeto.idade = Number(prompt(`Informe a idade do aluno(a)`)),
        objeto.sexo = prompt(`Informe o genêro do aluno(a), M-Masculino ou F-Feminino`).toUpperCase(),
        objeto.media = Number(prompt(`Informe a média do aluno(a)`));
        if (objeto.media >= 6){
            objeto.resultado = "Aprovado"
        }else{
            objeto.resultado = "Reprovado"}
        if (objeto.resultado == "Aprovado") {
            vetorAprovados.push(objeto)
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
        console.log(objeto)
    }
}

function relatorio(vetalunos, fnComp){

    for(let posSel = 0; posSel < vetalunos.length - 1; posSel++) {
        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for(let i = posMenor + 1; i < vetalunos.length; i++) {
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if(fnComp(vetalunos[posMenor],vetalunos[i])) {
                posMenor = i
            }
        }
        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        // if(vetor[posSel] > vetor[posMenor]) {
        if(fnComp(vetalunos[posSel],vetalunos[posMenor])) {
           [vetalunos[posSel], vetalunos[posMenor] ] = [ vetalunos[posMenor], vetalunos[posSel]]
        }
    }
    alert(`Lista de alunos:\n ${JSON.stringify(vetalunos,null,4)}`)
    alert("Ver Relatório completo no console, pressione Ctrl+Shift+I")

}

function tela(){
    let opc 
    do{
        opc = Number(prompt("Digite uma das opções abaixo:\n1. Cadastrar mais alunos\n2. Relatório de Alunos em ordem crescente por Nome.\n3. Relatório de Alunos em ordem decrescente por RA.\n4. Relatório de Alunos em ordem crescente por Nome,apenas dos Aprovados.\n 5. Sair."))
        switch(opc){
            case 1: cadastraralunos(vetor); console.log(vetor)
                    break
            case 2: relatorio(vetor, (elem1, elem2) => elem1.nome > elem2.nome);
                    break
            case 3: relatorio(vetor, (elem1, elem2) => elem1.ra < elem2.ra);
                    break
            case 4: relatorio(vetorAprovados, (elem1, elem2) => elem1.nome > elem2.nome);
                    break
            case 5: alert("O programa será finalizado")
                    break
            default: alert("Opção inválida")
        }

    }while (opc != 5)
}
