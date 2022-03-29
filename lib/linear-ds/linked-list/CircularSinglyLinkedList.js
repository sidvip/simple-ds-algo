/**
 * Implementation of linked list is done using Javascript objects and functions.
 * author: Siddhartha Vibhu Pharswan
 * dated: Jan 03, 2022
 *
 * Description: CircularLinkedList function which can help to utilise the common funcions of linked lists.
 */

const _CircularSinglyLLNode = function CircularLLNode (value) {
  this.value = value
  this.next = null
}

const CircularSinglyLinkedList = function () {
  let _head = null
  let _tail = null
  let _size = 0

  /**
     * Description : Getter Method to get the head of the linked list.
     * @returns Head of the linked list
     */

  this.getHead = () => { return _head }

  /**
     * Description : Getter Method to get the tail of the linked list.
     * @returns Tail of the linked list
     */

  this.getTail = () => { return _tail }

  /**
     * Description : Getter Method to get the size of the linked list.
     * @returns {number} Size of the linked list
     */

  this.getSize = () => { return _size }

  /**
     * Description : Purges or deletes the linked list.
     * @returns Status of purging
     */

  this.purgeLinkedList = () => {
    _head = null
    _tail = null
    _size = 0
    return 'Circular Linked List purged successfully.'
  }

  /**
   * Description : Prints Linked List in expanded form.
   * @returns {string} stringifiedLinkedList
   */

  this.getCircularSinglyLinkedListString = function () {
    if (_head === null || _tail === null) {
      return 'Linked List is empty, insert some nodes into the linked list.'
    }
    let _linkedListCopy = _head; let _llString = ''; let _newString = ''
    const firstValue = _linkedListCopy.value
    let _spaceString = ''
    let idx = 0
    while (_linkedListCopy.next !== null) {
      if (firstValue === _linkedListCopy.value && idx === _size) {
        _llString = _llString.replace(/( --> )$/, '');
        _newString = _newString.replace(/(-----)$/, '');
        _spaceString = _spaceString.replace(/(    )$/, '');
        break
      }
      _llString += _linkedListCopy.value + ' --> '
      _linkedListCopy = _linkedListCopy.next
      _newString += '-----'
      _spaceString += '     '
      idx += 1
    }
    _llString += (idx === 0 ? (firstValue + ' --> ' + 'null') : '')
    if (idx > 0)
        _llString += '\n^' + _spaceString + '|' + '\n|' + _spaceString + 'v' + '\n' + _newString
    return _llString
  }

  /**
     * Description: Inserts new Node into the Linked List from the beginning of the linked list.
     *
     * Complexity - O(1)
     *
     * @param {number} value - value to be inserted into the linked list.
     * @returns status
     */
  this.insertAtBeginning = function (value) {
    if (!value) throw new Error(' Value can not be undefined or null')

    if (_head === null) {
      _head = new _CircularSinglyLLNode(value)
      _tail = _head
    } else {
      const _newNode = new _CircularSinglyLLNode(value)
      _newNode.next = _head
      _tail.next = _newNode
      _head = _newNode
    }
    _size += 1
    return `Inserted Value ${value} at the beginning of the Linked List`
  }

  /**
     * Description: Inserts new Node from the end of the linked list.
     *
     * Complexity - O(1)
     *
     * @param {number} value - value to be inserted at the end of the linked list.
     * @returns status
     */
  this.insertAtEnd = function (value) {
    if (!value) throw new Error(' Value can not be undefined or null')

    if (_head === null) {
      _head = new _CircularSinglyLLNode(value)
      _tail = _head
    } else {
      const _newNode = new _CircularSinglyLLNode(value)
      _newNode.next = _head
      _tail.next = _newNode
      _tail = _newNode;
    }
    _size += 1
    return `Inserted Value ${value} at the end of the Linked List`
  }

  /**
     * Description: Inserts new Node into the middle of the Linked List.
     *
     * Complexity - O(N)
     *
     * @param {number} value - value to be inserted into the linked list.
     * @param {number} location - location is started from 1. And location 1 is first node after head node.
     * @returns status
     */
  this.insertAtMiddle = function (value, location) {
    if (!value) throw new Error(' Value can not be undefined or null')
    if (location === undefined || location === null) throw new Error(' Location must be integer ')
    if (location > _size) { throw new Error('Location must be less than or equal to the size of the linked list') }

    const _newNode = new _SinglyLLNode(value)
    let _iLList = _linkedList
    for (let i = 1; i < location; i++) {
      _iLList = _iLList.next
    }
    _newNode.next = _iLList.next
    _iLList.next = _newNode
    _size += 1
    return `Inserted Value ${value} at location no. ${location} of the Linked List`
  }

  /**
   * Description: Deletes the node from the linked list.
   *
   * Complexity - O(1)
   *
   * @returns {string} status of deletion
   */
   this.deleteFromBeginning = function () {
    let statusMsg
    if (_head === null) {
      throw new Error('Circular Linked List is empty')
    } else {
      statusMsg = `Deleted the element ${_linkedList.value} from the beginning`
      _linkedList = _linkedList.next
      _head = _linkedList
      _size -= 1
    }
    return statusMsg
  }

}

module.exports = CircularSinglyLinkedList
