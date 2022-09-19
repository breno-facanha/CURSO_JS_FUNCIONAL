function somar(a){
    return function(b){
        return function (c){
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))


function calcular(a){
    return function(b){
        return function(fn){
            return fn(a, b)
        }
    }
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

const r1 = calcular(1)(2)(subtrair)
console.log(r1)

const r2 = calcular(1)(2)(multiplicar)
console.log(r2)