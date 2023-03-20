let cl = console.log;
type combinable = number | string; //type alias
function combine(n1 : combinable , n2 : combinable){
    let result : any;
    if (typeof n1 === "number" && typeof n2 === "number"){
        return n1 + n2
    }else {
        return n1.toString() + n2.toString()
    }
}


cl(combine(13,3))
cl(combine("687",87687))


let x = 10 ;

const y = 5; //datatype of y is 5
//litrel type = value & datatype both will be same ...when we use const in typescript then litrel type create ...auto value and datatype will be same...


let z : 20 = 20;
//in this above case we assign the datatype number 20
//we can assign the number as a datatype...

