var cl = console.log;
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
cl(combine(13, 3));
cl(combine("687", 87687));
var x = 10;
var y = 5; //datatype of y is 5
//litrel type = value & datatype both will be same ...when we use const in typescript then litrel type create ...auto value and datatype will be same...
var z = 20;
//in this above case we assign the datatype number 20
//we can assign the number as a datatype...
