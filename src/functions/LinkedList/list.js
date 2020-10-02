const LinkedList= require('./listBuild')

function main() {
    let SLL= new LinkedList();

    //add Apollo, Boomer, Helo, Husker, Starbuck
        SLL.insert('Apollo')
        SLL.insert('Boomer')
        SLL.insert('Husker')
        SLL.insert('Helo')
        SLL.insert('Starbuck')
        //console.log(JSON.stringify(SLL,null,2))

    //add Tauhida
        SLL.insert('Tauhida')

    //remove Husker
        SLL.remove('Husker')
        //console.log(JSON.stringify(SLL,null,2))

    //find item
        //const item= SLL.find('Boomer')
        //console.log(item)
    
    //insertBefore
        SLL.insertBefore('Boomer','Athena')
        //console.log(JSON.stringify(SLL,null,2))

    //insertAfter
        SLL.insertAfter('Helo','Hotdog')
        //SLL.insertAfter('Tauhida','test')
        //console.log(JSON.stringify(SLL,null,2))

    //Using the insertAt() method insert Kat in the 3rd position of the list.

    //Remove Tauhida from the list.
        SLL.remove('Tauhida')
    
    return SLL
}

const linked= main()
//console.log(linked.head)

//SUPPLEMENTAL FUNCTIONS

function display(list={}) {
  if (list.next===null) return;
  console.log(list.value)
  return display(list.next)
}
//display(linked.head)

//size: returns the size of the linked list
function size(list) {
    if (list.next===null) return 0 ;
    return 1 + size(list.next)
}
console.log('Number of items:',size(linked.head))


//isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty(list) {
    if (list.head===null) return true
    else return false
}
console.log('Is the list empty:',isEmpty(linked))

//findPrevious: finds the node before the item you are looking for
function findPrevious(list,item) {
    if (!list.head) {
        return null;
    }
    
    let prev = null;
    let curr = list.head;

    while(curr != null && curr.value !== item){
        prev = curr;
        curr = curr.next;
    }
    console.log(prev)
}
//findPrevious(linked,'Helo')

//findLast: returns the last node in the linked list
function findLast(list) {
    if(list.next===null) return list
    return findLast('Last note:',list.next)
}
console.log(findLast(linked.head))

//ANALYZE FUNCTION

//REVERSE A LIST

//3RD FROM THE END

//MIDDLE OF A LIST

//CYCLE IN A LIST

//SORTING A LIST
