import React from 'react'
import {} from 'react-router-dom'
import {} from '@fortawesome/react-fontawesome'

export function Algorithm(){
    return(
        <div className='algorithm_note'>
            <h1>INTRODUCTION</h1>
            <div>
                Let's learn some common data structures like arrays, linked list, hash maps and trees!!!
            </div>
            <div>
                <h2>Resources:</h2>
                <ul>
                    <li><a href='https://rb.gy/7rpsiv' target='_blank' rel="noopener noreferrer">500 practice problems</a></li>
                    <li><a href='https://rb.gy/o4rfkw' target='_blank' rel="noopener noreferrer">Common interview questions</a></li>
                </ul>
            </div>
        </div>
    )
}

export function RecursionNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Recursive Algorithm</h1>
            <div className='keyword'>
                <h2>Introduction</h2>
                <p>Recursion is a method of solving problem that involves a function calling itself. It breaks down function into sub-problems.</p>
            </div>
            <div className='keyword'>
                <h2>Base case vs Recursive case</h2>
                <p>Base case is the solution to the simplest possible problem. It is where the problem is as simple as it can get.</p>
                <p>Recursive case is where the method calls itself.</p>
            </div>
            <div className='keyword'>
                <h2>Forward phase</h2>
                <p>Each time the function calls itself, we are solving a smaller problem, until we reach the point where the problem cannot get any smaller.</p>
            </div>
            <div className='keyword'>
                <h2>Backward phase</h2>
                <p>When a function call satisfies the base case, the call returns control to the previous function that called it. This continues until control is returned to the function that was called initially, then return the solution to the problem.</p>
            </div>


        </div>
    )
}

export function ArrayNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Array</h1>
            <div className='keyword'>
                <h2>Introduction</h2>
                <p>Arrays are an ordered sequence of data. The data is stored in contiguous memory. That means that all of the array data is stored in order at subsequent memory addresses.</p>
            </div>
            <div className='keyword'>
                <h2>Memory address</h2>
                <p>Imagine that we have a long series of boxes. Inside each box, some information is stored. Each box has a number written on the front. This number is known as the memory address. </p>
                <p>Variables containing memory addresses are known as pointers(ptr).</p>
            </div>
            <div className='keyword'>
                <h2>Memory module</h2>
                <h3>Methods</h3>
                <ul>
                    <li>get(ptr): return the value stored at a certain ptr (memory address)</li>
                    <li>set(ptr,val)</li>
                    <li>allocate(size): reserve a contiguous block of memory consisting of "size" boxes. </li>
                    <li>free(ptr):</li>
                    <li>copy(to,from,size): copy "size" boxes from ptr "from" to ptr "to".</li>
                </ul>
            </div>
            <div className='keyword'>
                <h2>Working with array</h2>
                <h3>Constructor</h3>
                <p>The array starts out with this.length=0, this.pointer=0 block of memory and this.capacity=0</p>
                <h3>Methods</h3>
                <p>_resize(size): get current allocated memory{'->'}if it's null, throw error {'->'}allocate a new larger memory{'->'}copy any existing value to the new ptr from the old ptr and finally free the old one</p>
                <p>push(value): if the length of the array is greater than the capacity, allocate more memory for the array using the _resize method. Then set the value at the end (this.ptr+this.length) of the array, then increase the length of the array by 1.  </p>
                <p>get(index): check if the index is less than 0 or greater than the array length, then get the memory address of (this.ptr+index) </p>
                <p>pop(): check if the array is empty. If not, get the value of the last item, reduce the length by 1, then return that value. </p>
                <p>insert(i,val): check if index is valid. If the length is greater than the capacity, resize the capacity</p>
                <p>remove(i): check if index is valid. </p>
            </div>
            <div className='keyword'>
                <h2>Why is array not always a perfect choice?</h2>
                <h3>Push a new item:</h3>
                <p>First, we have to resize the array so there is space for the new item. Then we have to set the memory at "this.ptr+length" to be equal to the value. </p>
                <p>You cannot simply ask for some extra space directly at the end of your current allocated space. You have to allocate a new, larger chunk of memory, copy any existing values, and free the old chunk. </p>
                <p>Solution: allocate more space than you need (for ex each time you go over the capacity, you triple the size of memory) </p>
            </div>

        </div>
    )
}

export function LinkedListNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Linked List</h1>
            <div className='keyword'>
                <h2>Node</h2>
                <p>Node is a basic unit of data structure. Node contains data and also may link to other nodes, usually by a pointer .</p>
            </div>
            <div className='keyword'>
                <h2>Linked list</h2>
                <p>Linked list is a data structure that allocates blocks of memory on demand. They are connected by "linking" and "storing" a series of "nodes".</p>
                <p>Linked list is better than array in that it can allocate blocks of memory on demand. Nodes in linked list can be allocated from anywhere in the memory.</p>
                <p>Linked list has a head to indicate the beginning of the list. The head always contains the first node</p>
            </div>
            
            <div className='keyword'>
                <h2>Operations in a linked list</h2>
                <h3>Insertion</h3>
                <p>insertFirst(item): create new node then point the head to that new node</p>
                <p>insertLast(item): check if this head is null, then start at the beginning of the list, and move through the list until you reach the end, then set the end node's next pointer to the new node. The new node's next pointer is null, indicating that this is the last node(item). </p>
                <h3>Retrieval</h3>
                <p>Very straightforward. You can just traverse the list, comparing the value, then when the item is found, return the node. </p>
                <h3>Removal</h3>
                <p>if (this.head.value===item): change the head to indicate the new first item on the list</p>
                <p>else find the node before the node you're removing and update its next pointer to skip over the removed node. </p>
            </div>
            <div className='keyword'>
                <h2>Double linked list</h2>
                <p>It is linked list where nodes contain a pointer to the prev node in addition to the next.</p>
            </div>
            <div className='keyword'>
                <h2>Why is linked list not always a perfect choice? </h2>
                <p>It's not easy to find the "index" of the node in the linked list. You have to traverse the list, from head to tail, until you find the item. </p>
                <p>Cache locality: when the processor accesses data from mempry(RAM), it also loads some of the data stored nearby in the catches. Since nodes in linked list are spread out throughout the memory, it is unlikely that subsequent nodes will get loaded into the caches. </p>
            </div>

        </div>
    )
}

export function StackQueueNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Stacks and Queues</h1>
            <div className='keyword'>
                <h2>Introduction</h2>
                <p>Stacks(single linked list) and queues (doubly linked list) are two of the most commonly used data structures in web development (for ex, the history of pages visited, the handling of events in web browsers). </p>
            </div>
            <div className='keyword'>
                <h2>Stack</h2>
                <p>A stack is a data structure similar to a list with access restricted to only 1 end. It stores element in a LIFO(Last In First Out).</p>
                <p>Stack is vertical data structure, unlike lists and arrays which are horizontal.</p>
            </div>
            <div className='keyword'>
                <h2>Queue</h2>
                <p>A queue is a data structure that stores elements in a FIFO (First In First Out).We can see a queue in the event loop of a web browser. </p>
            </div>
            <div className='keyword'>
                <h2>Working with stacks and queues</h2>
                <h3>Stacks</h3>
                <p>A stack starts with an empty first node (this.top).It has 2 primary functions push(data) and pop(data) onto/from the top</p>
                <p>To push: check to see if the stack is empty, then the node will be the top of the stack. Otherwise, create a new node, add data to the new node, and have the pointer point to the top.</p>
                <p>To pop: in order to remove the top of the stack, you have to point the pointer to the next item and that item becomes the top of the stack (get this.top.data then this.top= this.top.next)</p>
                <h3>Queues</h3>
                <p>A queue starts with first node and last node. It has 2 main functions enqueue(data) and dequeue(oldest data) to a queue.</p>
                <p>To enqueue: the opt is limited to the end of the queue. Make this.last.next= node, then this.last=node</p>
                <p>To dequeue: the opt is limited to the beginning of the queue. If the queue is empty, return nothing. If this is the last item, make this.last=null. Otherwise, make this.first= this.first.next </p>
            </div>
        </div>
    )
}

export function HashNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Hash maps</h1>
            <div className='keyword'>
                <h2>Introduction</h2>
                <p>Hash maps are UNordered associations between keys and values. Hash maps require a hash-table (array of obj) </p>
                <p>Hasing is the process of mapping a key to a position in the hash table, which is a storage that holds the records (the key and any value associated with the key. Example where hashmaps are very useful if you want to implement a dictionary map. </p>
                
            </div>
            <div className='keyword'>
                <h2>Capacity</h2>
                <p>Capacity grows in chunk as you resize to a larger array when the hash table is full to help cut down the number of memory allocations</p>
                <p>MAX_LOAD_RATIO is the highest that the ratio between the length and the capacity will be allowed to reach.</p>
            </div>
            <div className='keyword'>
                <h2>Collisions</h2>
                <p>Happens when a new entry hashes to a location that is already occupied</p>
                <h3>Solutions:</h3>
                <p>Open addressing: when you have a collision, you hash the key to the empty slot nearest to where it should live.</p>
                <p>Separate chaining: use linked list to hash the key that runs into collision. When a key collides with another, we use next pointers to put the keys in a linked list </p>
            </div>
            <div className='keyword'>
                <h2>Working with hash map</h2>
                <p>A hash map starts with an array called _hashTable, a length, and a capacity.</p>
                <h3>Find an item</h3>
                <p>To find an item in hash map, we don't need to check every element like in linked list. We just have to find the key that stores the element. The number of comparision would be constant o(1) and would not depend on the number of elements stored in the hashmap.</p>
            </div>

        </div>
    )
}

export function BSTNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Binary Search Tree</h1>
            <div className='keyword'>
                <h2>Tree</h2>
                <p>Tree is a data structure that consists of nodes which are linked together in a certain way. Node in a tree has a parent-child relationship (root, leaf)</p>
            </div>
            <div className='keyword'>
                <h2>Binary tree</h2>
                <p>A tree that can only has at most 2 children. It may have left branch and right branch.</p>
                <p>A sub-tree is a mini tree within a binary tree. </p>
            </div>
            <div className='keyword'>
                <h2>Binary Search Tree</h2>
                <p>In BST, all of the nodes in the left branch of a node are guaranteed to have lower values, and all of the nodes in the right branch are guaranteed to have a higher value than the node itself.</p>
            </div>
            <div className='keyword'>
                <h2>Working with BST</h2>
                <p></p>
            </div>

        </div>
    )
}

export function SearchNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Searching Algorithm</h1>
            <div className='keyword'>
                <h2>Introduction</h2>
                <p></p>
            </div>
            <div className='keyword'>
                <h2>Types of search</h2>
                <h3>Linear Search</h3>
                <p>To find an item, you will have to look through an array 1 by 1.</p>
                <h3>Binary Search</h3>
                <p>Only works on sorted array. It works on the same principle of dividing the range in half each time (divide conquer).</p>
                <h3>Depth-first Search (DFS)</h3>
                <p>Starts from a given node(usually the root), and traverse as far as you can down. If the node is handled before the branches then it's known pre-order traversal, and if after, then it's known post-order traversal.</p>
                <h3>Breadth-first Search (BFS)</h3>
                <p>This works across the rows of a tree. The tree is visited level by level. </p>
                <p>We need FIFO queue so you can store all the siblings in the queue so you can store all the siblings in the queue and process them in the correct order.</p>
                <p>When you visit a node, you add it to the queue then remove, and their children are visited. </p>
            </div>
        </div>
    )
}

export function SortNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Sorting Algorithm</h1>
            <div className='keyword'>
                <h2>Introduction</h2>
                <p></p>
            </div>
            <div className='keyword'>
                <h2>Types of sort</h2>
                <h3>Bubble sort</h3>
                <p>To find out whether adjacent values swapping, we will keep looping through an array until there are no more values that need swapping</p>
                <h3>Merge sort</h3>
                <p>Break the array down into continually smaller chunks, then merge them back together in the correct </p>
                <h3>Quick sort</h3>
                <p>More cache-efficient and can easily be performed in place</p>
                <p>Divide and conquer approach: first, we partition the array into halves around a pivot value. Then all of the values which are less than the pivot values go to the first half of the array, and all of the values which are greater than the pivot go to the other half of the array.  </p>
            </div>

        </div>
    )
}