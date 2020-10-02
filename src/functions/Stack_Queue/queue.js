class _Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue {
    constructor(){
        this.first= null;
        this.last= null;
    }
    enqueue(data){
        const node= new _Node(data)
        if (this.first===null) this.first=node
        if (this.last) this.last.next=node
        this.last=node
    }
    dequeue(){
        if (this.first===null) {
            return;
        }
        const node= this.first
        this.first= this.first.next;
        if (node===this.last) {
            this.last=null;
        }
        return node.value;
    }
    checkPaperwork(){
        let random = Math.floor(Math.random() * 4) + 1  
        if (random===1) {
            const item= this.dequeue()
            this.enqueue(item)
        }
        else this.dequeue()
    }
}
const starTrekQ= new Queue()
starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

//console.log(starTrekQ)
starTrekQ.checkPaperwork()


function peek(queue) {
    if (queue.first) return queue.first.value
}
//console.log(peek(starTrekQ))
function isEmpty(queue){
    if (!queue.first) return true
    else return false
}
//console.log(isEmpty(starTrekQ))

function display(queue){
    if (!isEmpty(queue)) {
        let {first,last}= queue
        let array=[]
        while(first.next){
            array.push(first.value)
            first= first.next
        }
        array.push(last.value)
        console.log(array)
    } 
    else console.log('The queue is empty')
}
//display(starTrekQ)

//CREATE A QUEUE CLASS USING DOUBLY LINKED LIST

//QUEUE IMPLEMENTATION USING A STACK

//SQUARE DANCING PAIRING
function squareDance(){

}

//THE OPHIDIAN BANK

module.exports= Queue