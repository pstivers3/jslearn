function foo() {
    a = 1;  // `a` not formally declared
}

foo();
console.log(a);          // 1--oops, auto global variable :(
