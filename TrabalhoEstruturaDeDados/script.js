const readline = require('readline');

let vetor = [];
let vetorAprovados = [];

function cadastraralunos(vetalunos, nome, ra, idade, genero, media) {
  let objeto = {
    nome: nome.toUpperCase(),
    ra: Number(ra),
    idade: Number(idade),
    genero: genero.toUpperCase(),
    media: Number(media)
  };

  /////////// Validações de dados //////////////

  if (objeto.media >= 6 && objeto.media <= 10) {
    objeto.resultado = "Aprovado";
  } else if (objeto.media >= 0 && objeto.media < 6) {
    objeto.resultado = "Reprovado";
  }
  else{
    console.log("Por favor, informar nota de 0 a 10.")
    return;
  }
  if (objeto.genero !== "M" && objeto.genero !== "F") {
    console.log("Por favor, informar um gênero válido (M para masculino, F para feminino).");
    return;
  }
  if (String(objeto.nome).length <= 1){
    console.log("Por favor, informar nome com mais de 2 caracteres")
    return;
  }

  if (objeto.idade <= 0) {
    console.log("Por favor, informar idade acima de 0");
    return;
  }

  if (String(objeto.ra).length !== 13) {
    console.log("Por favor, informar um RA válido com 13 dígitos.");
    return;
  }

  if (objeto.resultado == "Aprovado") {
    vetorAprovados.push(objeto);
  }

  let achou = false;
  for (let i = 0; i < vetalunos.length; i++) {
    if (vetalunos[i].ra == objeto.ra) {
      achou = true;
    }
  }

  if (achou) {
    console.log("Já existe um aluno com este RA");
  } else {
    vetalunos.push(objeto);
    console.log("Aluno cadastrado com sucesso");
  }

}

///////////////////// Ordenar os dados //////////////////////////
function relatorio(vetalunos, fnComp) {
  for (let posSel = 0; posSel < vetalunos.length - 1; posSel++) {
    let posMenor = posSel + 1;

    for (let i = posMenor + 1; i < vetalunos.length; i++) {
      if (fnComp(vetalunos[posMenor], vetalunos[i])) {
        posMenor = i;
      }
    }

    if (fnComp(vetalunos[posSel], vetalunos[posMenor])) {
      [vetalunos[posSel], vetalunos[posMenor]] = [
        vetalunos[posMenor],
        vetalunos[posSel]
      ];
    }
  }

}

///////////// Menu de opções //////////////////////
async function tela() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    let opc;
  
    do {
      opc = Number(
        await new Promise((resolve) =>
          rl.question(
            "Digite uma das opções abaixo:\n1. Cadastrar mais alunos\n2. Relatório de Alunos em ordem crescente por Nome.\n3. Relatório de Alunos em ordem decrescente por RA.\n4. Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.\n5. Sair.\n",
            (input) => resolve(input)
          )
        )
      );
  
      switch (opc) {
        case 1:
          const nome = await new Promise((resolve) =>
            rl.question("Informe o nome do aluno(a): ", (input) =>
              resolve(input)
            )
          );
          const ra = Number(
            await new Promise((resolve) =>
              rl.question("Informe o RA do aluno(a): ", (input) =>
                resolve(input)
              )
            )
          );
          const idade = Number(
            await new Promise((resolve) =>
              rl.question("Informe a idade do aluno(a): ", (input) =>
                resolve(input)
              )
            )
          );
          const genero = await new Promise((resolve) =>
            rl.question(
              "Informe o gênero do aluno(a), M-Masculino ou F-Feminino: ",
              (input) => resolve(input)
            )
          );
          const media = Number(
            await new Promise((resolve) =>
              rl.question("Informe a média do aluno(a): ", (input) =>
                resolve(input)
              )
            )
          );
  
          cadastraralunos(vetor, nome, ra, idade, genero, media);
          console.log(vetor);
          break;
  
        case 2:
          relatorio(vetor, (elem1, elem2) => elem1.nome > elem2.nome);
          console.log("Listagem dos alunos:")
          console.log(vetor)
          break;
  
        case 3:
          relatorio(vetor, (elem1, elem2) => elem1.ra < elem2.ra)
          console.log("Listagem dos alunos:")
          console.log(vetor)
          break;
  
        case 4:
          relatorio(
            vetorAprovados,
            (elem1, elem2) => elem1.nome > elem2.nome
          );
          console.log("Listagem dos alunos:")
          console.log(vetorAprovados)
          break;
  
        case 5:   
          console.log("O programa será finalizado");
          break;
  
        default:
          console.log("Opção inválida");
      }
    } while (opc !== 5);
  
    rl.close();
  }
tela()  
