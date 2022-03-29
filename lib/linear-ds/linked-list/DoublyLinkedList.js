/**
 * Implementation of linked list is done using Javascript objects and functions.
 * author: Siddhartha Vibhu Pharswan
 * dated: Jan 01, 2022
 *
 * Description: DoublyLinkedList function which can help to utilise the common funcions of linked lists.
 */

const _DoublyLLNode = function DoublyLLNode (value) {
  this.previous = null
  this.value = value
  this.next = null
}

const _DoublyLinkedList = function () {
  let _head = null
  let _size = 0

  /**
     * Description : Getter Method to get the head of the linked list.
     * @returns Head of the linked list
     */

  this.getHead = () => { return _head }

  /**
     * Description : Getter Method to get the size of the doubly linked list.
     * @returns {number} size of the doubly linked list
     */

  this.getSize = () => { return _size }

  /**
     * Description : Purges or deletes the linked list.
     * @returns Status of purging
     */

  this.purgeLinkedList = () => {
    _head = null
    _size = 0
    return 'Doubly Linked List purged successfully.'
  }

  /**
     * Description : Prints Linked List in expanded form.
     * @returns {string} stringifiedLinkedList
     */

  this.getDoublyLinkedListString = function () {
    if (_head === null) {
      return 'Linked List is empty, insert some nodes into the linked list.'
    }
    let _linkedListCopy = _head; let _llString = null + ' <--> '
    while (_linkedListCopy.next !== null) {
      _llString += _linkedListCopy.value + ' <--> '
      _linkedListCopy = _linkedListCopy.next
    }
    _llString += _linkedListCopy.value + ' <--> ' + 'null'
    return _llString
  }

  /**
     * Description: Inserts new Node into the Linked List from the beginning of the linked list.
     *
     * Complexity - O(1)
     *
     * @param {number} value - value to be inserted at the beginning of the linked list.
     * @returns status
     */
  this.insertAtBeginning = function (value) {
    if (!value) throw new Error(' Value can not be undefined or null')
    if (_head === null) {
      _head = new _DoublyLLNode(value)
    } else {
      const _newNode = new _DoublyLLNode(value)
      _head.previous = _newNode
      _newNode.next = _head
      _head = _newNode
    }
    _size += 1
    return `Inserted Value ${value} to the beginning of the Linked List`
  }

  /**
     * Description: Inserts new Node into the middle of the linked list.
     *
     * Complexity - O(N)
     *
     * @param {number} value - value to be inserted at the middle of the linked list.
     * @param {number} location - location is started from 1. And location 1 is first node after head node.
     * @returns status
     */
  this.insertAtMiddle = function (value, location) {
    if (!value) throw new Error(' Value can not be undefined or null')
    if (location === undefined || location === null) throw new Error(' Location must be integer ')
    if (location < _size) { throw new Error('Location must be less than or equal to the size of the linked list') }

    const _newNode = new _DoublyLLNode(value)
    let _iLList = _head
    for (let i = 1; i < location; i++) {
      _iLList = _iLList.next
    }
    _newNode.next = _iLList.next
    _iLList.next = _newNode
    _newNode.previous = _iLList.next.previous
    _iLList.next.previous = _newNode
    _size += 1
    return `Inserted Value ${value} at location no. ${location} of the Linked List`
  }

  /**
     * Description: Inserts new Node at the end of the linked list.
     *
     * Complexity - O(N)
     *
     * @param {number} value - value to be inserted at the middle of the linked list.
     * @returns status
     */
  this.insertAtEnd = function (value) {
    if (!value) throw new Error('Value can not be undefined or null')
    if (_head === null) {
      _head = new _DoublyLLNode(value)
    } else {
      const _newNode = new _DoublyLLNode(value)
      let _iLList = _head
      while (_iLList.next) {
        _iLList = _iLList.next
      }
      _newNode.previous = _iLList
      _iLList.next = _newNode
    }
    _size += 1
    return `Inserted Value ${value} at the end of the Linked List`
  }

  /**
     * Description: Deletes node from the beginning of the linked list.
     *
     * Complexity - O(1)
     * @returns status
     */
  this.deleteFromBeginning = function () {
    let statusMsg
    if (_head === null) {
      throw new Error('Doubly Linked List is empty')
    } else {
      statusMsg = `Deleted the first element ${_head.value} from the beginning`
      _head = _head.next
      _head.previous = null
      _size -= 1
    }
    return statusMsg
  }

  /**
     * Description: Deletes the last node from the linked list.
     *
     * Complexity - O(N)
     *
     * @returns {string} status of deletion
     */
  this.deleteFromEnd = function () {
    let statusMsg
    if (_head === null) {
      throw new Error('Doubly Linked List is empty')
    } else if (_size > 1) {
      let _iLList = _head
      while (_iLList.next.next !== null) {
        _iLList = _iLList.next
      }
      statusMsg = `Deleted the last element ${_iLList.next.value} of the linked list`
      _iLList.next = null
      _size -= 1
    } else if (_size === 1) {
      statusMsg = `Deleted the last element ${_head.value} of the linked list`
      _head = null
      _size -= 1
    }
    return statusMsg
  }

  /**
     * Description: Deletes the node from any location in the linked list.
     *
     * Complexity - O(N)
     * @param {number} location from where node should be deleted from the linked list.
     * @returns {string} status of deletion
     */

  this.deleteFromMiddle = function (location) {
    let statusMsg
    if (location === undefined || location === null) throw new Error(' Location must be integer ')
    if (!location || (location > _size)) { throw new Error('Location must be less than the size of the linked list') }

    if (_head === null) {
      throw new Error('Doubly Linked List is empty')
    } else if (_size > 1) {
      let _iLList = _head
      for (let i = 1; i <= location; i++) {
        _iLList = _iLList.next
      }
      console.log(_iLList)
      _iLList.previous.next = _iLList.next
      if (_iLList.next !== null) {
        _iLList.next.previous = _iLList.previous
      }
      statusMsg = `Deleted node ${_iLList.value} from location ${location} of the linked list`
      _size -= 1
    } else if (_size === 1) {
      statusMsg = 'Size should be more than one, you can go for purging Linked List.'
    }
    return statusMsg
  }
}

module.exports = _DoublyLinkedList
