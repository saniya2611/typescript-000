var cl = console.log;
// type Combinable = number | string;
// function combine(n1:Combinable, n2:Combinable, resultConversion: "as-number" | "as-string"){
//     let result : any;
//     if(typeof n1 === "number" && typeof n2 === "number"){
//         result = n1 + n2
//     }else{
//         result = n1.toString() + n2.toString()
//     }
//     if (resultConversion === "as-number"){
//         return +result;
//     }
//     if( resultConversion === "as-string"){
//         return result.toString();
//     }
// }
// cl(combine(16, 34, "as-string"));
// cl(combine("45","78", "as-number"))
function add(n1, n2) {
    return (n1 + n2) + '';
}
function add2(n1, n2) {
    return (n1 + n2);
}
function getPost() {
    return [
        { id: 1, userId: 1, title: "string", body: "string" }
    ];
}
//when we dnt hv to return anything then we hv to write void d/t for it...
//if we write void then we can't write return...only we should use cl
