/**
 * @param {*} element
 * @constructor
 */
function LinkedNode(element) {
    this.element = element;
    this.previous = null;
    this.next = null;
}

/**
 * @constructor
 */
function LinkedList() {
    this.dummy = new LinkedNode(null);
    this.dummy.previous = this.dummy;
    this.dummy.next = this.dummy;
}

/**
 * @return {*}
 */
LinkedList.prototype.getFirst = function() {
    return this.dummy.next.element;
};

/**
 * @return {*}
 */
LinkedList.prototype.getLast = function() {
    return this.dummy.previous.element;
};

/**
 * @param {*} element
 */
LinkedList.prototype.add = function(element) {
    var lastNode = this.dummy.previous;
    var node = new LinkedNode(element);
    node.previous = lastNode;
    node.next = this.dummy;
    this.dummy.previous = node;
    lastNode.next = node;
};

/**
 * @param {*} element
 */
LinkedList.prototype.addFirst = function(element) {
    var firstNode = this.dummy.next;
    var node = new LinkedNode(element);
    node.previous = this.dummy;
    node.next = firstNode;
    this.dummy.next = node;
    firstNode.previous = node;
};

/**
 * @param {*} element
 */
LinkedList.prototype.addLast = function(element) {
    this.add(element);
};

/**
 * @param {*} element
 * @return {*}
 */
LinkedList.prototype.remove = function(element) {
    var node = this.dummy;
    while (node = node.next) {
        if (node == this.dummy) {
            return null;
        }
        if (node.element === element) {
            break;
        }
    }
    var previousNode = node.previous;
    var nextNode = node.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    return node;
};

/**
 * @return {*}
 */
LinkedList.prototype.removeFirst = function() {
    var firstNode = this.dummy.next;
    var secondNode = firstNode.next;
    this.dummy.next = secondNode;
    secondNode.previous = this.dummy;
    return firstNode;
};

/**
 * @return {*}
 */
LinkedList.prototype.removeLast = function() {
    var lastNode = this.dummy.previous;
    var secondLastNode = lastNode.previous;
    this.dummy.previous = secondLastNode;
    secondLastNode.next = this.dummy;
    return lastNode
};

/**
 * @return {Array}
 */
LinkedList.prototype.toArray = function() {
    var array = [];
    var node = this.dummy;
    while (node = node.next) {
        if (node == this.dummy) {
            return array;
        }
        array.push(node.element);
    }
};

module.exports = LinkedList;
