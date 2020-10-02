const Queue= require('../Stack_Queue/queue')
const tree= require('../BinarySearch_Tree/bst')

function binarySearch(array,value,start,end){
    //counter= counter+1
    start= (start===undefined)? 0: start
    end = (end===undefined)? array.length: end;
    if (start>end){
        return -1;
    }
    const index= Math.floor((start+end)/2)
    const item= array[index]

    //console.log(start,end)
    if (item==value){
        //console.log(counter)
        return index;

    }
    else if (item<value){
        return binarySearch(array,value,index+1,end)
    }
    else if (item>value){
        return binarySearch(array,value,start,index-1)
    }
}

class BinarySearchTree {
    constructor(key=null,value=null,parent=null){
        this.key=key
        this.value=value
        this.parent=parent
        this.left=null
        this.right=null
    }
    dfs(values=[]){
        if(this.left){
            values=this.left.dfs(values)
        }
        values.push(this.value)

        if(this.right){
            values=this.right.dfs(values)
        }

        return values;
    }
    bfs(tree,values=[]){
        const queue= new Queue()
        const node= tree.root;
        queue.enqueue(node)
        while(queue.length){
            const node= queue.dequeue()
            values.push(node.value)
            if (node.left){
                queue.enqueue(node.left)
            }
            if (node.right){
                queue.enqueue(node.right)
            }
        }
        return values
    }
}

//1.HOW MANY SEARCHES?
let sortedList=[3,5,6,8,11,12,14,15,17,18]//10 items
//binarySearch(sortedList,8)// array[5]=12>8->array[2]=6<8->array[3]=8
//binarySearch(sortedList,16)//array[5]=12<16->array[8]=17>16 (start=8>end=7)=>-1
//console.log(index)

//2.ADDING A REACT UI
//Linear search:
function linear(array,item){
    for (let i=0; i<array.length; i++){
        if (array[i]===item) return i+1
    }
    return 'item not found'
}
//console.log(linear(sortedList,34))

//Binary search:
function binary(array,value){
    let counter=0;
    let index=array.indexOf(value)
    /*
    while(binarySearch(array,value)!== 6|| binarySearch(array,value)!==-1){
        counter++;
        
    }*/
    /*
    function binarySearch(array,value,start,end){
        counter= counter+1
        start= (start===undefined)? 0: start
        end = (end===undefined)? array.length: end;
        if (start>end){
            return -1;
        }
        const index= Math.floor((start+end)/2)
        const item= array[index]
    
        //console.log(start,end)
        if (item==value){
            console.log(counter)
            return index;
        }
        else if (item<value){
            return binarySearch(array,value,index+1,end)
        }
        else if (item>value){
            return binarySearch(array,value,start,index-1)
        }
    }
    */
    //console.log(counter)
    return counter
}
//binary(sortedList,14)
//console.log(binary(sortedList,14))

//3.FIND A BOOK

//create an array of ranges, and an array of books

let ranges= {
    0:Array(100).fill().map((item, index) => index),
    1:Array(100).fill().map((item, index) => index+100),
    2:Array(100).fill().map((item, index) => index+200),
    3:Array(100).fill().map((item, index) => index+300),
}
let books=[]


//4.SEARCHING IN A BST
//Preorder: 14 15 19 25 27 35 79 89 90 91
//Inorder: 53 25 15 14 19 27 89 79
//Postorder: 

//Post order: 5 7 6 9 11 10 8
//Pre order: 

//5.IMPLEMENT DIFFERENT TREE TRAVERSALS:

let data=[25,50,10,24,35,70,4,12,18,31,44,66,90,22]
function buildTree(data=[]){
    let bst= new tree()
    for (let i=0; i<data.length;i++){
        bst.insert(data[i])
    }
    return bst
}
let bst= buildTree(data)
let preOrder= bst.dfs()
let postOrder=bst.bfs(bst)
console.log(preOrder)
console.log(postOrder)


//console.log(preOrder)

//6.FIND THE NEXT COMMNANDING OFFICER

//7.MAX PROFIT

//8.EGG DROP