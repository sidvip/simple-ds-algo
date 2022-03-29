/**
 * @param {*} size - Size of the queue
 *
 * This implementation of queue is done using Javascript Arrays.
 * author: Siddhartha Vibhu Pharswan
 * dated: Dec 31, 2021
 *
 * Description: Queue works on FIFO principle.
 */

const _Queue = function (size) {
  let _queueArray = []
  const _size = size

  /**
     * Description - Returns the size of the queue.
     * @returns {number} - Size of the queue.
     */

  this.getSize = function () {
    return _size || _queueArray.length
  }

  /**
     * Description - purges the queue from the memory.
     * @returns returns the status of purging.
     */

  this.purgeQueue = function () {
    _queueArray = []
    return 'Queue purged successfully.'
  }

  /**
     * Description - Checks whether the queue is empty or not.
     * @returns whether the queue is empty or not.
     */

  this.isEmpty = function () {
    return _queueArray.length === 0
  }

  /**
     * Description - Inserts the new element at the end of the queue.
     * @param {*} value - Value to be pushed inside the Queue.
     */

  this.enqueue = function (value) {
    if (_queueArray.length < _size || !_size) {
      _queueArray.push(value)
      return _queueArray
    } else {
      throw new Error('Queue overflow condition detected :(')
    }
  }

  /**
     * Description - Returns the first element of the queue if queue is not empty.
     * @returns the first element of the queue or the first inserted element of the queue.
     */
  this.peek = function () {
    if (!this.isEmpty()) {
      return _queueArray[0]
    } else {
      throw new Error('Queue is empty')
    }
  }

  /**
     * Description - Returns the first element of the queue. Sometimes it is called as Dequing also.
     * @returns the first inserted element of the stack.
     */
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return _queueArray.shift()
    } else {
      throw new Error('Queue is empty')
    }
  }
}

module.exports = _Queue
