
//Kata 1
function add(x, y){
    return x + y
}
console.log(add(4, 6))

//Kata 2
function multiply(x, y){
    let counter2 = 0
    for (let counter = 0; counter < y; counter += 1){
      counter2 = add(counter2, x)
       
       }
       return counter2
      
}
console.log(multiply(4, 6))

//Kata 3
function power(x, n){
    let result = multiply(x, x)
    
    for (let counter = 2; counter < n; counter += 1){
        
        result = multiply(result, x)
}
        return result
}
console.log(power(5, 4))

//Kata 4
function factorial(x){
    let negative = add(x, -1)
    
    let result = 0
    for (let counter = x; counter > 0; counter -= 1){
        result = multiply(x, negative)
        

    
    }
        return result
}
        console.log(factorial(9))
