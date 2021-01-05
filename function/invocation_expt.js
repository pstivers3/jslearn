var foo = function() {
    console.log("I am foo");
	return "I am foo";
}

// not recognized as a function, because of the declaration above?
// var goo = function woo() {
var goo = function() {
    console.log("I am woo, aka goo"); // prints without calling the function goo
    function chew() {
        console.log ("munch munch. yummy!");
        return "munch munch. yummy!";
	}
}

( function iife() {             // immediately invoked function
    console.log("I am iife");
}() );

foo();
x = foo();
console.log(x, "too");

// y = goo(); // thows an error, goo is not a function
// chew();  // throws error, good.chew is not a function
