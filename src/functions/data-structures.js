const memory= require('./memory')
//for linked list and stack
class _Node {
    constructor(data,next=null) {
        this.data= data;
        this.next= next;
    }
}
// for queue
class _queueNode{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

export class LinkedList{
    constructor(){
        this.head= null;
    }
    insertFirst(item) {   
        this.head = new _Node(item,this.head)   
    }
    insert(item){
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode= this.head;
            while (tempNode.next !== null) {
                tempNode= tempNode.next
            }
            tempNode.next= new _Node(item,null)
        }
    }
    find(item){
        let currNode= this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.data !== item) {
            if (currNode.next === null) return null
            else currNode= currNode.next
        }
        return currNode
    }
    remove(item){
        if (!this.head){
            return null;
        }
        if (this.head.data === item) {
            this.head = this.head.next;
            return;
        }
        
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode!==null) && (currNode.data !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    insertBefore(key,value){
        if (!this.head) {
            return null;
        }
        if(this.head.data === key) {
            this.insertFirst(value);
        }
        let prev = null;
        let curr = this.head;
        while(curr != null && curr.data !== key){
            prev = curr;
            curr = curr.next;
        }
        if(curr !== null && prev !== null) {
            prev.next = new _Node(value, curr);
        }
    }
    insertAfter(key,value){
        if (!this.head) {
            return null;
        }
        let curr = this.head;
        let next= curr.next

        while(next != null && curr.data !== key){
            curr= next;
            next = next.next;
        }
        if (next===null) this.insert(value)
        else curr.next= new _Node(value,next)
    }
    insertAt(pos,value){
        
    }
    
}

export class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size) {
        const oldPtr = this.ptr; //current allocated memory
        this.ptr = memory.allocate(size);//allocate a new, larger memory
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);//copy any existing values
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

export class Stack {
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

export class Queue {
    constructor(){
        this.first= null;
        this.last= null;
    }
    enqueue(data){
        const node= new _queueNode(data)
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

export class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }
    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }
    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        //console.log(loadRatio)
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);
        //console.log(index)
        //console.log(this._hashTable[index])
        
        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
        //console.log('HASH TABLE',key,value,this._hashTable)
    }
    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }
    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;
        //console.log(start,this._capacity)

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            //console.log(index,slot)
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }
    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined) {
                this.set(slot.key, slot.value);
            }
        }
    }
    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {

            //Bitwise left shift with 5 0s - this would be similar to hash*31, 31 being the decent prime number but bit shifting is a faster way to do this tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);

            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}

export class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root,and compare it to the key you want to insert.
           If the new key is less than the node's key then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, then we recursively call the `insert` method so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
            /* Similarly, if the new key is greater than the node's key then you do the same thing, but on the right-hand side */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root then follow the left child. If there is an existing left child, then recursively check its left and/or right child until you find the item */

        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item you are looking for is greater than the root then follow the right child. If there is an existing right child, then recursively check its left and/or right child until you find the item */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then simply remove it and any references to it by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
    dfs(values=[]){
        if(this.left){
            values=this.left.dfs(values)
        }
        values.push(this.key)

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
            values.push(node.key)
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
