function Dice(labels) {
    this.top = labels[0];
    this.back = labels[1];
    this.right = labels[2];
    this.left = labels[3];
    this.front = labels[4];
    this.bottom = labels[5];
};

Dice.prototype.roll = function(direction) {
    switch (direction) {
        case 'W':
            var tmp = this.left;
            this.left = this.top;
            this.top = this.right;
            this.right = this.bottom;
            this.bottom = tmp;
            break;
        case 'N':
            var tmp = this.front;
            this.front = this.top;
            this.top = this.back;
            this.back = this.bottom;
            this.bottom = tmp;
            break;
        case 'E':
            var tmp = this.right;
            this.right = this.top;
            this.top = this.left;
            this.left = this.bottom;
            this.bottom = tmp;
            break;
        case 'S':
            var tmp = this.back;
            this.back = this.top;
            this.top = this.front;
            this.front = this.bottom;
            this.bottom = tmp;
            break;
    }
};

(function(input) {
    var p = input.split('\n');
    var labels = p.shift().split(' ').map(Number);
    var rolls = p.shift().split('');
    var dice = new Dice(labels);
    rolls.forEach(function(e) {
        dice.roll(e);
    });
    console.log(dice.top);
})(require('fs').readFileSync('/dev/stdin', 'utf8'));
