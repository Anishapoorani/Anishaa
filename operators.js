// Arthimatic
var a = 10;
var b = 20;
console.log(a+b)//addition

var a = 10;
var b = 20;
console.log(a-b)//subtraction

var a = 10;
var b = 20;
console.log(a*b)//multiplication

var a = 10;
var b = 20;
console.log(a/b)//division

var a = 10;
var b = 20;
console.log(a%b)//modules

var a = 10;
var b = 20;
console.log(a**b)//exponentiation

//Assingment
var c = 10;
console.log(c+=10)
console.log(c-=10)
console.log(c*=10)
console.log(c/=10)
console.log(c%=10)

//comparision operators
console.log("comparision opertoors");
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//logical
console.log("logical operators");
console.log(a>0 && b>0);
console.log(a>0 && b<0);
console.log(a>0 || b<0);
console.log(a>0 || b<0);
console.log(!(a>0));

//unary
console.log("unary operators");
var c = 30;
console.log(c++); //30 c - 31
console.log(c--); //31 c - 30
console.log(--c); // 29 c - 29
console.log(++c); // 30 c - 30

//Ternary
console.log("ternary operators");
var result = (a>b) ? "a is greater" : "b is greater";
// var variable = (condition) ? true value ; false value;
console.log(result); // o/p - b is greater   