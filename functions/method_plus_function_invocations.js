// ---- method invocaton ----

// Create myObject. It has a value and an increment method.
// The increment method takes an optional parameter.
// If the argument is not a number, then 1 is used as the default.
var myObject = {
    value: 0,
    increment: function (inc) {
         this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment(  );
document.writeln('increment 0 by 1 = ' + myObject.value);    // 1

myObject.increment(2);
document.writeln('increment 1 by 2 = ' + myObject.value);    // 3

// ---- function invocation ----

// Augment myObject with a double function 
myObject.double = function ( ) {
    var that = this;  // workaround

    var helper = function ( ) {
        // that.value = add(that.value, that.value); // add is not defined
        // that.value = (Number(that.value) + Number(that.value)); // works too
        that.value = (+that.value + +that.value);
    }

    helper( );    // Invoke helper as a function.
}

// Invoke double as a method.
myObject.double( );
document.writeln('doubled 3 is ' + myObject.value);     // 6

