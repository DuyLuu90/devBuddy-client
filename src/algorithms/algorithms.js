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
                <h2>Recursion</h2>
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
                <h2>Concept</h2>
                <p>Arrays are an ordered sequence of data. The data is stored in contiguous memory. That means that all of the array data is stored in order at subsequent memory addresses.</p>
            </div>
            <div className='keyword'>
                <h2>Memory address</h2>
                <p>Imagine that we have a long series of boxes. Inside each box, some information is stored. Each box has a number written on the front. This number is known as the memory address. </p>
                <p>Variables containing memory addresses are known as pointers(ptr).</p>
            </div>
            <div className='keyword'>
                <h2>Memory module</h2>
                <p></p>
            </div>
            <div className='keyword'>
                <h2>Implement an array</h2>
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
                <h2>key</h2>
                <p></p>
            </div>
        </div>
    )
}

export function HashNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Hash maps</h1>
            <div className='keyword'>
                <h2>key</h2>
                <p></p>
            </div>

        </div>
    )
}

export function BSTNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Binary Search Tree</h1>
            <div className='keyword'>
                <h2>key</h2>
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
                <h2>key</h2>
                <p></p>
            </div>

        </div>
    )
}

export function SortNotes(){
    return(
        <div className='algorithm_note'>
            <h1>Sorting Algorithm</h1>
            <div className='keyword'>
                <h2>key</h2>
                <p></p>
            </div>

        </div>
    )
}