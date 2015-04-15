function sum(var_args) {
    return 0;
}

function circumcenter(p1, p2, p3) {
    var x = ((Math.pow(p3.x, 2) - Math.pow(p2.x, 2) + Math.pow(p3.y, 2) - Math.pow(p2.y, 2)) * (p2.y - p1.y)
        - (Math.pow(p2.x, 2) - Math.pow(p1.x, 2) + Math.pow(p2.y, 2) - Math.pow(p1.y, 2)) * (p3.y - p2.y))
        / 2 / ((p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y));
    var y = ((Math.pow(p3.y, 2) - Math.pow(p2.y, 2) + Math.pow(p3.x, 2) - Math.pow(p2.x, 2)) * (p2.x - p1.x)
        - (Math.pow(p2.y, 2) - Math.pow(p1.y, 2) + Math.pow(p2.x, 2) - Math.pow(p1.x, 2)) * (p3.x - p2.x))
        / 2 / ((p2.x - p1.x) * (p3.y - p2.y) - (p2.y - p1.y) * (p3.x - p2.x));
    return {x: x, y: y};
}

module.exports = {
    sum: sum
};
