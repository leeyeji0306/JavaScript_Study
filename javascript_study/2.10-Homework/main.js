const calculator={
    add: function(a, b){
        return a+b
    },
    sub: function(a, b){
        return a-b
    },
    mul: function(a, b){
        return a*b
    },
    div: function(a, b){
        return a/b
    },
    powerof: function(a,b){
        return a ** b
    }
}

const plusResult=calculator.add(1,2)
const minusResult=calculator.sub(1,2)
const multiplicationResult=calculator.mul(3,2)
const divisionResult=calculator.div(1,2)
const powerResult=calculator.powerof(3,2)
