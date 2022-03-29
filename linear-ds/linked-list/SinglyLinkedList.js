/**
 * Implementation of linked list is done using Javascript objects and functions.
 * author: Siddhartha Vibhu Pharswan
 * dated: Dec 31, 2021
 *
 * Description: SinlgyLinkedList function which can help to utilise the common funcions of linked lists.
 */

const _SinglyLLNode = function SinglyLLNode (value) {
  this.value = value
  this.next = null
}

const _SinglyLinkedList = function () {
  let _head = null
  let _linkedList = null
  let _size = 0

  /**
     * Description : Getter Method to get the head of the linked list.
     * @returns Head of the linked list
     */

  this.getHead = () => { return _head }

  /**
     * Description : get singly linked list
     * @returns Linked List
     */

  this.getSinglyLinkedList = () => { return _linkedList }

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
    _linkedList = null
    _head = null
    _size = 0
    return 'Linked List purged successfully.'
  }

  /**
     * Description : Prints Linked List in expanded form.
     * @returns {string} stringifiedLinkedList
     */

  this.getSinglyLinkedListString = function () {
    if (_head === null) {
      return 'Linked List is empty, insert some nodes into the linked list.'
    }
    let _linkedListCopy = _linkedList; let _llString = ''
    while (_linkedListCopy.next !== null) {
      _llString += _linkedListCopy.value + ' --> '
      _linkedListCopy = _linkedListCopy.next
    }
    _llString += _linkedListCopy.value + ' --> ' + 'null'
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
      _head = new _SinglyLLNode(value)
      _linkedList = _head
    } else {
      const _newNode = new _SinglyLLNode(value)
      _newNode.next = _linkedList
      _head = _newNode
      _linkedList = _newNode
    }
    _size += 1
    return `Inserted Value ${value} to the beginning of the Linked List`
  }

  /**
     * Description: Inserts new Node into the Linked List from the end of the linked list.
     *
     * Complexity - O(N)
     *
     * @param {number} value - value to be inserted at the end of the linked list.
     * @returns status
     */
  this.insertAtEnd = function (value) {
    if (!value) throw new Error(' Value can not be undefined or null')

    if (_head === null) {
      _head = new _SinglyLLNode(value)
      _linkedList = _head
    } else {
      const _newNode = new _SinglyLLNode(value)
      let __iLList = _head
      while (__iLList.next !== null) {
        __iLList = __iLList.next
      }
      __iLList.next = _newNode
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
      throw new Error('Linked List is empty')
    } else {
      statusMsg = `Deleted the element ${_linkedList.value} from the beginning`
      _linkedList = _linkedList.next
      _head = _linkedList
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
      throw new Error('Linked List is empty')
    } else if (_size > 1) {
      let _iLList = _linkedList
      while (_iLList.next.next !== null) {
        _iLList = _iLList.next
      }
      _iLList.next = null
      statusMsg = `Deleted the last element ${_iLList.value} of the linked list`
      _size -= 1
    } else if (_size === 1) {
      statusMsg = 'Size should be more than one, you can go for purging Linked List.'
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
    if (location >= _size) { throw new Error('Location must be less than or equal to the size of the linked list') }

    if (_head === null) {
      throw new Error('Linked List is empty')
    } else if (_size > 1) {
      let _iLList = _linkedList
      for (let i = 1; i < location; i++) {
        _iLList = _iLList.next
      }

      statusMsg = `Deleted ${_iLList.next.value} node from location ${location} of the linked list`
      _iLList.next = _iLList.next.next
      _size -= 1
    } else if (_size === 1) {
      statusMsg = 'Size should be more than one, you can go for purging Linked List.'
    }
    return statusMsg
  }
}

module.exports = _SinglyLinkedList
