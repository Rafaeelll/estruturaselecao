function exe0(){
    let contador = 1
    let soma = 0
    let preco 

while(contador<=10){
    preco = Number(prompt(`Informe o preço do produto ${contador}:`))
    soma = soma + preco
    contador++


}
alert(`A média de preço dos produto é ${soma/10}`)

}
function exe3(){
    let contador = 1
    let soma = 0
    let soma1 = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    let idade

while(contador<=8){
    idade = Number(prompt(`Informe a idade ${contador}:`))
    if (idade <=15){
        soma++
    }
    else if (idade <=30){
        soma1++
    }
    else if (idade <=45){
        soma2++
    }
    else if (idade <=60){
        soma3++
    }
    else {
        soma4++
    }
    contador++
}
alert(`Faixa 1: ${soma} Faixa 2: ${soma1} Faixa 3: ${soma2} Faixa 4: ${soma3} Faixa 5: ${soma4}`) 
alert(`Percentual Faixa 1: ${soma/8*100} Faixa 5: ${soma4/8*100}`)

}
function exe6(){
  contador = 1
  let valor
  soma_v = 0
  soma_p = 0
  let codigo

  while(contador<=15){
    valor = Number(prompt(`Informe o valor total do produto ${contador}:`))
    //converter para maiusculo
    codigo = prompt("Informe V para compra à vista e P para compra à prazo").toUpperCase()
    switch(codigo){
            case 'V': soma_v += valor
                        break
            case 'P': soma_p += valor
                        break
            default: alert(`Forma de pagamento inválido`)
        }

    contador++
  }
  alert(`Total à vista ${soma_v.toFixed(2)} Total à prazo ${soma_p.toFixed(2)} Total geral ${(soma_v+soma_p).toFixed(2)}`)
  alert(`Primeira parcela do valor total à prazo ${(soma_p/3).toFixed(2)}`)

}
function exe23(){
    let opcao
    do{
        opcao = Number(prompt("Digite \n1.Novo salário \n2.férias \n3.Décimo terceiro \n4.Sair"))
        switch(opcao){
            case 1: let salario = Number(prompt("Informe o salário"))
                    let novosalario
                    if (salario<210){
                        novosalario = salario + (15 * salario) /100
                        
                    }
                    else if (salario <= 600) {
                        novosalario = salario + (10 * salario) /100
                    }
                    else{
                        novosalario = salario + (5 * salario) /100

                    }
                    alert(`O novo salario é de ${novosalario}`)
                    break
            case 2: salario = Number(prompt("Informe o salário"))
                    alert(`As férias serão ${salario + salario/3}`)
                    break
            case 3: salario = Number(prompt("Informe o salário"))
                    let meses = Number(prompt(`Informe quantos meses foram trabalhados`))
                        alert(`Décimo terceiro ${(salario * meses) / 12}`)
                    break
            case 4: alert(`O programa será encerrado`)
                    break
            default: alert("Opção inválida")

        }

    }
    while (opcao !=4)
}