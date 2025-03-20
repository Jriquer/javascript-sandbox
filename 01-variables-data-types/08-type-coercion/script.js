let x;

// Coerced to a string
x = 5 + '5';

x = 5 + Number('5');


// Coerced to a number
x = 5 * '5';

// null is coerced to 0 as it is a `falsy` value

x = 5 + null;

// true is coerced to a 1

x = Number(true);
// false is coerced to 0 (falsy)
x = Number(false);

// Undefined is coerced to 0 (falsy)


console.log(x, typeof x);




