/**
 * @param {*} size - Size of the stack
 *
 * This implementation of Stack is done using Javascript Arrays.
 * author: Siddhartha Vibhu Pharswan
 * dated: Dec 31, 2021
 *
 * Description: Stack works on LIFO or FILO principle.
 */

const _Stack = function (size) {
  let _stackArray = []
  const _size = size

  /**
     * Description - Returns the size of the stack.
     * @returns {number} - Size of the stack.
     */

  this.getSize = function () {
    return _size || _stackArray.length
  }

  /**
     * Description - purges the stack from the memory.
     * @returns returns the status of purging.
     */

  this.purgeStack = function () {
    _stackArray = []
    return 'Stack purged successfully.'
  }

  /**
     * Description - Checks whether the stack is empty or not.
     * @returns whether the stack is empty or not.
     */

  this.isEmpty = function () {
    return _stackArray.length === 0
  }

  /**
     * Description - Inserts the new element at the top of the stack.
     * @param {*} value - Value to be pushed inside the Stack.
     */

  this.push = function (value) {
    if (_stackArray.length < _size || !_size) {
      _stackArray.push(value)
      return _stackArray
    } else {
      throw new Error('Stack overflow condition detected :(')
    }
  }

  /**
     * Description - Returns the last element of the stack if stack is not empty.
     * @returns the top element of the stack or the last inserted element of the stack.
     */
  this.peek = function () {
    if (!this.isEmpty()) {
      return _stackArray[_stackArray.length - 1]
    } else {
      throw new Error('Stack is empty')
    }
  }

  /**
     * Description - Returns the last element of the stack.
     * @returns the last element or top element of the stack.
     */
  this.pop = function () {
    if (!this.isEmpty()) {
      return _stackArray.pop()
    } else {
      throw new Error('Stack is empty')
    }
  }
}

module.exports = _Stack
