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

function sumRange (num) {
    if (num === 1) return 1;
    return num + sumRange (num - 1);
}

sumRange(3)

// return 3 + sumRange(2)
//                         return 2 + sumRange (1)
//                                                 return 1
// output: 6

function power (num, expo) {
    if (expo ===0) return 1;
    return num * power(num, expo-1);
}

console.log(power (2,0))


// FACTORIAL:
// 4!
// 4*3*2*1

// factorial of 4 is equal to 4 times the factorial of 3 similarly fcatorial of 2 is equal to 2 times the factorial of 1 --->
// num * factorial of num -1

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

// HELPER FUNCTIONS:  -------> outer function thats is not recursive while the inner function that is recursive
// collecting odds values recursively:

function collectOddValues(arr){
    let result  = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
    
}


//solving the same problem with pure recursion

function collectOddValues(arr) {
    let newArr =[];

    if (arr.length === 0) {                // base case, we check if the arr is empty or not
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);              // if the first number on the array is odd, we push that number onto the new array --- our newArr looks like [1]
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));          // we assign the newArr   ==== [1].concat(collectOddValues([2,3,4,5]))
    return newArr
}

collectOddValues([1,2,3,4,5])

//arrays ---> copies ---> use methods like slice, the spred opertor, concat 
//strings are immutable so we will need to use methods like slice, substr, to make copies of the strings
// objects --> copies ---> object.assign, apread operator