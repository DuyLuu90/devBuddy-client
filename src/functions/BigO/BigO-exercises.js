//2. Even or odd
function isEven(value) {
    if (value % 2 === 0) return true;
    else return false;
}
// this function does 2 operations per value-> O(1)

//3. Are you here?
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
//(5*n)(1+5*n(1+2))+1-> 0(n^2)

//4. Doubler
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
//(5*n)(1)+ 1 -> 0(n)

//5. Naive search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//(5*n)*2 -> 0(n)

//6. Creating pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
//(5*n)(5*n)-> O(n^2)

/*
7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer*/

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
// declare an empty array, loop through numbers from 1 to num, push item to the array according to the number val, then return the array
//1+ 1+ 5*n(2+2+3)-> O(n)

/*
8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. */

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
// number of ops inside the loop: 6 (constant)
// 1/2(1+1/2+1/2^2..)-> 1/(2+2^n) -> O(log(n))

//9. Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// Math.floor(Math.random() * arr.length)-> 4 operations, then return item with the index-> O(1)


//10. What Am I? What does the following algorithm do? 
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
// 4 + n*5(3) + 1-> 0(n)

//RECURSIVE ALGORITHMS -> 

function coutingSheep(num) {
    for (let i=0; i<=num; i++) {
        if (i===num) return `All sheep jumped over the fence`
        else return `${num-i}: Another sheep jumps over the fence`
    }
}

function powerCalculator(int,exp) { 
  if(exp===0){
      return 1;
  }
  let result;
  for (let i=1; i<=exp; i++) {
        result *=int
  }
  return result;
}

function reverseString(str) {
  if (str==='') {
    return ''
  }
  const letter= str.slice(-1)
  return letter+reverseString(str.slice(0,-1))
}

const arr=[];
function triangular(num,nth) {
  if (num===nth+1) {
    return arr
  }
  const result= num*(num+1)/2
  arr.push(result);
  return triangular(num+1,nth)
  //return [...result,triangular(nth-1)]
}

let letter=''
let array=[]
function splitter(str) {
    if (str==='') {
        if (letter !=='') array.push(letter)
        return array
    }
    if (str[0]==='/') {
        if (letter !=='') array.push(letter)
        letter=''
    }
    else {
        letter += str[0]
    }
    return splitter(str.slice(1))
}


function fibonacci(nth) {
  if (nth <= 2) return 1
  return fibonacci(nth-1)+ fibonacci(nth-2)
}


function factorial(num) {
   if (num===0) return 1
   else return num* factorial(num-1)
}


