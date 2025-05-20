let res = document.getElementById('res')
console.log(res)

function fazerSorteio(min, max) {
    return (Math.ceil(Math.random() * (max - min) + min))
}

function gerarNum() {
    let min = Number(document.getElementById('min').value)
    let max = Number(document.getElementById('max').value)
    let qtd = Number(document.getElementById('qtd').value)
    console.log(qtd)
    console.log(min)
    console.log(max)

    let valor = 0 //recebe valor do sorteio
    res.innerHTML = ``
    let soma = 0
    let media = 0.0

    if ((min < 0 || max > 100) && (qtd < 0 || qtd > 10)) {
        res.innerHTML = `Valores inválidos. Digite novamente!`
        res.innerHTML += `O menor valor permitido é 1 e o maior é 100!`
    } else {
        for (let i = 0; i < qtd; i++) {
            valor = fazerSorteio(min, max)
            soma += valor
            res.innerHTML += `O número gerado foi: ${valor}<br>`
        }
        media = soma / qtd
        res.innerHTML += `A soma dos números aleatórios foi: ${soma}<br>`
        res.innerHTML += `A media dos números aleatórios foi: ${media}<br>`

    }


}