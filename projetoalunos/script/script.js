let y = 1;
let qtdAluno = 0
let row
let x = 5
let nomeAluno = "";
let nomes = [];
let ra_lista = [];
let mediaAluno = 0
let mediaList = []

var table = document.getElementById("table");

let cellsNumber = 7;

// Função para verificar as médias
function verificaMedias(){
    nomes = []
    mediaGeral = 0
    for(let y = 1; y <= qtdAluno; y = y + 1){
        let resultado = 0
        for(let x = 1; x <= (cellsNumber - 3); x = x + 1){
            let nota = parseFloat(document.getElementById(`nota${y}${x}`).value)
            resultado = nota + resultado
        }
        let media = resultado/(cellsNumber-3)
        document.getElementById(`media${y}`).innerText = media
        if(media >= 6){
            document.getElementById(`situacao${y}`).innerText = "Aprovado"
            document.getElementById(`situacao${y}`).style.color = "Green"
        }
        if (media < 6){
            document.getElementById(`situacao${y}`).innerText = "Reprovado"
            document.getElementById(`situacao${y}`).style.color = "red"
        }
        nomeAluno = document.getElementById(`aluno${y}`).value;
        mediaAluno = document.getElementById(`media${y}`).value;

        nomes.push(nomeAluno);
        mediaList.push(mediaAluno);
    }
}

// Função para adicionar Aluno
function adicionar_aluno(){ 
    if(qtdAluno <= 50){
    var table = document.getElementById("table");
    let x = 1;
    var row = table.insertRow(1);
    row.insertCell(0).innerHTML = `<input id = "aluno${y}" type="text" class = "form-control input" placeholder="Nome"> `;
    for(x; x < cellsNumber - 2; x++){
        row.insertCell(x).innerHTML  = `<input id = "nota${y}${x}" type="text" class = "form-control input" placeholder="Nota ${x}"> `;
    }
    row.insertCell(x).innerHTML = `<output id = "media${y}"></output> `;
    row.insertCell(x+1).innerHTML = `<output id = "situacao${y}"></output> `;
    qtdAluno = qtdAluno + 1
    y = y + 1
}
    else{
        alert("Quantidade máxima de alunos atingida")
    }
}
function ordem_alfabetica() {
    let lista = [];
    for (let cont = 0; cont < qtdAluno; cont += 1) {
        //Cria a pessoa 1
        let pessoa = {
            nome: nomes[cont],
        };

        lista.push(pessoa);
    }
    lista.sort(function(a, b) {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true;
        }
    });

    imprimirArray1('ordem_alfabetica', lista);
}
function ordem_alfabetica_aprovado() {
    let lista = [];
    for (let cont = 0; cont < qtdAluno; cont += 1) {
        //Cria a pessoa 1
        let pessoa = {
            nome: nomes[cont],
            media: mediaList[cont]
        };

        lista.push(pessoa);
    }
    lista.sort(function(a, b) {
        if ((a.nome < b.nome) && (a.media >=6) && (b.media>=6)) {
            return -1;
        } else {
            return true;
        }
    });

    imprimirArray1('ordem_alfabetica', lista);
}



// Função para ordem decrescente
function ordemDecrescente(){
    //Cria o array de lista
    let lista = [];
    for (let cont = 0; cont < qtdAluno; cont += 1){
       //Cria a pessoa 1
        let pessoa = {
        nome: nomes[cont],
        ra: ra_lista[cont]
        };
        
        lista.push(pessoa);
    }
    //Ordena as lista de acordo com o ra da pessoa.
    lista.sort((a, b) => b.ra - a.ra);
    //Imprime o array ordenado por ra
    imprimirArray('spanOrdenadaPorMedia', lista);
    }

// Função para imprimir array
function imprimirArray(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        span.innerHTML += '<b> Aluno: </b>' + array[i].nome + '<br><b> RA: </b>' + array[i].ra + '<br/><br>';
    }
}

function imprimirArray1(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        span.innerHTML += '<b> Aluno: </b>' + array[i].nome + '<br><b> Média: </b>' + array[i].media + '<br/><br> Aprovado </b';
    }
}