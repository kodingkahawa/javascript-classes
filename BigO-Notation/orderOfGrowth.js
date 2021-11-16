/*

ORDER OF GROWTH (GOOD - BAD)

O (1) = Constant
O (log n) = Logarithmic
O (n) = Linear
O (n Log n) = Linearithmic
O (n^2) = Quadratic
O (n^3) = Cubic
O (2^n) = Exponential
O (n!) = Factorial

*/

/* constant */

function balance(){
    var myAccount = 3000;
    var shoppingCart = 2000;

    return console.log("Balance:",myAccount - shoppingCart);
}


/* Linear */

let arr1 = [2,6,8,9,23,54]

function linearFun() {
    for(let i = 0; i < arr1.length; i++) {
        console.log("Element being * 1000", 100 * 1000 )
    }
}

/* O(log n) = Logarithmic */

// Binary Search Functions

let arr2 = [1,2,3,4,5,6,7,8,9,10,11]
let start = 0;
let end = arr2.length - 1;
let target = 8;

function binarySearch(arr2,start,end,target) {

    console.log(arr2.slice(start, end)); // this code allows us to see the array being sliced
    
    // return false if the value is not within the range of our code 
    if(start > end) return false;

   let midIndex = Math.floor((start + end)/2);
   
    // we check if the value is the midpoint of the array
    if (arr2[midIndex] === target) return true; 

    // if the target is less than the midpoint we chec the left side of the array and loop through the function
    if (arr2[midIndex] > target) return binarySearch(arr2, start, midIndex - 1, target); 

    // if the target is greater than the midpoint we check the right side of the array and loop through the function
    else if(arr2[midIndex] < target) return binarySearch(arr2, midIndex + 1, end, target);  
    
}

//function calls

balance();
linearFun(arr1);
binarySearch(arr2,start,end,target);