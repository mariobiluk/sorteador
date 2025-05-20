let res = document.getElementById('res')
console.log(res)

function fazerSorteio(min, max) {
    return (Math.ceil(Math.random() * (max - min) + min))
}

function gerarNum() {
    let num = Number(document.getElementById('num').value)
    console.log(num)

    let valor = 0
    res.innerHTML = ``

    for (let i = 0; i < num; i++) {
        valor = fazerSorteio(1, 10)
        res.innerHTML += `O número gerado foi: ${valor}<br>`
    }
}