function foo() {
    var a = 1;

    if (a >= 1) {
        let b = 2;  // var gives same result

        while (b < 5) {
            let c = b * 2; //var gives same result
            b++;

            console.log( a + c );
        }
    }
}

foo();
// 5 7 9

function goo() {
    {
	    let a = 1;
		var b = 2;
	    console.log(a);
    }
	// console.log(a); // throws an error as expected
	console.log(b);
}

goo();

