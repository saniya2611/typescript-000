// let cl = console.log;

// // working with boolean , numbers  , strings

// // let x; d/t = any

//   function add (n1:number , n2:number , showResult : boolean, phrase : string){
//    let result = n1 + n2;
//    return showResult ? cl(phrase + result) : phrase + result
//    // if(showResult){
//     //     cl(phrase + result)
//     // }else{
//     //     return phrase + result  ;
//     // }
//   }  


// //   var num =10 ;

// //   var Car = (function () {
// //     function Car ()  {
// //     }
// //     return Car ;
// //   } ());

// let num1 = 10;

// let num2 = 20;

// // (add(num1, num2, true))

// cl (add(num1, num2, false,"The addition is "))


// ------------------------OBJECT TYPE-----------------------

// ts gives us some keyword like type , interface

// type personObj = {
//     fName : string,
//     lName : string,
//     age   : number
// }


// let person: personObj = {
//     fName : "Jen",
//     lName : "Doe",
//     age   : 27
// } 
// person = {
//     fName : "jhon",
//     lName : "doe",
//     age   : 33
// }

//type alias, interface, class


type person = {
    fName : string,
    lName : string,
    age : number,
    email  : string,
    isDriving : Boolean,
    child : {
        fName : string,
        nickName : string,
        age : number
    }
}

let person : person = {
     fName : "Jhon",
     lName : "Doe",
     age : 30,
     email : "jd123@gmail.com",
     isDriving : true,
     child : {
        fName  : "june",
        nickName : "chiku",
        age : 3
     }
}