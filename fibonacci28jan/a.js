var factorial = function factorials(fact){
    if(fact===1){
        return 1;
    }
    return fact*factorial(fact-1);
}

console.log(factorial(10));