// Create myObject. It has a value and an increment method.
// The increment method takes an optional parameter.
// If the argument is not a number, then 1 is used as the default.

// incrament
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment( );
document.writeln('increment 0 by 1 = ' + myObject.value);    // 1

myObject.increment(2);
document.writeln('increment 1 by 2 = ' + myObject.value);    // 3

var mathObj = {
    outer_sum: 0,
    outer_diff: 0,
    sum: function (a, b) {
        var i = a;
        var j = b;
        this.outer_sum = (Number(i) + Number(j));
        var inner_sum = (+i + +j); // prepending + to the var casts the var as a number type
        return inner_sum;
    },

    diff: function(y, z) {
        var c = y;
        var d = z;
        this.outer_diff = (+c - +d);
    }

};

mathObj.sum(2, 4);
document.writeln('\n2 + 4 = ' + mathObj.outer_sum);
document.writeln('3 + 5 = ' + mathObj.sum(3, 5));

mathObj.diff(2, 4);
document.writeln('\n2 - 4 = ' + mathObj.outer_diff);
