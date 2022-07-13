//indexOf ----- to see of a certain name is in the Array. 

//Linear Search

//the function accepts an arr and a value. loop through an array and check if the current array Element
//is equal to the value. if it is, return the indux at which the element us found. if the value is never found return -1

function linearSearch (arr, val) {
    for (let i=0; i < arr.length; i++){
        if(arr[i] === val) return i;
}
        return -1;
}


//binary search --- divide and conquer