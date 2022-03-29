const {BinaryTree, BinaryTreeNode} = require('./lib/non-linear-ds/tree/BinaryTree');
const {BinarySearchTree} = require('./lib/non-linear-ds/tree/BinarySearchTree');

module.exports = {
  Stack: require('./lib/linear-ds/stack/stack'),
  Queue: require('./lib/linear-ds/queue/queue'),
  SinglyLinkedList: require('./lib/linear-ds/linked-list/SinglyLinkedList'),
  DoublyLinkedList: require('./lib/linear-ds/linked-list/DoublyLinkedList'),
  CircularSinglyLinkedList: require('./lib/linear-ds/linked-list/CircularSinglyLinkedList'),
  BinaryTree,
  BinaryTreeNode,
  BinarySearchTree
}
