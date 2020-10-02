const memory= require('./memory')

function main(){
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
    return arr
}
const arr= main()

arr.push(3); //length: 1, capacity: 3, memory address: 0
console.log('New array instance:',arr);

//EXPLORING THE PUSH METHOD
    arr.push(5);  //length: 2 , capacity: 3  , memory address: 1
    arr.push(15); //length: 3 , capacity: 12 , memory address: 2
    arr.push(19); //length: 4 , capacity: 12 , memory address: 3
    arr.push(45); //length: 5 , capacity: 12 , memory address: 4
    arr.push(10); //length: 6 , capacity: 12 , memory address: 5
    console.log(arr)


// EXPLORING THE POP METHOD
    arr.pop(); //length: 5 ,capacity: 12 ,memory address:
    arr.pop(); //length: 4 ,capacity: 12 ,memory address:
    arr.pop(); //length: 3 ,capacity: 12 ,memory address:
    console.log(arr)

//UNDERSTANDING MORE ABOUT HOW ARRAYS WORK

//Print the 1st item in the array arr.
    console.log(arr[1])

//Empty the array and add just 1 item: arr.push("tauhida");
    memory.free(arr)
    console.log(arr)

//Print this 1 item that you just added. What is the result? Can you explain your result?

//What is the purpose of the _resize() function in your Array class?



