// recursion is a function that calls itself, in constrast to functions call other functions
// alternative to iteration
// any time a function is invoked it is placed(pushed) on top of the call stack ---- stack of papers

// working:
// invoke the same function with a different input until you reach your base case
// -base case ---> where the recursion stops
// -Different Input ( each time we wanna call the function with a duffernet piece of data)

function countDown (num) {
    if (num<=0) {
        console.log("all done")        // base case
        return;  //return has to be here in order for it to stop
    }
    console.log(num);
    num--;
    countDown(num);    // everytime function is taking a different input
}

countDown(3)

// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// "all done"

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