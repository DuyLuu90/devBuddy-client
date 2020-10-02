const BinarySearchTree= require('./bst')

const BST= new BinarySearchTree()
BST.insert(3)
BST.insert(1)
BST.insert(4)
BST.insert(6)
BST.insert(9)
BST.insert(2)
BST.insert(5)
BST.insert(7)

//console.log(BST)

//4. WHAT DOES THIS FUNCTION DO?
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left)+ t.key +tree(t.right)
}
//console.log(tree(BST))// return sum of key

//5. WRITE AN ALGORITHM TO FIND THE HEIGHT OF A BINARY SEARCH TREE. WHAT IS THE TIME COMPLEXITY OF YOUR ALGORITHM?
function findHeight(t){
    /*
    if tree is empty then return 0
    else {
        a) Get the height of left subtrees, called leftHeight, recursively
        b) Get the height of right subtrees, call rightHeight, recursively
        c) height= max(leftHeight,rightHeight)+1
    }
    */

}

//6. WRITE AN ALGORITHM TO CHECK WHETHER AN ARBINARY BINARY TREE IS A BINARY SEARCH TREE
function isBST(t){
    /*
    The left subtree of a node contains only nodes with keys less than the node’s key.
    The right subtree of a node contains only nodes with keys greater than the node’s key.
    Both the left and right subtrees must also be binary search trees.
    */
}

//7. WRITE AN ALGORITHM TO FIND THE 3RD LARGEST NODE IN A BINARY SEARCH TREE
function findNode(t){

}

//8. WRITE AN ALGORITHM THAT CHECKS IF A BTS IS BALANCED
function isBalanced(t){

}

//9. ARE THEY THE SAME BSTs?
function sameBTS(keys1,key2){

}