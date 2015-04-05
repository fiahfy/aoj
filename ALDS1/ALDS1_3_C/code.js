function DoublyLink(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.first = null;
    this.last = null;
}

DoublyLinkedList.prototype.insert = function(link) {
    if (this.first) {
        this.first.prev = link;
        link.next = this.first;
        this.first = link;
        return;
    }
    this.first = link;
    this.last = link;
};

DoublyLinkedList.prototype.delete = function(link) {
    var l = this.find(link);
    if (!l) {
        return;
    }
    var prev = l.prev;
    var next = l.next;

    if (l.prev) {
        l.prev.next = l.next;
        if (!l.next) {
            this.last = l.prev;
        }
    }
    if (l.next) {
        l.next.prev = l.prev;
        if (!l.prev) {
            this.first = l.next;
        }
    }
};

DoublyLinkedList.prototype.deleteFirst = function() {
    if (!this.first) {
        return;
    }
    if (!this.first.next) {
        this.first = null;
        this.last = null;
        return;
    }
    this.first.next.prev = null;
    this.first = this.first.next;
}

DoublyLinkedList.prototype.deleteLast = function() {
    if (!this.last) {
        return;
    }
    if (!this.last.prev) {
        this.first = null;
        this.last = null;
        return;
    }
    this.last.prev.next = null;
    this.last = this.last.prev;
}

DoublyLinkedList.prototype.find = function(link) {
    var l = this.first;
    while (l) {
        if (l.value === link.value) {
            return l;
        }
        l = l.next;
    }
    return null;
};

DoublyLinkedList.prototype.list = function() {
    var a = [];
    var l = this.first;
    while (l) {
        a.push(l);
        l = l.next;
    }
    return a;
};

(function(input) {
    var p = input.split('\n');
    var n = Number(p.shift());
    var cs = p.slice(0, n);
    var l = new DoublyLinkedList();
    cs.forEach(function(e) {
        l = command(l, e);
    });
    //console.log(l.list());
    console.log(l.list().map(function(e) {
        return e.value;
    }).join(' '));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

function command(list, c) {
    var a = c.split(' ');
    var com = a.shift();
    var arg = Number(a.shift());
    switch (com) {
        case 'insert':
            var l = new DoublyLink(arg);
            list.insert(l);
            break;
        case 'delete':
            var l = new DoublyLink(arg);
            list.delete(l);
            break;
        case 'deleteFirst':
            list.deleteFirst();
            break;
        case 'deleteLast':
            list.deleteLast();
            break;
    }
    return list;
}
