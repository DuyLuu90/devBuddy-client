class _Node {
    constructor(data,next=null) {
        this.data= data;
        this.next= next;
    }
}

//CREATE A STACK CLASS (w. push and pop methods)
class Stack {
    constructor(){
        this.top= null;
    }
    push(data){
        if(this.top===null){
            this.top= new _Node(data,null)
            return this.top;
        }
        const node= new _Node(data,this.top)
        this.top= node
    }
    pop(){
        const node=this.top
        this.top= node.next;
        return node.data;
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
}

//STACK
const starTrek= new Stack()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
//console.log(starTrek)

//USEFUL METHODS:
function peek(stack){
    if (!stack.top) return null
    else return `The top of stack is "${stack.top.data}"`
}
//console.log(peek(starTrek))

function isEmpty(stack){
    if(!stack.top) return true
    else return false
    //return stack.top === null 
}
function display(node){
    if (!node) {
        console.log('Stack is empty')
        return;
    }
    console.log(node.data)
    if (node.next===null) return;
    return display(node.next)
}
//display(starTrek.top)

function remove(stack,item){
    let {top}= stack
    if (!top) return null;
    let next=top.next;
    while(next!==null){
        if (next.data===item) next= next.next
    }
}

//CHECK FOR PALINDROMES:
function is_palindrome(s) {
    let newStr=s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")//remove the empty space and non-valid letters
    //return newStr;
    let stack= new Stack()
    for (let i=0; i<newStr.length; i++){
        stack.push(newStr[i])
    }
    let reverseStr=''
    while(!isEmpty(stack)){
        reverseStr +=stack.pop()
    }
    if (newStr===reverseStr) return true
    else return false
}
//console.log(is_palindrome('cnsdcksdcnsd'))

//MATCHING PARENTHESES IN AN EXPRESSION
function match(s){
    let extraclosing= false
    let stack= new Stack()
    for (let i=0; i<s.length; i++){
        if (s[i] === '(') {
            //stack.push(`Missing ")" at position ${i}`)
            stack.push({position:i,value:s[i]})
        }
        if (s[i] === ')') {
            if (isEmpty(stack)) {
                console.log(`Extra ")" at position ${i}`)
                extraclosing= true
            }
            else stack.pop()
        }
    }
    if (isEmpty(stack)&& extraclosing===false) return true
    else {
        while (!isEmpty(stack)) {
            const item= stack.pop()
            console.log(`Extra '(' at position ${item.position}`)
        }
        return false
    }
    
    
}
console.log(match(')cdjsncs(cnsnxla)cbdh(cksc)()'))

//SORT STACK
