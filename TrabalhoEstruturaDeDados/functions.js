function cadastraralunos(vetalunos){
        let objeto = {
            nome: prompt("Informe o nome do aluno(a)"),
            ra: Number(prompt("Informe o RA do aluno(a)")),
            idade: Number(prompt("Informe a idade do aluno(a)")),
            sexo: prompt("Informe o genêro do aluno(a), M-Masculino ou F-Feminino"),
            media: Number(prompt("Informe a média do aluno(a)"))
        }
        for(let i = 0; i<vetalunos.length;i++){
            vetalunos.push(objeto)
            alert(`aluno cadastrado com sucesso`)
        }
}
function relatorioscrescente_nome(vetalunos){
        let pos_maior = ""
        let pos_menor = ""

        for(let i=0; i < vetalunos.length; i++){
            if(vetalunos[i].nome > vetalunos[pos_maior].nome){
                pos_maior = i
            }else if (vetalunos[i].nome < vetalunos[pos_menor].nome){
                pos_menor = i
            }
        }
        alert(`Lista de alunos:\n${vetalunos[pos_menor]} \n${vetalunos[pos_maior]}`)
}
function relatorio(){
    let opc 
    let vetalunos = []

    do{
        opc = Number(prompt("Digite uma das opções abaixo:\n1. Cadastrar alunos\n2. Relatório de Alunos em ordem crescente por Nome.\n3. Relatório de Alunos em ordem decrescente por RA.\n4. Relatório de Alunos em ordem crescente por Nome,apenas dos Aprovados.\n 5. Sair."))
        switch(opc){
            case 1: cadastraralunos(vetalunos)
                    break
            case 2: relatorioscrescente_nome(vetalunos)
                    break
            case 3: relatoriosdecrescente_ra(vetalunos, selectsort)
                    break
            case 4: relatorioscrescentenome_apr(vetalunos, bubblesortapr)
                    break
            case 5: alert("O programa será finalizado")
                    break
            default: alert("Opção inválida")
        }

    }while (opc != 5)
}