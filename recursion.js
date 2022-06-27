function power (num, expo) {
    if (expo ===0) return 1;
    return num * power(num, expo-1);
}

console.log(power (2,0))


function factorial (num){
    if (num === 0) return 1;
    return num * factorial(num -1) 
}

function productOfArray (arr) {
    if (arr.lenght ===0) return 1
    return arr[0]* productOfArray(arr.slice(1))
}

function recursiveRange(num) {
    if (num ===0) return 0;
    return num + recursiveRange(num-1)
}

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}