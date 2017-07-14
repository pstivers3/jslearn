var foo = function() {
    console.log("I am foo");
	return "I am foo";
}

var goo = function woo() {
    console.log("I am woo, aka goo");
    function chew() {
        console.log ("munch munch. yummy!");
        return "munch munch. yummy!";
	}
}

function boo() {
    console.log("boo!");
}

( function iife() {             // immediately invoked function
    console.log("I am iife");
}() );

foo();
x = foo();
console.log(x, "too");
goo();
goo.chew; //  does nothing
boo();

// woo();  // throws error, woo is undefined
