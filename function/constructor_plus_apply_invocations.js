// ---- constructor invocation ----
// Create a constructor function called Quo.
// It makes an object with a status property.

var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method called get_status.
Quo.prototype.get_status = function ( ) {
    return this.status;
};

// Make an instance of Quo.
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status( )); // confused

// ---- apply invocation ----
// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // sum is 7

// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject); // status is 'A-OK'

