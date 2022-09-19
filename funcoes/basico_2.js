function soma(a) {
    return function(b){
        return a + b
    }
}


resultadoDaSoma = soma(1)
console.log(resultadoDaSoma(2))



const teste = function soma(a) {
    return function(b){
        return a + b
    }
}

console.log(teste(1)(3))

