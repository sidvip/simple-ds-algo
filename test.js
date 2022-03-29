const {
  Stack,
  Queue,
  SinglyLinkedList,
  DoublyLinkedList,
  CircularSinglyLinkedList,
  BinaryTree,
  BinaryTreeNode,
  BinartSearchTree
} = require('./index');

// const _myStack = new Stack(10);
// const _Stack = _myStack.push("a");

// console.log(_myStack.peek());
// _myStack.push("b");
// console.log(_myStack.peek());
// _myStack.push("c");
// console.log(_myStack.peek());
// _myStack.push("d");
// console.log(_myStack.peek());
// _myStack.push("e");
// console.log(_myStack.peek());
// _myStack.push("f");

// console.log(_myStack.peek());
// console.log(_myStack.peek());
// console.log(_myStack.peek());
// console.log(_myStack.peek());

// console.log(_myStack);
// // console.log(stack);
// while(!_myStack.isEmpty()) {
//     console.log(_myStack.pop());
// }
// console.log(_myStack.pop());

// const _myqueue = new Queue();
// const _customQueue = _myqueue.enqueue(1)
// _myqueue.enqueue(2);
// _myqueue.enqueue(3);
// _myqueue.enqueue(5);
// _myqueue.enqueue(6);
// console.log(_myqueue.peek());
// console.log(_customQueue)
// while (!_myqueue.isEmpty()) {
//     console.log(_myqueue.delete())
// }
// _myqueue.delete();

// const myLList = new SinglyLinkedList();

// let list = myLList.insertAtBeginning(1);
// // console.log(myLList.getHead());
// console.log(myLList.getSinglyLinkedList())

// list = myLList.insertAtBeginning(2);
// // console.log(myLList.getHead());
// console.log(myLList.getSinglyLinkedList())

// list = myLList.insertAtBeginning(3);
// // console.log(myLList.getHead());
// console.log(myLList.getSinglyLinkedList())
// // console.log(list);
// console.log(myLList.getSinglyLinkedListString());
// let list = myLList.insertAtEnd(1);
// console.log(myLList.getHead());
// console.log(myLList.getSinglyLinkedList())

// list = myLList.insertAtEnd(2);
// console.log(myLList.getHead());
// console.log(myLList.getSinglyLinkedList())

// list = myLList.insertAtEnd(3);
// list = myLList.insertAtEnd(5);
// list = myLList.insertAtEnd(6);
// list = myLList.insertAtEnd(7);
// list = myLList.insertAtEnd(8);

// console.log(myLList.getSize());
// list = myLList.insertAtMiddle(-4, 1);
// console.log(myLList.getSize());

// console.log(myLList.getSinglyLinkedListString())
// console.log(myLList.deleteFromBeginning());
// console.log(myLList.getSinglyLinkedListString());
// console.log(myLList.getHead());
// console.log(myLList.deleteFromBeginning());
// console.log(myLList.getSinglyLinkedListString());
// console.log(myLList.getHead());
// console.log(myLList.deleteFromEnd());
// console.log(myLList.getSinglyLinkedListString());
// console.log(myLList.getHead());
// console.log(myLList.getSize());
// // console.log(myLList.delete());
// console.log(myLList.deleteFromMiddle(4));
// console.log(myLList.getSinglyLinkedListString());
// console.log(myLList.purgeLinkedList());
// console.log(myLList.deleteFromMiddle(5))
// console.log(myLList.deleteFromMiddle(8))
// console.log(myLList.deleteFromMiddle(15))
// console.log(myLList.getSinglyLinkedListString());
// console.log(myLList)
// console.log(list);
// console.log(myLList.getSinglyLinkedListString());

// const myDDL = new DoublyLinkedList();

// console.log(myDDL.getHead());
// console.log(myDDL.getSize());
// console.log(myDDL.getDoublyLinkedListString());
// myDDL.insertAtBeginning(1);
// myDDL.insertAtBeginning(2);
// myDDL.insertAtBeginning(3);
// myDDL.insertAtBeginning(4);
// myDDL.insertAtBeginning(5);
// myDDL.insertAtBeginning(6);
// console.log(myDDL.getDoublyLinkedListString());
// myDDL.insertAtMiddle(-1, 1);
// myDDL.insertAtEnd(1);
// myDDL.insertAtEnd(2);
// myDDL.insertAtEnd(3);
// myDDL.insertAtEnd(4);
// myDDL.insertAtEnd(5);
// console.log(myDDL.getHead());
// console.log(myDDL.getDoublyLinkedListString());
// console.log(myDDL.deleteFromMiddle(1));
// console.log(myDDL.deleteFromMiddle(1));
// console.log(myDDL.deleteFromMiddle(1));
// console.log(myDDL.getHead());

// console.log(myDDL.deleteFromMiddle(1));
// console.log(myDDL.getSize());
// console.log(myDDL.deleteFromMiddle(1));

// console.log(myDDL.deleteFromMiddle(1));

// console.log(myDDL.getDoublyLinkedListString());
// console.log(myDDL.deleteFromBeginning());
// console.log(myDDL.getHead());
// console.log(myDDL.getDoublyLinkedListString());
// console.log(myDDL.deleteFromEnd());
// console.log(myDDL.getDoublyLinkedListString());
// console.log(myDDL.purgeLinkedList());
// console.log(myDDL.getSize());

// console.log(CircularSinglyLinkedList);
// const myCSL = new CircularSinglyLinkedList()

// myCSL.print = function() {
//     console.log(this.getCircularSinglyLinkedListString());
// }

// console.log(myCSL.insertAtBeginning(1))
// console.log(myCSL.insertAtBeginning(2))
// console.log(myCSL.insertAtBeginning(3))
// console.log(myCSL.insertAtBeginning(4))

// console.log(myCSL.insertAtEnd(-1));
// console.log(myCSL.insertAtEnd(-2));
// console.log(myCSL.insertAtEnd(-3));
// console.log(myCSL.insertAtEnd(-4));
// console.log(myCSL.purgeLinkedList());
// console.log(myCSL.getCircularSinglyLinkedListString());
// myCSL.print();

// console.log('Head \t', myCSL.getHead())
// console.log('Tail \t', myCSL.getTail())


// const myLList = new SinglyLinkedList();
// myLList.insertAtBeginning(1);
// myLList.insertAtBeginning(2);
// myLList.insertAtBeginning(3);
// myLList.insertAtBeginning(4);
// myLList.insertAtBeginning(5);
// myLList.insertAtBeginning(6);

// console.log(myLList.getSinglyLinkedListString());

// function reverseLinkedList() {
//     let _head =myLList.getHead();
//     while (_head.next) {
//         let temp = _head.next;
//         _head.next = null;
//         _head = temp;
//         // _head = _head.next;
//         // _head.next = temp;
//     }
//     console.log(_head);
// }

// reverseLinkedList();
// console.log(myLList.getSinglyLinkedListString());

// const btree = new BinaryTree();
// btree.newFunc = function (){}
// console.log(btree)
// btree.createTree([ 1, 2, 3, 4, 5, 6, 7, 9, 6, 40, 13, ]);
// btree.createTree([ 1, 6, 6, 12, null]);
// console.log(JSON.stringify(btree.getTree(), null, 2));
// btree.createTree([ 1, 12, 9, 5, 6]);
// btree.inOrderTraversal(btree.getTree());
// btree.preOrderTraversal(btree.getTree());
// btree.postOrderTraversal(btree.getTree());

/**
       *    1
       *  /    \
       * 2      3
 *     /  \   /  \
 *    4   5   6   7
 *   /\   /\  /\  /\
 *  9 6 40 13
 */

