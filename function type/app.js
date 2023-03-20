var cl = console.log;
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    cl("the result is ".concat(num));
}
function multi(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}
var text;
//in above case => this is not a arrow function this is a function type 
//bcoz in this statement we understand one thing that we want to assign
//function but the function which have 2 parameters and the parameters 
//d/t should be number and its result d/t also should be number....
text = add;
text = multi;
text = div;
cl(text(10, 10));
