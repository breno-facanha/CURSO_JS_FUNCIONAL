// function declaration 
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

// function expression
const boaTarde = function () {
    console.log('Boa tarde!')
}
boaTarde()

function somar(a, b) {
    return a + b
}


//passando 2 parametros conforme a função "normal"
let resultado = somar(3, 4)
console.log(resultado)

//passando mais de 2 parametros nesse caso 5 
//a função só pegara os 2 primeiros parametros e descartar os demais
resultado = somar(3, 5, 6, 7, 8)
console.log(resultado)

//passando somente um parametro o resultado será NaN
resultado = somar(2)
console.log(resultado)