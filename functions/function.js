function pass_thru(a){
    return a;
}
document.writeln(pass_thru("boo"));

function foo() {
    return 42;
}

foo.bar = "hello world";

document.writeln("typeof foo is " + typeof foo);           // "function"
document.writeln("typeof foo() is " + typeof foo());       // "number"
document.writeln("typeof foo.bar is " + typeof foo.bar);   // "string"

